<template>
  <div>
      <div id="banner">
          <van-swipe class="wrapper swiper-wrapper" :autoplay="2000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in bannerList" :key="index" @click.stop="toSound(item)">
              <a class="swiper-slide" href="javascript:;" >
                <img :src="item.pic" alt="">
            </a>
            </van-swipe-item>
          </van-swipe>
      </div>
  </div>
</template>
<script>
import {Swipe, SwipeItem} from "vant";
export default {
    data(){
      return {
        bannerList: []
      }
    },
    methods: {
        toSound(item){
          let soundpath = item.url;
          let soundid = soundpath.substr( soundpath.lastIndexOf('/') +1);
          this.$router.push({name:"soundintroduce",params:{soundid:soundid}})
        }
    },
    components:{
      "van-swipe": Swipe,
      "van-swipe-item": SwipeItem
    },
    mounted(){
      if(window.sessionStorage.getItem("bannerlist")){
        this.bannerList = JSON.parse(window.sessionStorage.getItem("bannerlist"));
      }else{
         // banner数据
        this.$axios('/ajax/mobileWeb/newHomepage3').
        then(res=>{
            this.bannerList = res.data.info.banner;
            window.sessionStorage.setItem("bannerlist",JSON.stringify(this.bannerList));
        })
      }
      
    }
}
</script>
<style scoped>
    #banner{height: 1.25rem;width: 100%;position: relative;overflow: hidden;}
    #banner .wrapper{width: 100%;height: 100%;}
    #banner .wrapper a{display: block;width: 100%;height: 100%;}
    #banner .wrapper a>img{width: 100%;height: 100%;}
</style>