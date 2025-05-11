<template>
  <div
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 100, duration: 500 } }"
  >
    <h3 class="text-2xl font-bold text-blue-500 mb-6">Revenue Projections</h3>
    <div class="h-64 mb-4">
    <Bar 
      id="revenue-chart"
      :data="chartData"
      :options="chartOptions"
    />
    </div>
    <div class="grid grid-cols-3 gap-4 text-center mt-4">
      <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }" class="bg-blue-500 bg-opacity-10 p-3 rounded-lg">
        <div class="text-xs text-gray-500">Year 1</div>
        <div class="text-xl font-bold text-blue-500">$750K</div>
      </div>
      <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 700 } }" class="bg-purple-500 bg-opacity-10 p-3 rounded-lg">
        <div class="text-xs text-gray-500">Year 2</div>
        <div class="text-xl font-bold text-purple-500">$2.1M</div>
      </div>
      <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 900 } }" class="bg-green-500 bg-opacity-10 p-3 rounded-lg">
        <div class="text-xs text-gray-500">Year 3</div>
        <div class="text-xl font-bold text-green-500">$4.8M</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['Year 1', 'Year 2', 'Year 3'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: ['rgba(59, 130, 246, 0.6)', 'rgba(139, 92, 246, 0.6)', 'rgba(16, 185, 129, 0.6)'],
      borderColor: ['rgb(59, 130, 246)', 'rgb(139, 92, 246)', 'rgb(16, 185, 129)'],
      borderWidth: 1,
      data: [750000, 2100000, 4800000]
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000,
    easing: 'easeOutQuart'
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let value = context.raw;
          return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value) {
          return '$' + (value / 1000000).toFixed(1) + 'M';
        }
      }
    }
  }
})
</script>

<style scoped>
/* Add some styling to ensure the chart container is visible */
#revenue-chart {
  width: 100%;
  height: 100%;
}
</style>