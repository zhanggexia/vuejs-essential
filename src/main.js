// 引入 vue.js 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App.vue'
import router from './router'
import './directives'
import './components'
// 引入 store/index.js 的默认值
import store from './store'

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false
    // 创建一个新的 Vue 实例
new Vue({
    router,
    // 注入 store
    store,
    render: h => h(App),
}).$mount('#app')