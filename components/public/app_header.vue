<script>
  export default {
    data () {
      return {
        searchValue: ''
      }
    },
    components: {
    },
    methods: {
      // 搜索时间
      doSearch: function () {
        alert(this.searchValue + '搜索功能正在测试中')
      }
    },
    mounted () {
    }
  }
</script>

<template>
  <header class="sj-nav">
    <nav class="sj-nav-wrapper">

      <!--wap-->
      <div class="sj-nav-wap-left">
        <button class="sj-nav-wap-left-btn">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="sj-nav-wap-middle">
        <nuxt-link to="/">
          <img class="sj-nav-logo" style="margin-left: 0" src="../../assets/image/logo.svg" />
        </nuxt-link>
      </div>
      <div class="sj-nav-wap-right">
        <button class="sj-nav-wap-avatar">
        </button>
      </div>

      <!--web-->
      <div class="sj-nav-left">
        <nuxt-link to="/">
          <img class="sj-nav-logo" src="../../assets/image/logo.svg" />
        </nuxt-link>
      </div>
      <div class="sj-nav-middle">
        <nuxt-link to="/" class="link">
          <div class="sj-nav-item">
            项目
          </div>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <div class="sj-nav-item">
            活动
          </div>
        </nuxt-link>
        <div class="sj-nav-search">
          <input class="sj-nav-search-input" placeholder="搜索" @keyup.enter="doSearch()" v-model="searchValue" />
          <img class="sj-nav-search-btn" src="../../assets/image/search.svg" @click="doSearch()" />
        </div>
      </div>
      <div class="sj-nav-right">
        <nuxt-link to="/auth/signup" class="link">
          <div class="sj-nav-item">
            注册
          </div>
        </nuxt-link>
        <nuxt-link to="/auth/signin" class="link">
          <div class="sj-nav-item">
            登录
          </div>
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<style>
  @import "../../assets/css/public/app_header.css";
</style>

