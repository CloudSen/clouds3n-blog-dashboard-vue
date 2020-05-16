<template>
  <v-app-bar
    app
    color="#6A76AB"
    dark
    dense
    extension-height="0"
  >
    <v-app-bar-nav-icon @click.stop="triggerDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>博客管理系统</v-toolbar-title>

    <v-spacer></v-spacer>

    <HeaderItems :items="this.headerMenu"></HeaderItems>

    <AppBarLoading slot="extension"></AppBarLoading>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import HeaderItems from '@/components/header/HeaderItems'
import AppBarLoading from '@/components/common/loading/AppBarLoading'
import TRIGGER_DRAWER from './constants/mutationType'

export default {
  name: 'top-header',
  components: {
    HeaderItems,
    AppBarLoading,
  },
  data: () => ({
    items: [],
  }),
  computed: {
    ...mapState('header', ['headerMenu']),
  },
  methods: {
    ...mapMutations('navDrawer/', [TRIGGER_DRAWER]),
  },
}
</script>

<style scoped>
.v-toolbar__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Hack, Consolas, Monaco, Menlo !important;
}
</style>

<style>
.v-application--wrap .v-toolbar__extension {
  padding: 0px !important;
}
</style>
