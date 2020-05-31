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
          <v-card
            elevation="5"
            hover
          >
            <v-echarts
              :options="pieOptions"
              autoresize
              style="width:100%;"
            ></v-echarts>
          </v-card>
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
  data: () => ({
    tagPieData: [],
  }),
  computed: {
    ...mapState('dashboard/', ['monitorCardList']),
    pieOptions: {
      get () {
        const tempData = this.tagPieData
        let max = 0
        if (tempData && tempData.length > 0) {
          max = tempData.sort((a, b) => b.value - a.value)[0].value
        }
        return {
          baseOption: {
            backgroundColor: '#2c343c',
            title: {
              text: '文章标签饼图',
              left: 'center',
              top: 0,
              textStyle: {
                color: '#ccc',
              },
            },
            visualMap: {
              show: false,
              min: 0,
              max,
              inRange: {
                colorLightness: [0, 1],
              },
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: this.tagPieData,
                roseType: 'radius',
                label: {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                labelLine: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)',
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20,
                },
                itemStyle: {
                  color: '#c30531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.7)',
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay () {
                  return Math.random() * 200
                },
              },
            ],
          },
          media: [
            {
              query: {
                maxWidth: 400,
              },
              option: {
                legend: {
                  right: 'center',
                  orient: 'vertical',
                  top: 'middle',
                },
                series: [
                  {
                    radius: '60%',
                    center: ['50%', '50%'],
                  },
                ],
              },
            },
          ],
        }
      },
    },
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
      this.queryTagPieData().then((data) => {
        that.tagPieData = data
      })
    },
    async queryMonitorData () {
      const { data } = await axios.get(monitorUrl.query.getMonitorCardData).catch((err) => {
        console.error(JSON.stringify(err))
      })
      return data
    },
    async queryTagPieData () {
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
