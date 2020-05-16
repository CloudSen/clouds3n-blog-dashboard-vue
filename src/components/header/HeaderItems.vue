<template>
  <fragment>
    <template v-for="item in this.items">
      <v-btn
        :key="item.id"
        :to="item.routerPath"
        class="hidden-sm-and-down"
        depressed
        text
      >
        <i
          class="material-icons mr-1"
          left
        >{{item.icon}}</i>
        {{item.name}}
      </v-btn>
    </template>
    <template v-if="!this.items || this.items.length === 0">
      <v-btn
        class="hidden-sm-and-down red darken-2"
        depressed
        key="error404"
        text
      >
        <i
          class="material-icons mr-1"
          left
        >error</i>
        网络错误
      </v-btn>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'top-header-items',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
