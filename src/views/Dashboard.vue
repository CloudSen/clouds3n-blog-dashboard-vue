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
import { mapState, mapMutations } from 'vuex'
import monitorUrl from '@/api/monitorUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'dashboarad',
  components: {
    CountCard,
  },
  computed: {
    ...mapState('dashboard/', ['monitorCardList']),
  },
  methods: {
    ...mapMutations('dashboard/', ['updateMonitorCardList']),
    init () {
      const that = this
      this.queryMonitorData().then((data) => {
        const cardList = data
        cardList.forEach((tempCard) => {
          that.updateMonitorCardList(tempCard)
        })
      })
    },
    async queryMonitorData () {
      const { data } = await axios.get(monitorUrl.query.getMonitorCardData).catch((err) => {
        console.error(JSON.stringify(err))
      })
      return data
    },
  },
  mounted () {
    this.init()
  },
}
</script>

<style>
</style>
