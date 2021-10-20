<template>
  <div>
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import TopBar from '../../componets/TopBar.vue'

export default {
  name: '',
  props: {},
  components: {
    TopBar
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
