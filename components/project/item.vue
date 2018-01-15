<script>
  import {formatDate} from '../../assets/js/common'
  export default {
    data () {
      return {
      }
    },
    props: {
      project: {}
    },
    filters: {
      formatDateStr: function (value) {
        return formatDate(value)
      }
    }
  }
</script>

<template>
  <div class="sj-project-item">
    <img v-show="!project.imgUrl" src="../../assets/image/avatar.png" />
    <img v-show="project.imgUrl" :src="project.imgUrl" />
    <p class="sj-project-item-title" v-text="project.title"></p>
    <p class="sj-project-item-content" v-text="project.content"></p>
    <div class="sj-project-item-footer">
      <p class="fl" v-text="project.author"></p>
      <p class="fr">{{project.created_at | formatDateStr}}</p>
    </div>
  </div>
</template>

<style>
  @import "../../assets/css/project/item.css";
</style>
