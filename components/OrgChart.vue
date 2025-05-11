<template>
  <div class="org-chart">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
      class="level-1"
    >
      <div class="node bg-blue-500">
        <span class="text-2xl">👥</span>
        <div class="font-bold">Executive Team</div>
        <div class="text-xs">(CEO, CTO, COO, CFO)</div>
      </div>
    </div>
    
    <div class="connector-wrapper">
      <div class="connector"></div>
    </div>
    
    <div class="level-2-wrapper">
      <div 
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
        class="level-2"
      >
        <div class="node bg-purple-500">
          <span class="text-2xl">💻</span>
          <div class="font-bold">Product</div>
          <div class="text-xs">Development</div>
        </div>
      </div>
      
      <div 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
        class="level-2"
      >
        <div class="node bg-green-500">
          <span class="text-2xl">📊</span>
          <div class="font-bold">Data</div>
          <div class="text-xs">Science</div>
        </div>
      </div>
      
      <div 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 800 } }"
        class="level-2"
      >
        <div class="node bg-orange-500">
          <span class="text-2xl">🛠️</span>
          <div class="font-bold">Customer</div>
          <div class="text-xs">Success</div>
        </div>
      </div>
      
      <div 
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 800, duration: 800 } }"
        class="level-2"
      >
        <div class="node bg-red-500">
          <span class="text-2xl">📈</span>
          <div class="font-bold">Sales &</div>
          <div class="text-xs">Marketing</div>
        </div>
      </div>
    </div>
    
    <div class="connector-wrapper level-2-3">
      <div class="connector"></div>
      <div class="connector"></div>
      <div class="connector"></div>
      <div class="connector"></div>
    </div>
    
    <div class="level-3-wrapper">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 900, duration: 800 } }"
        class="level-3"
      >
        <div class="node bg-blue-400">
          <span class="text-xl">💰</span>
          <div class="font-bold text-sm">Finance</div>
        </div>
      </div>
      
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 800 } }"
        class="level-3"
      >
        <div class="node bg-purple-400">
          <span class="text-xl">👤</span>
          <div class="font-bold text-sm">HR</div>
        </div>
      </div>
      
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1100, duration: 800 } }"
        class="level-3"
      >
        <div class="node bg-green-400">
          <span class="text-xl">🔧</span>
          <div class="font-bold text-sm">Admin</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.org-chart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.level-1, .level-2, .level-3 {
  text-align: center;
  margin: 0 10px;
}

.node {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.connector-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  position: relative;
}

.level-2-3 {
  justify-content: space-evenly;
  width: 60%;
}

.connector {
  width: 2px;
  height: 100%;
  background-color: #ccc;
}

.level-2-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.level-3-wrapper {
  display: flex;
  justify-content: space-evenly;
  width: 60%;
}
</style>