<template>
  <fragment>
    <Header></Header>
    <Drawer></Drawer>
    <Main></Main>
    <Footer></Footer>
  </fragment>
</template>

<script>
import Header from '@/components/header/Header'
import Drawer from '@/components/aside/NavigationDrawer'
import Main from '@/components/main/MainContent'
import Footer from '@/components/footer/Footer'

export default {
  name: 'home',
  components: {
    Header,
    Drawer,
    Main,
    Footer,
  },
}
</script>

<style>
</style>
