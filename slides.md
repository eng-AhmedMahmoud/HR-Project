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
    <div class="text-lg font-semibold text-blue-500">Executive Team (4)</div>
    <ul class="ml-6 text-sm">
      <li>CEO (1)</li>
      <li>CTO (1)</li>
      <li>COO (1)</li>
      <li>CFO (1)</li>
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
We've identified 25 key positions across 6 departments to launch and scale our startup effectively. This structure gives us the right mix of technical talent, business development, and operational support.
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

<div class="grid grid-cols-2 gap-8 mt-4">
  <div>
    <div v-click class="mb-6">
      <div class="text-lg font-semibold text-blue-500">Position Overview</div>
      <p class="text-sm mt-1">
        We're seeking an innovative AI Engineer to develop and deploy machine learning models that power our intelligent HR platform. This role combines technical expertise with a passion for solving real-world HR challenges.
      </p>
    </div>
  </div>
  
  <div>
    <div v-click>
      <div class="text-lg font-semibold text-purple-500">Preferred Qualifications</div>
      <ul class="text-sm mt-1 list-disc ml-4">
        <li>Experience with HR tech or recruitment platforms</li>
        <li>Knowledge of ethical AI practices and bias mitigation</li>
        <li>Background in recommendation systems</li>
        <li>Familiarity with cloud platforms (AWS, GCP, Azure)</li>
      </ul>
    </div>
  </div>
</div>

<!--
This job description exemplifies our approach to attracting top talent by clearly defining responsibilities, required skills, and the value proposition for candidates.
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
transition: slide-up
---

# Selection Methods by Job Family {class="text-black"}

<div class="mt-8">
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

# Performance Management System {class="text-blue-500"}

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 200, duration: 800 } }"
  class="text-lg text-white mb-8 mt-2"
>
  Continuous | Data-Driven | Growth-Focused
</div>

<div class="grid grid-cols-2 gap-12 mt-12">
  <div>
    <div v-click class="mb-8 transform transition-all duration-500 hover:scale-105">
      <div class="flex items-center">
        <div class="text-blue-500 text-2xl mr-3 bg-blue-500 bg-opacity-20 p-2 rounded-full">🎯</div>
        <div class="font-semibold text-xl text-white">OKR Framework</div>
      </div>
      <p class="text-sm ml-12 mt-2 text-gray-300">
        Objectives and Key Results at company, team, and individual levels to ensure alignment and focus on measurable outcomes
      </p>
      <div class="ml-12 mt-3">
        <div class="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-2 py-1 rounded">Transparent</div>
        <div class="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-2 py-1 rounded ml-2">Measurable</div>
        <div class="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-2 py-1 rounded ml-2">Strategic</div>
      </div>
    </div>
  </div>
  
  <div>
    <div v-click class="mb-8 transform transition-all duration-500 hover:scale-105">
      <div class="flex items-center">
        <div class="text-orange-500 text-2xl mr-3 bg-orange-500 bg-opacity-20 p-2 rounded-full">👥</div>
        <div class="font-semibold text-xl text-white">360° Feedback</div>
      </div>
      <p class="text-sm ml-12 mt-2 text-gray-300">
        Comprehensive feedback from managers, peers, direct reports, and other stakeholders collected bi-annually
      </p>
      <div class="ml-12 mt-3">
        <div class="inline-block bg-orange-500 bg-opacity-20 text-orange-300 text-xs px-2 py-1 rounded">Holistic</div>
        <div class="inline-block bg-orange-500 bg-opacity-20 text-orange-300 text-xs px-2 py-1 rounded ml-2">Balanced</div>
        <div class="inline-block bg-orange-500 bg-opacity-20 text-orange-300 text-xs px-2 py-1 rounded ml-2">Insightful</div>
      </div>
    </div>
  </div>
  
  <div>
    <div v-click class="mb-8 transform transition-all duration-500 hover:scale-105">
      <div class="flex items-center">
        <div class="text-green-500 text-2xl mr-3 bg-green-500 bg-opacity-20 p-2 rounded-full">📈</div>
        <div class="font-semibold text-xl text-white">Continuous Check-ins</div>
      </div>
      <p class="text-sm ml-12 mt-2 text-gray-300">
        Regular 1:1 meetings between managers and team members to provide timely feedback and address challenges
      </p>
      <div class="ml-12 mt-3">
        <div class="inline-block bg-green-500 bg-opacity-20 text-green-300 text-xs px-2 py-1 rounded">Agile</div>
        <div class="inline-block bg-green-500 bg-opacity-20 text-green-300 text-xs px-2 py-1 rounded ml-2">Supportive</div>
        <div class="inline-block bg-green-500 bg-opacity-20 text-green-300 text-xs px-2 py-1 rounded ml-2">Proactive</div>
      </div>
    </div>
  </div>
  
  <div>
    <div v-click class="mb-8 transform transition-all duration-500 hover:scale-105">
      <div class="flex items-center">
        <div class="text-purple-500 text-2xl mr-3 bg-purple-500 bg-opacity-20 p-2 rounded-full">🤖</div>
        <div class="font-semibold text-xl text-white">AI-Powered Analytics</div>
      </div>
      <p class="text-sm ml-12 mt-2 text-gray-300">
        Machine learning tools that identify performance patterns and provide personalized development recommendations
      </p>
      <div class="ml-12 mt-3">
        <div class="inline-block bg-purple-500 bg-opacity-20 text-purple-300 text-xs px-2 py-1 rounded">Data-driven</div>
        <div class="inline-block bg-purple-500 bg-opacity-20 text-purple-300 text-xs px-2 py-1 rounded ml-2">Predictive</div>
        <div class="inline-block bg-purple-500 bg-opacity-20 text-purple-300 text-xs px-2 py-1 rounded ml-2">Personalized</div>
      </div>
    </div>
  </div>
</div>

<!--
Our performance management system is designed to be continuous, transparent, and development-focused, moving away from traditional annual reviews to create a culture of ongoing growth and improvement.
-->

---
layout: default
---

# Training & Development Strategy

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <div v-click class="mb-6">
      <div class="text-lg font-semibold text-blue-500">Onboarding Program</div>
      <ul class="text-sm list-disc ml-4 mt-1">
        <li>Structured 30-60-90 day onboarding roadmap</li>
        <li>Company culture and mission immersion</li>
        <li>Cross-functional shadowing experiences</li>
        <li>Weekly check-ins with managers and mentors</li>
      </ul>
    </div>
  </div>
  
  <div>
    <div v-click>
      <div class="text-lg font-semibold text-orange-500">Continuous Learning Culture</div>
      <ul class="text-sm list-disc ml-4 mt-1">
        <li>Monthly "Innovation Days" for self-directed learning</li>
        <li>Cross-functional project opportunities</li>
        <li>Speaker series featuring industry experts</li>
        <li>Book club with leadership discussions</li>
      </ul>
    </div>
  </div>
</div>

<!--
Our training and development strategy focuses on building both technical competencies and leadership capabilities while fostering a culture of continuous learning throughout the organization.
-->

---
transition: slide-up
layout: center
---

# Training Methods & Tools

<div class="grid grid-cols-3 gap-8 mt-8">
  <div v-click class="bg-blue-500 bg-opacity-10 p-6 rounded-lg border border-blue-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-blue-500 text-3xl mb-2">🎓</div>
    <div class="font-semibold mb-1">E-Learning Platform</div>
    <div class="text-xs mb-2">Custom LMS with personalized learning paths</div>
    <div class="text-xs text-gray-500">For: Core skills, compliance training</div>
  </div>
  
  <div v-click class="bg-purple-500 bg-opacity-10 p-6 rounded-lg border border-purple-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-purple-500 text-3xl mb-2">👥</div>
    <div class="font-semibold mb-1">Experiential Workshops</div>
    <div class="text-xs mb-2">Interactive problem-solving sessions</div>
    <div class="text-xs text-gray-500">For: Soft skills, teamwork, leadership</div>
  </div>
  
  <div v-click class="bg-green-500 bg-opacity-10 p-6 rounded-lg border border-green-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-green-500 text-3xl mb-2">👤</div>
    <div class="font-semibold mb-1">Mentorship Program</div>
    <div class="text-xs mb-2">Structured guidance from senior leaders</div>
    <div class="text-xs text-gray-500">For: Career development, knowledge transfer</div>
  </div>
  
  <div v-click class="bg-orange-500 bg-opacity-10 p-6 rounded-lg border border-orange-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-orange-500 text-3xl mb-2">📓</div>
    <div class="font-semibold mb-1">Microlearning</div>
    <div class="text-xs mb-2">Short, focused learning modules</div>
    <div class="text-xs text-gray-500">For: Just-in-time training, reinforcement</div>
  </div>
  
  <div v-click class="bg-red-500 bg-opacity-10 p-6 rounded-lg border border-red-500 transform transition-all duration-500 hover:scale-105">
    <div class="text-red-500 text-3xl mb-2">🖥️</div>
    <div class="font-semibold mb-1">VR Simulations</div>
    <div class="text-xs mb-2">Immersive scenario-based training</div>
    <div class="text-xs text-gray-500">For: Complex skills, customer interactions</div>
  </div>
  
  <div v-click class="bg-blue-400 bg-opacity-10 p-6 rounded-lg border border-blue-400 transform transition-all duration-500 hover:scale-105">
    <div class="text-blue-400 text-3xl mb-2">📊</div>
    <div class="font-semibold mb-1">Peer Learning Communities</div>
    <div class="text-xs mb-2">Collaborative knowledge sharing groups</div>
    <div class="text-xs text-gray-500">For: Continuous learning, best practices</div>
  </div>
</div>

<!--
We employ a diverse mix of training methods and tools to accommodate different learning styles and maximize knowledge retention and application.
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