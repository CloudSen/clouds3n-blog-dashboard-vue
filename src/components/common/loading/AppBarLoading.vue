<template>
  <v-progress-linear
    :active="progressData.active"
    :indeterminate="true"
    background-opacity="0"
    class="ma-0"
    color="orange"
    height="4"
    style="top: -2px;"
  ></v-progress-linear>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-bar-loading',
  computed: {
    ...mapState('header', ['progressData']),
  },
}
</script>

<style scoped>
</style>
