import { createApp } from 'vue'
import Tres from '@tresjs/core'
import router from './router.ts'
import App from './App.vue'
import './assets/index.css'

export const app = createApp(App)

app.use(router)
app.use(Tres)
app.mount('#app')
