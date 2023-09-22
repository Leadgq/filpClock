import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './route'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.scss'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
