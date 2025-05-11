<template>
  <span class="custom-icon">{{ getEmoji(name) }}</span>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

function getEmoji(iconName) {
  const emojiMap = {
    'goal': '🎯',
    'skill-test': '✅',
    'meeting-room': '🏢',
    'presentation': '📊',
    'document-reference': '📄',
    'chart-line': '📈',
    'user-multiple': '👥',
    'chart-evaluation': '📊',
    'data-enrichment': '📊',
    'skill-level': '⚙️',
    'chart-combo': '📊',
    'result': '🏆',
    'query': '❓',
    'code': '💻',
    'data-format': '📊',
    'education': '🎓',
    'group': '👥',
    'user-role': '👤',
    'notebook': '📓',
    'virtual-desktop': '🖥️',
    'collaborate': '👥',
    'default': '📌'
  };
  
  // Extract the icon name if it's in format "carbon/icon-name"
  const iconBaseName = iconName.includes('/') ? iconName.split('/')[1] : iconName;
  
  return emojiMap[iconBaseName] || emojiMap['default'];
}
</script>

<style scoped>
.custom-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style> 