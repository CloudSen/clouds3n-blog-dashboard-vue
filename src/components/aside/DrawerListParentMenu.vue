<template>
  <fragment>
    <template v-for="menu in menuList">
      <v-list-group
        :key="menu.uuid"
        :prepend-icon="menu.icon"
        :sub-group="isSubGroup"
        active-class="indigo--text text--darken-4"
        v-if="menu.type ===1 && menu.hasChildren"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="grey--text text--darken-3 font-weight-medium">{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <!-- 读取父级菜单的子项 -->
        <!-- 读取父级菜单的普通菜单 -->
        <NormalMenu
          :key="`${menu.uuid}-parent-submenu`"
          :menuList="menu.children"
        ></NormalMenu>
        <!-- 读取二级父级菜单 -->
        <drawer-list-parent-menu
          :isSubGroup="true"
          :key="`${menu.uuid}-subparent-menu`"
          :menuList="menu.children"
        ></drawer-list-parent-menu>
      </v-list-group>
    </template>
  </fragment>
</template>

<script>
import NormalMenu from '@/components/aside/DrawerListNormalMenu'

export default {
  name: 'drawer-list-parent-menu',
  props: {
    menuList: {
      type: Array,
      required: true,
    },
    isSubGroup: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    NormalMenu,
  },
}
</script>

<style>
</style>
