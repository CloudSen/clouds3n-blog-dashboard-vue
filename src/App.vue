<template>
  <fragment>
    <v-app dark>
      <template v-if="!loadingData.active">
        <router-view />
      </template>
      <template v-else>
        <CenterLinearLoading :loadingData="this.loadingData"></CenterLinearLoading>
      </template>
    </v-app>
  </fragment>
</template>

<script>
import CenterLinearLoading from '@/components/common/loading/CenterLinearLoading'

export default {
  name: 'App',

  components: {
    CenterLinearLoading,
  },

  data: () => ({
    loadingData: {
      text: '正在加载应用数据...',
      active: false,
    },
  }),
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 14px/1.5;
  font-family: "微软雅黑", "Microsoft YaHei UI", "Microsoft YaHei",
    "WenQuanYi Micro Hei", "PingFang SC", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}

.hackFont {
  font: 14px/1.5 Hack, Consolas, Monaco, Menlo !important;
}

.commonFont {
  font-family: "微软雅黑", "Microsoft YaHei UI", "Microsoft YaHei",
    "WenQuanYi Micro Hei", "PingFang SC", "Helvetica Neue", Helvetica, Arial,
    sans-serif !important;
}

/* 滚动条样式 start */
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

body::-webkit-scrollbar {
  width: 5px;
  background-color: #000;
}

body::-webkit-scrollbar-thumb {
  background-color: #0288d1;
  border: 2px solid #0288d1;
}

pre::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

pre::-webkit-scrollbar {
  height: 3px;
  background-color: #000;
}

pre::-webkit-scrollbar-thumb {
  background-color: #0288d1;
  border: 1px solid #0288d1;
}
/* 滚动条样式 end */
</style>
