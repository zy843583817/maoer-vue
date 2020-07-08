<template>
  <div class="home">
    <Loading v-if="otherSoundsList.length==0"></Loading>
    <div v-else>
      <Banner></Banner>
      <PanelSounds :titleleft="'人气M音'" :title="''" >排行榜</PanelSounds>
      <PanelSounds v-for="item in otherSoundsList" :key="item.id" :title="'更多'" :panelheadmore="item.id.toString()" :titleleft="item.title" :otherSoundsList="item.objects_point">更多</PanelSounds>
      <myfooter></myfooter>
    </div>
  </div>
</template>

<script>
import Banner from "../components/recommend/Banner.vue";
import PanelSounds from "../components/recommend/PanelSounds.vue";
import Footer from "../components/public/Footer";
import Loading from "../components/public/Loading";
export default {
  data(){
    return {
      otherSoundsList:[],
    }
  },
  mounted(){
      this.$store.state.headcomponent = "header-top";
      this.$store.commit("updatenavflag",true);
      
      if(window.sessionStorage.getItem("othersoundslist")){
        this.otherSoundsList = JSON.parse(window.sessionStorage.getItem("othersoundslist"));
      }else{
        //其余栏的数据
        this.$axios('/ajax/sound/newhomepagedata').
        then(res=>{
            // console.log(res.data.info.music);
            this.otherSoundsList = res.data.info.music;
            window.sessionStorage.setItem("othersoundslist",JSON.stringify(this.otherSoundsList));
        })
      }
  },
  components: {
    "Banner":Banner,
    "PanelSounds":PanelSounds,
    "myfooter": Footer,
    "Loading": Loading
  }
};
</script>
