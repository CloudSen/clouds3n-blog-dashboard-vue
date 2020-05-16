<template>
  <v-row
    align-content="center"
    class="fill-height"
    justify="center"
  >
    <v-col
      class="subtitle-1 text-center"
      cols="12"
    >{{loadingData.text}}</v-col>
    <v-col cols="6">
      <v-progress-linear
        :absolute="loadingData.absolute"
        :active="loadingData.active"
        :indeterminate="loadingData.active"
        :rounded="loadingData.rounded"
        :top="loadingData.top"
        color="deep-purple accent-4"
        height="6"
      ></v-progress-linear>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'linear-loading',
  props: {
    loadingData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>
