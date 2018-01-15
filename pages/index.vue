<script>
  export default {
    data () {
      return {
        users: []
      }
    },
    methods: {
      getUsers: function () {
        // this.$axios.get('http://api.sujor.com/v1/users?limit=2&page=1')
        //   .then((responseData) => {
        //     this.users = responseData.data.users
        //     // console.log(responseData.data.users)
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //   })
      }
    },
    computed: {
    },
    created () {
      this.getUsers()
    }
  }
</script>

<template>
  <section class="sj-index-body">
    <ul>
      <li v-for="user in users">
        <p v-text="user.phone" class="animated bounce"></p>
        <p v-text="user.mail"></p>
        <p v-text="user.qq"></p>
        <p v-text="user.wechat"></p>
        <p v-text="user.weibo"></p>
      </li>
    </ul>
  </section>
</template>
