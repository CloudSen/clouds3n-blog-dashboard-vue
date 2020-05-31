<template>
  <fragment>
    <v-card
      :class="this.monitorCard.color"
      :loading="loadingMonitorData"
      :to="this.monitorCard.url"
      elevation="5"
      exact
      hover
      min-height="80px"
      shaped
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col>
          <v-card-text
            :class="`text-center ${this.monitorCard.textColor}`"
          >{{this.monitorCard.name}}：{{this.monitorCard.count}}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'dashboard-count-card',
  props: {
    monitorCard: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('dashboard/', ['loadingMonitorData']),
  },
}
</script>

<style scoped>
</style>
