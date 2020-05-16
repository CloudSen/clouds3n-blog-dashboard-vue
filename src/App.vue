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
