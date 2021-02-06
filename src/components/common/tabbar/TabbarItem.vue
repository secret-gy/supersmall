<template>
  <div id="tabbar-item" @click='chooseTabbar'>
      <div class="tabbar-item-icon" v-show='!isActive'><slot name="tabbar-item-icon"></slot></div>
      <div class="tabbar-active-item-icon" v-show='isActive'><slot name="tabbar-active-icon"></slot></div>
      <div class="tabbar-item-txt" :style="isStyleActive"><slot name="tabbar-item-txt"></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props: {
    path : {
      type: String,
    }
  },
  methods: {
    chooseTabbar(){
      // console.log(this.$props.path);
      this.$router.push(this.$props.path)
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    isStyleActive(){
      return this.isActive? {'color': '#ff5777'}:{}
    }
  }
}
</script>

<style>
#tabbar-item {
    flex: 1;
  }

.tabbar-item-icon img ,.tabbar-active-item-icon img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

.tabbar-item-txt{
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>
