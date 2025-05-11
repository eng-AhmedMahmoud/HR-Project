---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
background: https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Startup HR Pitch Presentation
  Presentation for the HR course project (HRM924).
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# InnoHire

<div class="text-2xl text-blue-400 font-medium mb-10">Building the future of work, one talent at a time</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
    Start Presentation ➡️
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <span>GitHub</span>
  </a>
</div>

<!--
Welcome to our investor pitch for InnoHire.

Today we'll share how our startup is revolutionizing the recruitment process through innovative HR strategies and technology.
-->

---
transition: fade-out
layout: center
class: text-center
---

# Meet Our Team

<div class="grid grid-cols-3 gap-4 mt-10">
  <div v-click class="text-center">
    <div class="rounded-full bg-blue-600 w-32 h-32 mx-auto flex items-center justify-center text-white text-4xl font-bold">A</div>
    <div class="mt-4 text-xl font-medium">Ahmed</div>
    <div class="text-gray-400">CEO & HR Strategy</div>
  </div>
  
  <div v-click class="text-center">
    <div class="rounded-full bg-purple-600 w-32 h-32 mx-auto flex items-center justify-center text-white text-4xl font-bold">G</div>
    <div class="mt-4 text-xl font-medium">Gamal</div>
    <div class="text-gray-400">CTO & Product Development</div>
  </div>
  
  <div v-click class="text-center">
    <div class="rounded-full bg-green-600 w-32 h-32 mx-auto flex items-center justify-center text-white text-4xl font-bold">B</div>
    <div class="mt-4 text-xl font-medium">Belal</div>
    <div class="text-gray-400">COO & Operations</div>
  </div>
</div>

<!--
We're a diverse team of professionals with complementary skills and extensive experience in HR, technology, operations, and finance.
-->

---
layout: two-cols
---

# Our Mission

<div class="mt-6 text-lg leading-relaxed">
  <p v-click>
    At <span class="text-blue-500 font-semibold">InnoHire</span>, we're revolutionizing how companies find, develop, and retain top talent through AI-powered HR solutions.
  </p>
  
  <p v-click class="mt-4">
    We provide an end-to-end HR platform designed for modern businesses, combining cutting-edge technology with proven HR methodologies.
  </p>
  
  <p v-click class="mt-4">
    Our mission is to <span class="text-blue-500 font-semibold">empower organizations to build exceptional teams</span> while creating meaningful work experiences for employees.
  </p>
</div>

::right::

<div class="flex justify-center items-center h-full pl-10">
  <div class="relative h-64 w-64">
    <div 
      v-motion
      :initial="{ x: 300, y: -100, opacity: 0 }"
      :enter="{ x: 0, y: 0, opacity: 1, transition: { delay: 300, duration: 1000 } }"
      class="absolute w-48 h-48 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center border border-blue-500"
    >
      <div class="text-xl font-bold text-blue-500">📄</div>
    </div>
    <div 
      v-motion
      :initial="{ x: 300, y: 100, opacity: 0 }"
      :enter="{ x: 20, y: 20, opacity: 1, transition: { delay: 600, duration: 1000 } }"
      class="absolute w-48 h-48 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center border border-purple-500"
    >
      <div class="text-xl font-bold text-purple-500">✅</div>
    </div>
    <div 
      v-motion
      :initial="{ x: 300, y: 300, opacity: 0 }"
      :enter="{ x: 40, y: 40, opacity: 1, transition: { delay: 900, duration: 1000 } }"
      class="absolute w-48 h-48 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center border border-green-500"
    >
      <div class="text-xl font-bold text-green-500">👤</div>
    </div>
  </div>
</div>

<!--
Our mission drives everything we do. We're combining AI, data analytics, and human expertise to transform how companies manage their most valuable asset: their people.
-->

---
layout: image-right
image: https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600
---

# HR Planning Strategy

<v-clicks>

- **Market & Workforce Analysis**  
  Comprehensive study of talent landscape and competitive environment

- **Skills Gap Identification**  
  AI-powered assessment of emerging skills needs

- **Strategic Recruitment Planning**  
  Proactive talent acquisition for current and future needs

- **Succession Planning**  
  Identifying and developing future leaders

- **Workforce Optimization**  
  Right people, right skills, right time

</v-clicks>

<!--
Our HR planning starts with a thorough understanding of both the market landscape and our internal needs, allowing us to build a strategic workforce plan.
-->

---
transition: slide-up
layout: default
---

# Organizational Structure

<div class="flex justify-center mt-6">
  <div class="relative w-full max-w-3xl">
    <OrgChart />
  </div>
</div>

<!--
Our organizational structure is designed to be flat and agile, promoting cross-functional collaboration while maintaining clear reporting lines and accountability.
-->

---
layout: two-cols
---

# Job Titles & Positions

<div class="mt-4">
  <div v-click class="mb-4">
    <div class="text-lg font-semibold text-blue-500">Executive Team (3)</div>
    <ul class="ml-6 text-sm">
      <li>CEO (1)</li>
      <li>CTO (1)</li>
      <li>COO (1)</li>
    </ul>
  </div>
  
  <div v-click class="mb-4">
    <div class="text-lg font-semibold text-purple-500">Product Development (6)</div>
    <ul class="ml-6 text-sm">
      <li>Product Manager (1)</li>
      <li>UX/UI Designer (1)</li>
      <li>Full-Stack Developers (3)</li>
      <li>QA Engineer (1)</li>
    </ul>
  </div>
  
  <div v-click class="mb-4">
    <div class="text-lg font-semibold text-green-500">Customer Success (4)</div>
    <ul class="ml-6 text-sm">
      <li>Customer Success Manager (1)</li>
      <li>Implementation Specialists (2)</li>
      <li>Customer Support (1)</li>
    </ul>
  </div>
</div>

::right::

<div class="ml-6 mt-4">
  <div v-click class="mb-4">
    <div class="text-lg font-semibold text-orange-500">Sales & Marketing (5)</div>
    <ul class="ml-6 text-sm">
      <li>Sales Director (1)</li>
      <li>Account Executives (2)</li>
      <li>Digital Marketing Manager (1)</li>
      <li>Content Specialist (1)</li>
    </ul>
  </div>
  
  <div v-click class="mb-4">
    <div class="text-lg font-semibold text-red-500">HR & Operations (3)</div>
    <ul class="ml-6 text-sm">
      <li>HR Manager (1)</li>
      <li>Finance Specialist (1)</li>
      <li>Office Administrator (1)</li>
    </ul>
  </div>
  
  <div v-click class="mb-4">
    <div class="text-lg font-semibold text-blue-400">Data Science (3)</div>
    <ul class="ml-6 text-sm">
      <li>Data Science Lead (1)</li>
      <li>AI Engineers (2)</li>
    </ul>
  </div>
</div>

<!--
We've identified 24 key positions across 6 departments to launch and scale our startup effectively. This structure gives us the right mix of technical talent, business development, and operational support.
-->

---
layout: default
---

# Job Analysis Methods

<div class="grid grid-cols-3 gap-8 mt-8">
  <div v-click class="bg-blue-500 bg-opacity-10 p-4 rounded-lg border border-blue-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-blue-500 text-3xl mb-2">📄</div>
    <div class="font-semibold mb-1">Structured Interviews</div>
    <div class="text-sm text-gray-400">For executive and managerial roles</div>
  </div>
  
  <div v-click class="bg-purple-500 bg-opacity-10 p-4 rounded-lg border border-purple-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-purple-500 text-3xl mb-2">✅</div>
    <div class="font-semibold mb-1">Task Analysis</div>
    <div class="text-sm text-gray-400">For technical and specialized roles</div>
  </div>
  
  <div v-click class="bg-green-500 bg-opacity-10 p-4 rounded-lg border border-green-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-green-500 text-3xl mb-2">👤</div>
    <div class="font-semibold mb-1">Job Shadowing</div>
    <div class="text-sm text-gray-400">For customer-facing roles</div>
  </div>
  
  <div v-click class="bg-orange-500 bg-opacity-10 p-4 rounded-lg border border-orange-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-orange-500 text-3xl mb-2">📋</div>
    <div class="font-semibold mb-1">Questionnaires</div>
    <div class="text-sm text-gray-400">For understanding day-to-day tasks</div>
  </div>
  
  <div v-click class="bg-red-500 bg-opacity-10 p-4 rounded-lg border border-red-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-red-500 text-3xl mb-2">⚙️</div>
    <div class="font-semibold mb-1">Competency Modeling</div>
    <div class="text-sm text-gray-400">For identifying critical skills</div>
  </div>
  
  <div v-click class="bg-blue-400 bg-opacity-10 p-4 rounded-lg border border-blue-400 transform transition-all duration-500 hover:scale-105">
    <div class="text-blue-400 text-3xl mb-2">📊</div>
    <div class="font-semibold mb-1">Position Analysis</div>
    <div class="text-sm text-gray-400">For determining position requirements</div>
  </div>
</div>

<!--
We use a variety of job analysis methods tailored to different role types. This multi-method approach ensures we capture both the technical requirements and the soft skills needed for success in each position.
-->

---
transition: fade
layout: default
---

# Sample Job Description: AI Engineer

<div class="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
  <AIAnimation :width="400" :height="600" :nodeCount="40" :connectionDensity="3" />
</div>

<div class="flex flex-col md:flex-row gap-3 mt-4 z-10 relative">
  <div class="flex-1 flex flex-col gap-2">
    <div v-click="1" class="bg-gray-800 bg-opacity-80 p-2 rounded-lg shadow-md border border-blue-700 h-[165px] transition-all duration-500 transform hover:scale-[1.02]">
      <div class="text-base font-bold text-blue-400 flex items-center">
        <div class="mr-1.5 text-lg">🧠</div>
        Position Overview
      </div>
      <p class="text-blue-100 mt-1 leading-tight text-xs">
        We're seeking an innovative AI Engineer to develop our next-generation HR talent matching platform. This key role will create algorithms that transform recruitment, performance analysis, and talent development across the organization.
      </p>
    </div>
    
  <div v-click="2" class="bg-gray-800 bg-opacity-80 p-2 rounded-lg shadow-md border border-indigo-700 h-[165px] transition-all duration-500 transform hover:scale-[1.02]">
      <div class="text-base font-bold text-indigo-400 flex items-center">
        <div class="mr-1.5 text-lg">💼</div>
        Key Projects
      </div>
      <ul class="text-indigo-100 mt-1 list-disc ml-4 space-y-0 text-xs">
        <li>Resume parsing system with 98% accuracy</li>
        <li>Custom candidate scoring algorithm based on team fit</li>
        <li>Performance prediction analytics engine</li>
        <li>Skill gap identification and training recommendation tool</li>
      </ul>
    </div>
  </div>
  
  <div class="flex-1 flex flex-col gap-2">
    <div v-click="3" class="bg-gray-800 bg-opacity-80 p-2 rounded-lg shadow-md border border-purple-700 h-[165px] transition-all duration-500 transform hover:scale-[1.02]">
      <div class="text-base font-bold text-purple-400 flex items-center">
        <div class="mr-1.5 text-lg">🔧</div>
        Preferred Qualifications
      </div>
      <ul class="text-purple-100 mt-1 list-disc ml-4 space-y-0 text-xs">
        <li>3+ years experience with ML in HR tech</li>
        <li>Portfolio of bias-mitigation strategies</li>
        <li>Experience with NLP and recommendation systems</li>
        <li>Strong background in data ethics and privacy</li>
        <li>Skilled in explaining complex models to non-technical stakeholders</li>
      </ul>
    </div>
    
  <div v-click="4" class="bg-gray-800 bg-opacity-80 p-2 rounded-lg shadow-md border border-pink-700 h-[165px] transition-all duration-500 transform hover:scale-[1.02]">
      <div class="text-base font-bold text-pink-400 flex items-center">
        <div class="mr-1.5 text-lg">💬</div>
        Expected Impact
      </div>
      <ul class="text-pink-100 mt-1 list-disc ml-4 space-y-0 text-xs">
        <li>Reduce hiring time by 40% through AI-powered screening</li>
        <li>Improve candidate quality scores by 35%</li>
        <li>Decrease bias in selection through blind matching algorithms</li>
        <li>Develop self-improving models that adapt to changing needs</li>
      </ul>
    </div>
  </div>
</div>

<div class="absolute bottom-8 right-8 w-16 h-16 transition-all duration-500 transform hover:scale-110">
  <div class="relative w-full h-full">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-8 h-8 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
    </div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-6 h-6 rounded-full bg-blue-500 opacity-30 animate-pulse"></div>
    </div>
    <div class="absolute inset-0 flex items-center justify-center text-base">
      🤖
    </div>
  </div>
</div>

<!--
This job description exemplifies our approach to attracting top AI talent by clearly defining responsibilities, required skills, and the value proposition for candidates while also highlighting the cutting-edge technologies they'll work with.
-->

---
layout: image-right
image: https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600
---

# Recruitment Process

<v-clicks>

- **Internal Recruitment Sources**
  - Employee referrals with incentive program
  - Internal job posting for cross-functional opportunities
  - Co-op/intern pipeline development

- **External Recruitment Sources**
  - Specialized tech job boards (Stack Overflow, GitHub Jobs)
  - Industry-specific networking events
  - University partnerships for entry-level talent
  - Social media recruitment campaigns
  - Professional association partnerships

- **AI-Powered Candidate Matching**
  - Our proprietary algorithm matches candidates to roles based on skills, experience, and culture fit

</v-clicks>

<!--
Our recruitment process leverages both traditional channels and innovative technology to identify and attract the best candidates for each role.
-->

---
transition: zoom-in-out
layout: default
class: text-center
---

<h1 class="text-blue-500 mb-2 text-3xl">Selection Methods by Job Family</h1>

<div class="mt-6">
  <RecSelectionMethods />
</div>

<!--
We've customized our selection methods for each job family to ensure we're evaluating candidates against the most relevant criteria for their specific roles.
-->

---
transition: zoom-in-out
layout: default
class: text-center
---

<h1 class="text-blue-500 mb-2 text-3xl">Performance Management System</h1>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 200, duration: 800 } }"
  class="text-sm text-white mb-3"
>
  Continuous | Data-Driven | Growth-Focused
</div>
  
<div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-3">
  <div v-click>
    <div class="bg-blue-500 bg-opacity-10 p-3 rounded-lg border border-blue-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-blue-500 text-lg mr-2 bg-blue-500 bg-opacity-30 p-1 rounded-full">🎯</div>
        <div class="font-medium text-base text-white">OKR Framework</div>
      </div>
      <p class="text-xs text-gray-300 mb-1.5">
        Company, team and individual objectives with measurable outcomes
      </p>
      <div>
        <div class="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-1 py-0.5 rounded">Transparent</div>
        <div class="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-1 py-0.5 rounded ml-1">Measurable</div>
      </div>
    </div>
  </div>
  
  <div v-click>
    <div class="bg-orange-500 bg-opacity-10 p-3 rounded-lg border border-orange-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-orange-500 text-lg mr-2 bg-orange-500 bg-opacity-30 p-1 rounded-full">👥</div>
        <div class="font-medium text-base text-white">360° Feedback</div>
      </div>
      <p class="text-xs text-gray-300 mb-1.5">
        Feedback from managers, peers, reports and stakeholders bi-annually
      </p>
      <div>
        <div class="inline-block bg-orange-500 bg-opacity-20 text-orange-300 text-xs px-1 py-0.5 rounded">Holistic</div>
        <div class="inline-block bg-orange-500 bg-opacity-20 text-orange-300 text-xs px-1 py-0.5 rounded ml-1">Balanced</div>
      </div>
    </div>
  </div>
  
  <div v-click>
    <div class="bg-green-500 bg-opacity-10 p-3 rounded-lg border border-green-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-green-500 text-lg mr-2 bg-green-500 bg-opacity-30 p-1 rounded-full">📈</div>
        <div class="font-medium text-base text-white">Continuous Check-ins</div>
      </div>
      <p class="text-xs text-gray-300 mb-1.5">
        Regular 1:1 meetings for timely feedback and support
      </p>
      <div>
        <div class="inline-block bg-green-500 bg-opacity-20 text-green-300 text-xs px-1 py-0.5 rounded">Agile</div>
        <div class="inline-block bg-green-500 bg-opacity-20 text-green-300 text-xs px-1 py-0.5 rounded ml-1">Supportive</div>
      </div>
    </div>
  </div>
  
  <div v-click>
    <div class="bg-purple-500 bg-opacity-10 p-3 rounded-lg border border-purple-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-purple-500 text-lg mr-2 bg-purple-500 bg-opacity-30 p-1 rounded-full">🤖</div>
        <div class="font-medium text-base text-white">AI-Powered Analytics</div>
      </div>
      <p class="text-xs text-gray-300 mb-1.5">
        ML tools for performance patterns and development insights
      </p>
      <div>
        <div class="inline-block bg-purple-500 bg-opacity-20 text-purple-300 text-xs px-1 py-0.5 rounded">Data-driven</div>
        <div class="inline-block bg-purple-500 bg-opacity-20 text-purple-300 text-xs px-1 py-0.5 rounded ml-1">Predictive</div>
      </div>
    </div>
  </div>
</div>

<!--
Our performance management system is designed to be continuous, transparent, and development-focused, moving away from traditional annual reviews to create a culture of ongoing growth and improvement.
-->

---
transition: zoom-in-out
layout: default
class: text-center
---

<h1 class="text-blue-500 mb-2 text-3xl">Training & Development Strategy</h1>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 200, duration: 800 } }"
  class="text-sm text-white mb-3"
>
  Continuous | Personalized | Growth-Oriented
</div>
    
<div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-3">
  <div v-click>
    <div class="bg-blue-500 bg-opacity-10 p-3 rounded-lg border border-blue-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-blue-500 text-lg mr-2 bg-blue-500 bg-opacity-30 p-1 rounded-full">🚀</div>
        <div class="font-medium text-base text-white">Onboarding Program</div>
      </div>
      <ul class="text-xs text-gray-300 mb-1.5 list-inside pl-0">
        <li class="mb-0.5">30-60-90 day roadmap</li>
        <li class="mb-0.5">Culture immersion</li>
        <li class="mb-0.5">Cross-functional shadowing</li>
        <li>Weekly check-ins</li>
      </ul>
      <div>
        <div class="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-1 py-0.5 rounded">Structured</div>
        <div class="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-1 py-0.5 rounded ml-1">Supportive</div>
      </div>
    </div>
  </div>
  
  <div v-click>
    <div class="bg-orange-500 bg-opacity-10 p-3 rounded-lg border border-orange-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-orange-500 text-lg mr-2 bg-orange-500 bg-opacity-30 p-1 rounded-full">🧠</div>
        <div class="font-medium text-base text-white">Continuous Learning</div>
      </div>
      <ul class="text-xs text-gray-300 mb-1.5 list-inside pl-0">
        <li class="mb-0.5">Monthly "Innovation Days"</li>
        <li class="mb-0.5">Cross-functional projects</li>
        <li class="mb-0.5">Expert speaker series</li>
        <li>Leadership book club</li>
      </ul>
      <div>
        <div class="inline-block bg-orange-500 bg-opacity-20 text-orange-300 text-xs px-1 py-0.5 rounded">Innovative</div>
        <div class="inline-block bg-orange-500 bg-opacity-20 text-orange-300 text-xs px-1 py-0.5 rounded ml-1">Collaborative</div>
      </div>
    </div>
  </div>
    
  <div v-click>
    <div class="bg-green-500 bg-opacity-10 p-3 rounded-lg border border-green-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-green-500 text-lg mr-2 bg-green-500 bg-opacity-30 p-1 rounded-full">👤</div>
        <div class="font-medium text-base text-white">Mentorship Program</div>
      </div>
      <ul class="text-xs text-gray-300 mb-1.5 list-inside pl-0">
        <li class="mb-0.5">Expert knowledge transfer</li>
        <li class="mb-0.5">Career guidance</li>
        <li class="mb-0.5">Regular success review</li>
        <li>Skill development focus</li>
      </ul>
      <div>
        <div class="inline-block bg-green-500 bg-opacity-20 text-green-300 text-xs px-1 py-0.5 rounded">Personalized</div>
        <div class="inline-block bg-green-500 bg-opacity-20 text-green-300 text-xs px-1 py-0.5 rounded ml-1">Growth-focused</div>
      </div>
    </div>
  </div>
  
  <div v-click>
    <div class="bg-purple-500 bg-opacity-10 p-3 rounded-lg border border-purple-500 transform transition-all duration-500 hover:scale-105 h-full">
      <div class="flex items-center mb-1">
        <div class="text-purple-500 text-lg mr-2 bg-purple-500 bg-opacity-30 p-1 rounded-full">🎓</div>
        <div class="font-medium text-base text-white">Learning Technology</div>
      </div>
      <ul class="text-xs text-gray-300 mb-1.5 list-inside pl-0">
        <li class="mb-0.5">Custom LMS platform</li>
        <li class="mb-0.5">Microlearning modules</li>
        <li class="mb-0.5">VR simulation training</li>
        <li>Skill assessment tools</li>
      </ul>
      <div>
        <div class="inline-block bg-purple-500 bg-opacity-20 text-purple-300 text-xs px-1 py-0.5 rounded">Interactive</div>
        <div class="inline-block bg-purple-500 bg-opacity-20 text-purple-300 text-xs px-1 py-0.5 rounded ml-1">On-demand</div>
      </div>
    </div>
  </div>
</div>

<!--
Our training and development strategy focuses on building both technical competencies and leadership capabilities while fostering a culture of continuous learning throughout the organization.
-->

---
transition: fade
layout: center
class: text-center
---

# Investment Opportunity

<div class="grid grid-cols-2 gap-16 mt-10">
  <div>
    <FinancialProjections />
  </div>
  
  <div v-click class="text-left">
    <div class="mb-6">
      <div class="text-2xl font-bold text-blue-500 mb-2">Funding Request</div>
      <p class="text-gray-600">
        We are seeking $1.5M in seed funding to accelerate our product development and market expansion.
      </p>
    </div>
  </div>
</div>

<!--
Our financial projections show strong growth potential with a clear path to profitability. We're seeking strategic investors who can provide not just capital, but also industry connections and expertise.
-->

---
layout: center
class: text-center
transition: fade
---

# Thank You!

<div class="text-xl text-blue-400 mt-4 mb-10">Building the future of work, one talent at a time</div>

<div class="grid grid-cols-2 gap-10">
  <div v-click class="text-left">
    <div class="text-lg font-bold mb-2">Contact Information</div>
    <div class="text-gray-400 text-sm">
      <div>Ahmed, Gamal, and Belal</div>
      <div>team@innohire.com</div>
      <div>555-123-4567</div>
      <div>www.innohire.com</div>
    </div>
  </div>
  
  <div v-click class="text-left">
    <div class="text-lg font-bold mb-2">Next Steps</div>
    <div class="text-gray-400 text-sm">
      <div>• Schedule follow-up meeting</div>
      <div>• Provide detailed financial model</div>
      <div>• Demo product beta</div>
      <div>• Discuss potential partnership</div>
    </div>
  </div>
</div>

<div 
  v-motion
  :initial="{ y: 100, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { delay: 500, duration: 800 } }"
  class="mt-10"
>
  <div class="text-sm text-gray-400">
    © 2025 InnoHire, Inc. All rights reserved.
  </div>
</div>

<!--
Thank you for your time and consideration. We're excited about the opportunity to revolutionize the HR tech space and look forward to potential collaboration.
-->