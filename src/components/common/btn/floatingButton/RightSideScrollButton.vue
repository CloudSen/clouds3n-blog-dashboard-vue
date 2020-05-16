<template>
  <fragment>
    <v-fade-transition>
      <v-btn
        @click.stop="scrollToTop"
        bottom
        class="mb-12"
        color="blue darken-3"
        dark
        fab
        fixed
        right
        ripple
        small
        transition="slide-x-reverse-transition"
        v-scroll="onScroll"
        v-show="showTopButton"
      >
        <i class="material-icons">keyboard_arrow_up</i>
      </v-btn>
    </v-fade-transition>
    <v-fade-transition>
      <v-btn
        @click.stop="scrollToBottom"
        bottom
        color="blue darken-3"
        dark
        fab
        fixed
        right
        ripple
        small
        transition="slide-x-reverse-transition"
        v-scroll="onScroll"
        v-show="showBottomButton"
      >
        <i class="material-icons">keyboard_arrow_down</i>
      </v-btn>
    </v-fade-transition>
  </fragment>
</template>

<script>
import getPageMaxHeight, { getHtmlClientHeight } from '@/utils/windowSizeUtil'

export default {
  name: 'right-side-scroll-btn',
  data: () => ({
    showTopButton: false,
    showBottomButton: false,
  }),
  methods: {
    scrollToTop () {
      this.$vuetify.goTo(0)
    },
    scrollToBottom () {
      this.$vuetify.goTo(getPageMaxHeight())
    },
    onScroll (e) {
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.showTopButton = top > 150
      this.showBottomButton = top < getPageMaxHeight() - getHtmlClientHeight() - 300
    },
  },
}
</script>

<style>
</style>
