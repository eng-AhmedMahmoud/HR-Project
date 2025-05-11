<template>
  <div class="selection-methods">
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th class="border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left text-black font-bold">Job Family</th>
          <th class="border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left text-black font-bold">Primary Methods</th>
          <th class="border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left text-black font-bold">Secondary Methods</th>
          <th class="border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-left text-black font-bold">Why Selected</th>
        </tr>
      </thead>
      <tbody>
        <tr v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
          <td class="border-b border-gray-200 px-4 py-3 font-medium text-blue-500">Executive</td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-blue-500">🏢</span>
              <span class="text-white">Structured Interviews</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-blue-500">📊</span>
              <span class="text-white">Case Presentations</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-blue-500">⚙️</span>
              <span class="text-white">Leadership Assessments</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-blue-500">📄</span>
              <span class="text-white">Reference Checks</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3 text-sm text-white">
            Evaluates strategic thinking, leadership capabilities, and cultural fit for senior positions
          </td>
        </tr>
        
        <tr v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }">
          <td class="border-b border-gray-200 px-4 py-3 font-medium text-purple-500">Technical</td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-purple-500">💻</span>
              <span class="text-white">Technical Assessments</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-purple-500">👥</span>
              <span class="text-white">Pair Programming</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-purple-500">📁</span>
              <span class="text-white">Portfolio Review</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-purple-500">🏢</span>
              <span class="text-white">Behavioral Interviews</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3 text-sm text-white">
            Directly assesses coding skills, problem-solving abilities, and technical knowledge
          </td>
        </tr>
        
        <tr v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
          <td class="border-b border-gray-200 px-4 py-3 font-medium text-green-500">Sales</td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-green-500">📊</span>
              <span class="text-white">Sales Simulations</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-green-500">👤</span>
              <span class="text-white">Role Plays</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-green-500">📈</span>
              <span class="text-white">Results Analysis</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-green-500">❓</span>
              <span class="text-white">Personality Assessments</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3 text-sm text-white">
            Evaluates persuasion skills, relationship building, and resilience in sales scenarios
          </td>
        </tr>
        
        <tr v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }">
          <td class="border-b border-gray-200 px-4 py-3 font-medium text-orange-500">Customer Success</td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-orange-500">📅</span>
              <span class="text-white">Customer Scenarios</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-orange-500">🔍</span>
              <span class="text-white">Service Simulations</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-orange-500">💡</span>
              <span class="text-white">Emotional Intelligence</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-orange-500">🗂️</span>
              <span class="text-white">Problem-Solving Tests</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3 text-sm text-white">
            Assesses empathy, communication skills, and ability to handle customer challenges
          </td>
        </tr>
        
        <tr v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
          <td class="border-b border-gray-200 px-4 py-3 font-medium text-red-500">Data Science</td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-red-500">📊</span>
              <span class="text-white">Data Challenges</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-red-500">📈</span>
              <span class="text-white">Algorithm Design</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3">
            <div class="flex items-center">
              <span class="mr-2 text-red-500">📋</span>
              <span class="text-white">Case Analysis</span>
            </div>
            <div class="flex items-center mt-2">
              <span class="mr-2 text-red-500">📑</span>
              <span class="text-white">Research Presentation</span>
            </div>
          </td>
          <td class="border-b border-gray-200 px-4 py-3 text-sm text-white">
            Tests analytical thinking, statistical knowledge, and ability to derive insights from data
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.selection-methods {
  overflow-x: auto;
  margin: 0 auto;
  max-width: 90%;
  margin-bottom: 3rem;
}
</style>