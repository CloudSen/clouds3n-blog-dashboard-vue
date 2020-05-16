<template>
  <fragment>
    <v-container>
      <v-row dense>
        <v-col
          :key="monitorCard.type"
          cols="12"
          lg="3"
          md="4"
          sm="6"
          v-for="monitorCard in monitorCardList"
          xl="2"
        >
          <CountCard :monitorCard="monitorCard"></CountCard>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import CountCard from '@/components/main/dashboard/CountCard'
import { mapState } from 'vuex'

export default {
  name: 'dashboarad',
  components: {
    CountCard,
  },
  computed: {
    ...mapState('dashboard/', ['monitorCardList']),
  },
}
</script>

<style>
</style>
