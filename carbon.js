// This file provides fallback emoji replacements for Carbon icons
import { h } from 'vue';

export default {
  install(app) {
    // Create a component factory for carbon icons
    const createIconComponent = (iconName, emoji) => ({
      name: `Carbon${iconName}`,
      render() {
        return h('span', { class: 'carbon-icon-fallback' }, emoji);
      }
    });

    // Register common Carbon icons used in the presentation
    const icons = {
      'Goal': '🎯',
      'SkillTest': '📝',
      'MeetingRoom': '🏢',
      'Presentation': '📊',
      'DocumentReference': '📄',
      'ArrowRight': '➡️',
      'DocumentBlank': '📄',
      'Task': '✅',
      'UserProfile': '👤',
      'DocumentView': '📋',
      'SkillLevel': '⚙️',
      'ChartEvaluation': '📊',
      'Chat': '💬',
      'ChartLine': '📈',
      'UserMultiple': '👥',
      'DataEnrichment': '📊',
      'ChartCombo': '📊',
      'Result': '🏆',
      'Query': '❓',
      'Code': '💻',
      'DataFormat': '📊',
      'Education': '🎓',
      'Group': '👥',
      'UserRole': '👤',
      'Notebook': '📓',
      'VirtualDesktop': '🖥️',
      'Collaborate': '👥'
    };

    // Register all icon components
    Object.entries(icons).forEach(([name, emoji]) => {
      app.component(`Carbon${name}`, createIconComponent(name, emoji));
    });
  }
} 