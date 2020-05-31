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
      <v-row>
        <v-col
          cols="12"
          lg="6"
          md="6"
          xl="4"
        >
          <TagPieCard></TagPieCard>
        </v-col>
        <v-col
          cols="12"
          lg="6"
          md="6"
          xl="4"
        >
          <ArticleFreqLineCard></ArticleFreqLineCard>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import CountCard from '@/components/main/dashboard/CountCard'
import TagPieCard from '@/components/main/dashboard/TagPieCard'
import ArticleFreqLineCard from '@/components/main/dashboard/ArticleFreqLineCard'
import { mapState, mapMutations } from 'vuex'
import monitorUrl from '@/api/monitorUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'dashboarad',
  components: {
    CountCard,
    TagPieCard,
    ArticleFreqLineCard,
  },
  computed: {
    ...mapState('dashboard/', ['monitorCardList']),
  },
  methods: {
    ...mapMutations('dashboard/', [
      'updateMonitorCardList',
      'updateTagPieData',
      'updateLoadingTagPie',
      'updateLoadingMonitorData',
    ]),
    init () {
      const that = this
      this.queryMonitorData().then((data) => {
        const cardList = data
        cardList.forEach((tempCard) => {
          that.updateMonitorCardList(tempCard)
        })
        this.updateLoadingMonitorData(false)
      })
      this.queryTagPieData().then((data) => {
        that.updateTagPieData(data)
        that.updateLoadingTagPie(false)
      })
    },
    async queryMonitorData () {
      this.updateLoadingMonitorData(true)
      const { data } = await axios.get(monitorUrl.query.getMonitorCardData).catch((err) => {
        console.error(JSON.stringify(err))
      })
      return data
    },
    async queryTagPieData () {
      this.updateLoadingTagPie(true)
      const { data } = await axios.get(monitorUrl.query.getTagPieData).catch((err) => {
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
