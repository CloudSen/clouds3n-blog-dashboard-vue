<template>
  <fragment>
    <v-card
      :loading="loadingTagPie"
      elevation="5"
      hover
    >
      <v-echarts
        :options="pieOptions"
        autoresize
        style="width:100%;"
      ></v-echarts>
    </v-card>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'tag-pie-card',
  computed: {
    ...mapState('dashboard/', ['tagPieData', 'loadingTagPie']),
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
}
</script>

<style>
</style>
