<template>
  <div id="app">
      <component :is="this.$store.state.headcomponent"></component>
      <div id="nav" v-show="this.$store.state.navflag">
        <router-link to="/albums">音单</router-link>
        <router-link to="/recommend">推荐</router-link> 
        <router-link to="/catalogs">分类</router-link>
      </div>
    <router-view />
  </div>
</template>

<script>
import Headertop from "./components/public/Headertop.vue";
import Headersearch from "./components/public/Headertop2.vue";

export default {
  data(){
    return {
      
    }
  },
  components:{
    "header-top": Headertop,
    "header-search" :Headersearch
  }
}
</script>

<style scoped>
#fixed{position: fixed;top: 0;z-index: 22;}
#footerfix{position: fixed;bottom: 0;}
#nav {display: flex;height: 0.4rem;font-size: 0.14rem;text-align: center;line-height: 0.39rem;background-color: white;padding-top: 0.4rem;}
#nav a {color: #9e9e9e;flex: 1;height: 0.37rem;}
#nav a.router-link-exact-active {color: #000;position: relative;}
#nav a.router-link-exact-active::after{background-color: #000;content:"";display: block;width: 0.9rem;height: 0.02rem;position: absolute;left: 50%;bottom: -0.01rem; transform: translateX(-50%);}
</style>