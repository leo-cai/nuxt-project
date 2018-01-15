<script>
  import appHeader from '~/components/public/app_header.vue'
  import appFooter from '~/components/public/app_footer.vue'
  export default {
    props: ['error'],
    components: {
      appHeader,
      appFooter
    }
  }
</script>

<template>
  <section class="container">
    <app-header></app-header>
    <section class="sj-index-body">
      <h5 v-if="error.statusCode === 404">👽 外星人入侵，页面被掳走了</h5>
      <h5 v-else>👽 外星人占领了服务器，请稍后再试</h5>
      <nuxt-link to="/" class="link">回 到 首 页</nuxt-link>
    </section>
    <app-footer></app-footer>
  </section>
</template>

<style>
  @import "../assets/css/style.less";
</style>
