<template>
  <fragment>
    <v-img
      :class="imgInfo.class"
      :src="imgInfo.src"
      aspect-ratio="16/9"
      height="250px"
      lazy-src="../../../assets/lazy_loading.png"
    >
      <v-card-title :class="imgInfo.titleCss">{{imgInfo.title}}</v-card-title>
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
  name: 'progress-img-card-title',
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
