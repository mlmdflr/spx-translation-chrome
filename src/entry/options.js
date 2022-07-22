import { createApp } from 'vue'
import App from '../view/options.vue'
import NInit from '../view/opt.vue'

createApp(NInit).component('core-opt', App).mount('#app')
