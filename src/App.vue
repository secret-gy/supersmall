<template>
  <div id="app">
    <Tabbar>
      <TabbarItem path='/cart'>
        <img src="./assets/img/tabbar/cart.svg" alt="" slot="tabbar-item-icon">
        <img src="./assets/img/tabbar/cart_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-item-txt">cart</div>
      </TabbarItem>
      <TabbarItem path='/category'>
        <img src="./assets/img/tabbar/category.svg" alt="" slot="tabbar-item-icon">
        <img src="./assets/img/tabbar/category_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-item-txt">category</div>
      </TabbarItem>
      <TabbarItem path='/home'>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="tabbar-item-icon">
        <img src="./assets/img/tabbar/home_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-item-txt">home</div>
      </TabbarItem>
      <TabbarItem path='/profile'>
        <img src="./assets/img/tabbar/profile.svg" alt="" slot="tabbar-item-icon">
        <img src="./assets/img/tabbar/profile_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-item-txt">profile</div>
      </TabbarItem>
    </Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar'
import TabbarItem from './components/tabbar/TabbarItem'
export default {
  components:{
    TabbarItem,
    Tabbar
  }
}
</script>

<style>

</style>
