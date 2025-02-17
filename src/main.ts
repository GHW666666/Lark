import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import './styles/index.css'
const app=createApp(App)
app.use(router)
// app.use(Toast)
.use(createPinia())
.mount('#app')
