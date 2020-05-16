<template>
  <fragment>
    <template v-for="menu in this.menuList">
      <v-list-item
        :key="menu.uuid"
        :to="menu.routerPath"
        active-class="indigo--text text--darken-4"
        v-if="menu.type === 2"
      >
        <v-list-item-icon>
          <i class="material-icons grey--text text--darken-3">{{ menu.icon }}</i>
        </v-list-item-icon>

        <v-list-item-title class="grey--text text--darken-3 font-weight-medium">{{ menu.name }}</v-list-item-title>
      </v-list-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'drawer-list-normal-menu',
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
