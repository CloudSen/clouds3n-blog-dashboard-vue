<template>
  <fragment>
    <v-card
      :loading="loadingArticleFreqLine"
      elevation="5"
      hover
    >
      <v-echarts
        :options="lineOptions"
        autoresize
        style="width:100%;"
      ></v-echarts>
    </v-card>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'article-freq-line-card',
  computed: {
    ...mapState('dashboard/', ['articleFreqLineData', 'loadingArticleFreqLine']),
    lineOptions: {
      get () {
        const dateList = this.articleFreqLineData.map((item) => item[0])
        const valueList = this.articleFreqLineData.map((item) => item[1])
        return {
          backgroundColor: '#2c343c',
          visualMap: {
            show: false,
            type: 'continuous',
            dimension: 0,
            min: 0,
            max: dateList.length - 1,
          },
          title: {
            text: '文章更新频率',
            left: 'center',
            top: 0,
            textStyle: {
              color: '#ccc',
            },
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            data: dateList,
            axisLine: {
              lineStyle: {
                color: '#ccc',
              },
            },
          },
          yAxis: {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: '#ccc',
              },
            },
          },
          grid: {
            top: '10%',
          },
          series: {
            type: 'line',
            showSymbol: false,
            data: valueList,
            cursor: 'pointer',
          },
        }
      },
    },
  },
}
</script>

<style>
</style>
