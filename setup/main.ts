import { defineAppSetup } from '@slidev/types'
import CustomIcon from '../components/CustomIcon.vue'
import AIAnimation from '../components/AIAnimation.vue'

export default defineAppSetup(({ app }) => {
  // Register AIAnimation component globally
  app.component('AIAnimation', AIAnimation)

  // Register CustomIcon globally to intercept missing carbon icons
  app.component('CarbonGoal', CustomIcon)
  app.component('CarbonSkillTest', CustomIcon)
  app.component('CarbonMeetingRoom', CustomIcon)
  app.component('CarbonPresentation', CustomIcon)
  app.component('CarbonDocumentReference', CustomIcon)

  // Add props to pass the icon name
  app.directive('icon-props', {
    mounted(el, binding) {
      if (el.__vnode && el.__vnode.props) {
        el.__vnode.props.name = binding.value
      }
    }
  })
}) 