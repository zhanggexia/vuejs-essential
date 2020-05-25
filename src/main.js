// 引入 vue.js 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App.vue'

import router from './router'

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false
    // 创建一个新的 Vue 实例
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')