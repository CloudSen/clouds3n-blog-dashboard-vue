<template>
  <fragment>
    <template v-for="item in this.drawerData">
      <template v-if="item.type === 0 && item.hasChildren">
        <!-- 分组名 -->
        <v-subheader
          :class="subHeaderClass"
          :key="item.uuid"
        >{{ item.name }}</v-subheader>
        <!-- 读取当前分组下的菜单项 -->
        <!-- 读取普通菜单 -->
        <NormalMenu
          :key="`${item.uuid}-normal-menu`"
          :menuList="item.children"
        ></NormalMenu>
        <!-- 读取父级菜单 -->
        <ParentMenu
          :key="`${item.uuid}-parent-menu`"
          :menuList="item.children"
        ></ParentMenu>
        <!-- 分组分界线 -->
        <v-divider :key="`${item.uuid}-divider`"></v-divider>
      </template>
    </template>
  </fragment>
</template>

<script>
import NormalMenu from '@/components/aside/DrawerListNormalMenu'
import ParentMenu from '@/components/aside/DrawerListParentMenu'

export default {
  name: 'drawer-list-group-menu',
  props: {
    drawerData: {
      type: Array,
      required: true,
    },
  },
  components: {
    NormalMenu,
    ParentMenu,
  },
  data: () => ({
    subHeaderClass: 'caption font-weight-light teal--text text-darken-3',
  }),
}
</script>

<style>
</style>
