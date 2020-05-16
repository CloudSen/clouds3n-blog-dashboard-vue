<template>
  <fragment>
    <v-list subheader>
      <!-- 分组读取菜单 -->
      <GroupMenu :drawerData="this.drawerData"></GroupMenu>
    </v-list>
    <template v-if="!this.drawerData || this.drawerData.length === 0">
      <v-card color="red darken-2">
        <v-card-text>网络错误</v-card-text>
      </v-card>
    </template>
  </fragment>
</template>

<script>
import GroupMenu from '@/components/aside/DrawerListGroupMenu'

export default {
  name: 'drawer-list',
  props: {
    drawerData: {
      type: Array,
      required: true,
    },
  },
  components: {
    GroupMenu,
  },
}
</script>

<style>
</style>
