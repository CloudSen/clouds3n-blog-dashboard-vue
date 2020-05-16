<template>
  <fragment>
    <Header></Header>
    <Drawer></Drawer>
    <Main></Main>
  </fragment>
</template>

<script>
import Header from '@/components/header/Header'
import Drawer from '@/components/aside/NavigationDrawer'
import Main from '@/components/main/MainContent'

export default {
  name: 'home',
  components: {
    Header,
    Drawer,
    Main,
  },
}
</script>

<style>
</style>
