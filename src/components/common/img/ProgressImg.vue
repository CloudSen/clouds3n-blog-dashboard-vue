<template>
  <fragment>
    <v-img
      :aspect-ratio="imgInfo.aspectRatio"
      :src="imgInfo.src"
      lazy-src="../../../assets/lazy_loading.png"
    >
      <template v-slot:placeholder>
        <v-row
          align="center"
          class="fill-height ma-0"
          justify="center"
        >
          <v-progress-circular
            color="grey lighten-5"
            indeterminate
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </fragment>
</template>

<script>
export default {
  name: 'progress-img',
  props: {
    imgInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>
