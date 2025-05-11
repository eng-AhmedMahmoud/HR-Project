<template>
  <span class="emoji-icon">{{ findEmoji() }}</span>
</template>

<script>
export default {
  name: 'IconFallback',
  props: {
    icon: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    findEmoji() {
      const iconMap = {
        'goal': '🎯',
        'skill-test': '📝',
        'meeting-room': '🏢',
        'presentation': '📊',
        'document-reference': '📄',
        'default': '🔍'
      };
      
      // Try to extract the base name
      const parts = this.icon.split('/');
      const baseName = parts.length > 1 ? parts[parts.length - 1] : this.icon;
      
      return iconMap[baseName] || iconMap.default;
    }
  }
}
</script>

<style scoped>
.emoji-icon {
  font-size: 1.2em;
  display: inline-block;
}
</style> 