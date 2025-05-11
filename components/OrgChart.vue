<template>
  <div class="org-chart-container">
    <!-- Executive Team (Level 1) -->
    <div class="org-level level-1">
      <div 
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="org-box primary"
      >
        <div class="org-icon">👑</div>
        <div class="org-title">Executive Team</div>
        <div class="org-members">
          <span class="member-badge">CEO</span>
          <span class="member-badge">CTO</span>
          <span class="member-badge">COO</span>
        </div>
      </div>
    </div>

    <!-- Vertical Line -->
    <div class="tree-connector-vertical"></div>

    <!-- Horizontal Line for Level 2 -->
    <div class="tree-connector-horizontal"></div>

    <!-- Department Heads (Level 2) -->
    <div class="org-level level-2">
      <div 
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }"
        class="org-box secondary"
      >
        <div class="org-icon">💻</div>
        <div class="org-title">Product</div>
        <div class="org-subtitle">6 members</div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        class="org-box secondary"
      >
        <div class="org-icon">📊</div>
        <div class="org-title">Data Science</div>
        <div class="org-subtitle">3 members</div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
        class="org-box secondary"
      >
        <div class="org-icon">🛠️</div>
        <div class="org-title">Customer</div>
        <div class="org-subtitle">4 members</div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 800 } }"
        class="org-box secondary"
      >
        <div class="org-icon">📈</div>
        <div class="org-title">Sales</div>
        <div class="org-subtitle">5 members</div>
      </div>
    </div>

    <!-- Vertical Lines to Level 3 -->
    <div class="tree-connectors-to-level3">
      <div class="tree-connector-vertical level3-connector"></div>
    </div>

    <!-- Horizontal Line for Level 3 -->
    <div class="tree-connector-horizontal level3"></div>

    <!-- Support Functions (Level 3) -->
    <div class="org-level level-3">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 800 } }"
        class="org-box tertiary"
      >
        <div class="org-icon">💰</div>
        <div class="org-title">Finance</div>
        <div class="org-subtitle">1 specialist</div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 800 } }"
        class="org-box tertiary"
      >
        <div class="org-icon">👤</div>
        <div class="org-title">HR</div>
        <div class="org-subtitle">1 manager</div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 900, duration: 800 } }"
        class="org-box tertiary"
      >
        <div class="org-icon">🔧</div>
        <div class="org-title">Admin</div>
        <div class="org-subtitle">1 admin</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.org-chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  position: relative;
}

.org-level {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 6px 0;
  position: relative;
  z-index: 2;
}

.level-1 {
  margin-bottom: 20px;
}

.level-2 {
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.level-3 {
  justify-content: space-evenly;
  width: 70%;
}

.org-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  min-width: 90px;
}

.org-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.primary {
  background: linear-gradient(45deg, #3b82f6, #1e40af);
  border: 2px solid #60a5fa;
  width: 140px;
}

.secondary {
  width: 110px;
  margin: 0 4px;
}

.secondary:nth-child(1) {
  background: linear-gradient(45deg, #8b5cf6, #5b21b6);
  border: 2px solid #a78bfa;
}

.secondary:nth-child(2) {
  background: linear-gradient(45deg, #10b981, #047857);
  border: 2px solid #6ee7b7;
}

.secondary:nth-child(3) {
  background: linear-gradient(45deg, #f59e0b, #b45309);
  border: 2px solid #fcd34d;
}

.secondary:nth-child(4) {
  background: linear-gradient(45deg, #ef4444, #b91c1c);
  border: 2px solid #fca5a5;
}

.tertiary {
  background: linear-gradient(45deg, #3b82f6, #0284c7);
  border: 2px solid #93c5fd;
  width: 100px;
}

.org-icon {
  font-size: 20px;
  margin-bottom: 4px;
}

.org-title {
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 2px;
}

.org-subtitle {
  font-size: 10px;
  opacity: 0.8;
}

.org-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
  margin-top: 4px;
}

.member-badge {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 1px 4px;
  font-size: 9px;
}

/* Tree connectors */
.tree-connector-vertical {
  width: 2px;
  height: 20px;
  background-color: #94a3b8;
  position: relative;
  z-index: 1;
}

.tree-connector-horizontal {
  width: 90%;
  height: 2px;
  background-color: #94a3b8;
  position: relative;
  margin: 0 auto 10px;
  z-index: 1;
}

.tree-connectors-to-level3 {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.level3-connector {
  height: 20px;
}

.tree-connector-horizontal.level3 {
  width: 60%;
}
</style>