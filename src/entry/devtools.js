import { createApp } from 'vue'
import App from '../view/devtools.vue'
chrome.devtools.panels.create('spx-translation-chrome', '', 'devtools.html')
createApp(App).mount('#app')
