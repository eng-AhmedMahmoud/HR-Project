<template>
  <div class="ai-animation relative w-full h-full" :style="{ width: width + 'px', height: height + 'px' }">
    <!-- Neural Network Animation -->
    <div class="absolute inset-0">
      <svg :width="width" :height="height" class="neural-network">
        <!-- Nodes -->
        <g v-for="(node, index) in nodes" :key="`node-${index}`">
          <circle
            :cx="node.x"
            :cy="node.y"
            :r="node.r"
            :fill="node.color"
            class="node-circle"
            :style="{ 
              animation: `pulse ${1 + Math.random()}s infinite alternate`, 
              animationDelay: `${Math.random() * 0.8}s` 
            }"
          />
        </g>
        
        <!-- Connections -->
        <g v-for="(conn, index) in connections" :key="`conn-${index}`">
          <line
            :x1="conn.source.x"
            :y1="conn.source.y"
            :x2="conn.target.x"
            :y2="conn.target.y"
            :stroke="conn.color"
            stroke-width="1"
            class="connection-line"
            :style="{ 
              animation: `glow ${1 + Math.random()}s infinite alternate`, 
              animationDelay: `${Math.random() * 0.5}s`,
              opacity: conn.opacity
            }"
          />
        </g>
        
        <!-- Data Packets -->
        <g v-for="(packet, index) in dataPackets" :key="`packet-${index}`">
          <circle
            :cx="packet.x"
            :cy="packet.y"
            r="2"
            :fill="packet.color"
            class="data-packet"
          />
        </g>
      </svg>
    </div>
    
    <!-- Floating Text Elements -->
    <div v-if="showLabels" class="absolute top-2 left-2 text-xs text-blue-300 opacity-70 ai-label">Neural Network</div>
    <div v-if="showLabels" class="absolute bottom-2 right-2 text-xs text-purple-300 opacity-70 ai-label">Deep Learning</div>
    <div v-if="showLabels" class="absolute top-2 right-2 text-xs text-green-300 opacity-70 ai-label">Machine Learning</div>
    <div v-if="showLabels" class="absolute bottom-2 left-2 text-xs text-pink-300 opacity-70 ai-label">AI Models</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

// Props
const props = defineProps({
  width: {
    type: Number,
    default: 300
  },
  height: {
    type: Number,
    default: 200
  },
  nodeCount: {
    type: Number,
    default: 24
  },
  connectionDensity: {
    type: Number,
    default: 3
  },
  showLabels: {
    type: Boolean,
    default: true
  }
})

// State
const nodes = ref([])
const connections = ref([])
const dataPackets = ref([])
const animationFrame = ref(null)

// Colors
const nodeColors = [
  'rgba(59, 130, 246, 0.7)', // blue
  'rgba(139, 92, 246, 0.7)',  // purple
  'rgba(236, 72, 153, 0.7)',  // pink
  'rgba(16, 185, 129, 0.7)'   // green
]

// Setup neural network
onMounted(() => {
  generateNetwork()
  animatePackets()
})

// Cleanup
onBeforeUnmount(() => {
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value)
  }
})

// Create network nodes and connections
const generateNetwork = () => {
  // Create nodes
  for (let i = 0; i < props.nodeCount; i++) {
    const x = Math.random() * props.width
    const y = Math.random() * props.height
    const size = 3 + Math.random() * 4
    
    nodes.value.push({
      x,
      y,
      r: size,
      color: nodeColors[Math.floor(Math.random() * nodeColors.length)]
    })
  }
  
  // Create connections between nodes
  for (let i = 0; i < nodes.value.length; i++) {
    const sourceNode = nodes.value[i]
    
    // Each node connects to a few other nodes
    for (let j = 0; j < props.connectionDensity; j++) {
      const targetIndex = Math.floor(Math.random() * nodes.value.length)
      if (targetIndex !== i) {
        const targetNode = nodes.value[targetIndex]
        
        connections.value.push({
          source: sourceNode,
          target: targetNode,
          color: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.3})`,
          opacity: 0.1 + Math.random() * 0.3
        })
      }
    }
  }
  
  // Create initial data packets
  createDataPackets(5)
}

// Create data packets that will travel along connections
const createDataPackets = (count) => {
  for (let i = 0; i < count; i++) {
    if (connections.value.length > 0) {
      const connection = connections.value[Math.floor(Math.random() * connections.value.length)]
      
      dataPackets.value.push({
        x: connection.source.x,
        y: connection.source.y,
        targetX: connection.target.x,
        targetY: connection.target.y,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01,
        color: nodeColors[Math.floor(Math.random() * nodeColors.length)],
        connection
      })
    }
  }
}

// Animate data packets along connections
const animatePackets = () => {
  // Update packet positions
  dataPackets.value.forEach((packet, index) => {
    packet.progress += packet.speed
    
    // Linear interpolation between source and target
    packet.x = packet.connection.source.x + (packet.connection.target.x - packet.connection.source.x) * packet.progress
    packet.y = packet.connection.source.y + (packet.connection.target.y - packet.connection.source.y) * packet.progress
    
    // If packet reached target, reset or remove
    if (packet.progress >= 1) {
      // 80% chance to create a new packet
      if (Math.random() < 0.8 && connections.value.length > 0) {
        const connection = connections.value[Math.floor(Math.random() * connections.value.length)]
        
        packet.x = connection.source.x
        packet.y = connection.source.y
        packet.targetX = connection.target.x
        packet.targetY = connection.target.y
        packet.progress = 0
        packet.speed = 0.005 + Math.random() * 0.01
        packet.color = nodeColors[Math.floor(Math.random() * nodeColors.length)]
        packet.connection = connection
      } else {
        // Remove this packet
        dataPackets.value.splice(index, 1)
        
        // Create a new packet
        if (Math.random() < 0.5 && connections.value.length > 0) {
          createDataPackets(1)
        }
      }
    }
  })
  
  // Add occasional new packets
  if (dataPackets.value.length < 12 && Math.random() < 0.05) {
    createDataPackets(1)
  }
  
  // Continue animation
  animationFrame.value = requestAnimationFrame(animatePackets)
}
</script>

<style scoped>
.ai-animation {
  overflow: hidden;
}

.node-circle {
  filter: drop-shadow(0 0 3px currentColor);
}

.connection-line {
  filter: drop-shadow(0 0 1px currentColor);
}

.data-packet {
  filter: drop-shadow(0 0 2px currentColor);
}

.ai-label {
  text-shadow: 0 0 5px currentColor;
}

@keyframes pulse {
  0% { opacity: 0.4; }
  100% { opacity: 0.9; }
}

@keyframes glow {
  0% { opacity: 0.1; }
  100% { opacity: 0.6; }
}
</style> 