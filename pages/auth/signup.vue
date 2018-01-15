<script>
  export default {
    head () {
      return {
        title: 'Sujor·书舟 - 注册'
      }
    },
    data () {
      return {
        title: this.title
        // showWarning: true
      }
    },
    components: {
    },
    methods: {
      loadVerifyCode: function () {
      },
      signUp: function () {
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
            注册
          </section>
          <nuxt-link to="/auth/signin" class="sj-auth-title-switch link animated rubberBand">
            登录>
          </nuxt-link>
        </section>

        <!--<div class="sj-auth-item" v-show="showWarning">-->
          <!--<el-alert title="注册功能暂未开放" type="warning"></el-alert>-->
        <!--</div>-->

        <div class="sj-auth-item">
          <label class="sj-auth-label">用户名</label>
          <input class="normal-input" placeholder="type in your account" />
        </div>

        <div class="sj-auth-item">
          <label class="sj-auth-label">密码</label>
          <input class="normal-input" type="password" placeholder="set your password" />
        </div>

        <div class="sj-auth-item">
          <label class="sj-auth-label">确认密码</label>
          <input class="normal-input" type="password" placeholder="confirm your password" @keydown.enter="signUp()" />
        </div>

        <div class="sj-auth-item">
          <input class="normal-btn animated slideInDown" type="button" value="确    认" @click="signUp()" />
        </div>

      </section>
    </section>
  </section>
</template>

<style>
  @import "../../assets/css/auth/sign.less";
</style>
