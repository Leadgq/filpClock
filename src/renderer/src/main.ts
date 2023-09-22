import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './route'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.scss'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
