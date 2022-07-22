<template>
    <div class="main_app">
        <n-notification-provider placement="top-right" :max="3">
            <core-opt></core-opt>
        </n-notification-provider>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { NNotificationProvider } from 'naive-ui'

export default defineComponent({
    name: 'optView',
    components: {
        NNotificationProvider
    },
    setup() {
        return {
        }
    }
})
</script>

<style>
.main_app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
