

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.min.css'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue3 } from 'bootstrap-vue-3'
const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
