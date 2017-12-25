<script>
  export default {
    data () {
      return {
        currentYear: new Date().getFullYear().toString()
      }
    },
    components: {
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<template>
  <footer class="sj-footer">
    <div class="sj-footer-wrapper">
      <div class="sj-footer-intro">
        <div class="sj-footer-logo">
          <img class="sj-nav-logo" src="../../assets/image/logo.svg" />
        </div>
        <p class="sj-footer-content">
          这是一堆乱码乱码这是一堆乱码乱码这是一堆乱码乱码这是一堆乱码乱码这是一堆乱码乱码这是一堆乱码乱码这是一堆乱码乱码。。。
          书山有路勤为径，学海无涯苦作舟。
        </p>
        <p class="sj-footer-tel">400-XXXX-XXX</p>
        <p class="sj-footer-email">hellocailiang@163.com</p>
      </div>
      <div class="sj-footer-contact">
        <div class="sj-footer-contact-box">
          <div class="sj-footer-contact-item">
            <h2 class="title">关于我们</h2>
            <nuxt-link to="/about">
              <p class="link">关于我们</p>
            </nuxt-link>
            <nuxt-link to="/about">
              <p class="link">关于我们</p>
            </nuxt-link>
            <nuxt-link to="/join">
              <p class="link">加入我们</p>
            </nuxt-link>
          </div>
          <div class="sj-footer-contact-item">
            <h2 class="title">关于我们</h2>
            <nuxt-link to="/about">
              <p class="link">关于我们</p>
            </nuxt-link>
            <nuxt-link to="/join">
              <p class="link">加入我们</p>
            </nuxt-link>
          </div>
          <div class="sj-footer-contact-item">
            <h2 class="title">关于我们</h2>
            <nuxt-link to="/about">
              <p class="link">关于我们</p>
            </nuxt-link>
            <nuxt-link to="/join">
              <p class="link">加入我们</p>
            </nuxt-link>
          </div>
        </div>

        <div class="sj-footer-copyright">
          <p>
            <a href="http://www.miitbeian.gov.cn/" target="_blank" class="link">苏ICP备17072558号</a>
          </p>
          <p>©2017-<span v-text="currentYear"></span>&nbsp;<nuxt-link to="/" class="link">Sujor.com</nuxt-link>版权所有</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<style>
  @import "../../assets/css/public/app_footer.css";
</style>
