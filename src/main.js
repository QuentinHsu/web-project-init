import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import 'normalize.css/normalize.css'

const app = createApp(App)

app.use(router).mount('#app')
