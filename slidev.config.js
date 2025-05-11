import { defineConfig } from '@slidev/cli'
import carbonIcons from './carbon.js'

export default defineConfig({
  // Default theme settings
  theme: 'default',
  // Disable auto importing of icons
  icons: {
    autoInstall: false
  },
  // Custom plugins
  plugins: [
    carbonIcons
  ],
  // Enable smooth transitions for charts and animations
  transitions: true,
  // Ensure proper loading of modules
  remoteAssets: true
}) 