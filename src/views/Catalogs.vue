<template>
  <div id="Catalogs">
    <Catalogs :cataloglist="cataloglist"></Catalogs>
    <myfooter class="myfooter"></myfooter>
  </div>
</template>

<script>
import Catalogs from "../components/catalogs/Catalogs.vue";
import Footer from "../components/public/Footer";
export default {
  data(){
    return {
      cataloglist:[],
    }
  },
  components: {
    "Catalogs": Catalogs,
    "myfooter": Footer
  },
  mounted(){
    this.$store.state.headcomponent = "header-top";
    this.$store.commit("updatenavflag",true);
    
    if(this.$store.state.cataloglist.length!=0){
      this.cataloglist = this.$store.state.cataloglist;
    }else{
      this.$axios(`/ajax/mobileWeb/catalogroot`).
      then(res=>{
        this.cataloglist = res.data.info;
        this.$store.state.cataloglist = res.data.info
      })
    }
    console.log(this.cataloglist)
  }
}
</script>
<style lang="stylus" scoped>
#Catalogs
  width 3.75rem
  .myfooter
    position fixed
    bottom 0 
 

</style>