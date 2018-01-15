<script>
  export default {
    head () {
      return {
        title: 'Sujor·书舟 - 登录'
      }
    },
    data () {
      return {
        title: this.title
      }
    },
    components: {
    },
    methods: {
      loadVerifyCode: function () {
      },
      signIn: function () {
        //
      }
    }
  }
</script>

<template>
  <section class="sj-auth-body">
    <section class="sj-auth-wrapper">
      <section class="sj-auth-center clear">

        <section class="sj-auth-title">
          <section class="sj-auth-title-center animated rubberBand">
            登录
          </section>
          <nuxt-link to="/auth/signup" class="sj-auth-title-switch link animated rubberBand">
            注册>
          </nuxt-link>
        </section>

        <div class="sj-auth-item">
          <label class="sj-auth-label">用户名</label>
          <input class="normal-input" placeholder="type in your account" />
        </div>

        <div class="sj-auth-item">
          <label class="sj-auth-label">密码</label>
          <input class="normal-input" type="password" placeholder="type in your password" @keydown.enter="signIn()" />
        </div>

        <div class="sj-auth-item">
          <input class="normal-btn animated slideInDown" type="button" value="确    认" @click="signIn()" />
        </div>

        <div class="sj-auth-item">
        </div>

      </section>
    </section>
  </section>
</template>

<style>
  @import "../../assets/css/auth/sign.less";
</style>
