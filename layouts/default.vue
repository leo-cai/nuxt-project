<script>
  import appHeader from '~/components/public/app_header.vue'
  import appFooter from '~/components/public/app_footer.vue'
  export default {
    components: {
      appHeader,
      appFooter
    }
  }
</script>

<template>
  <section class="container">
    <app-header></app-header>
    <nuxt />
    <app-footer></app-footer>
  </section>

</template>

<style>
  @import "../assets/css/style.css";
</style>
