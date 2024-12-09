/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// 追記
import router from "./router"

const app = createApp(App).use(router) // 追記

registerPlugins(app)

app.mount('#app')
