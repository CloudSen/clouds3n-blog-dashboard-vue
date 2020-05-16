<template>
  <fragment>
    <v-footer
      absolute
      class="font-weight-medium"
      dark
      padless
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} —
        <strong>CloudS3n</strong> — Vuetify
      </v-col>
    </v-footer>
  </fragment>
</template>

<script>
export default {
  name: 'buttom-footer',
}
</script>

<style>
</style>
