<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </router-link>
      </div>
      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>
        <!-- 入口组件 -->
        <div class="navbar-right">
          <TheEntry/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// 引入 TheEntry.vue 的默认值
import TheEntry from '@/components/layouts/TheEntry'

export default {
  name: 'TheHeader',
  // 添加 components 选项，并注册 TheEntry
  components: {
    TheEntry
  },
  data() {
    return {
      logo: {
        src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
        title: 'Learnku Vue.js'
      },
      navList: ['社区', '头条', '问答', '教程'],
      activeNavIndex: 0
    }
  },
  beforeCreate() {
    this.uploadsUrl = 'https://learnku.com/vuejs/uploads/'
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index
    }
  }
}
</script>

<style scoped>
.title { display: none;}
.navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
.content-body {height: 600px;}
</style>