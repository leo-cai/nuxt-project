<script>
  import projectItem from '~/components/project/item.vue'
  export default {
    data () {
      return {
      }
    },
    computed: {
      projects () {
        return this.$store.getters.projects
      },
      requestErrors () {
        return this.$store.getters.requestErrors
      }
    },
    methods: {
      initProjects: function (limit, page) {
        this.$store.dispatch('getProjects', {'limit': limit, 'page': page})
      }
    },
    mounted () {
      this.initProjects(2, 1)
    },
    components: {
      projectItem
    }
  }
</script>

<template>
  <section class="sj-index-body">
    <ul v-if="requestErrors.length === 0">
      <li class="sj-project-li" v-for="project in projects">
        <nuxt-link :to="'/project/' + project.id">
          <project-item :project="project"></project-item>
        </nuxt-link>
      </li>
    </ul>
    <span v-else v-text="requestErrors"></span>
  </section>
</template>

<style>
  @import "../../assets/css/project/index.less";
</style>
