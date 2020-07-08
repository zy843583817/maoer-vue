<template>
  <div class="mine" @touchmove.prevent>
      <a href="javascript:void(0);" class="user" @click="showMsg">
          <div class="pic">
              <img src="https://static.missevan.com/assets/images/home/default-icon.jpg" alt="头像
              ">
          </div>
          <div class="detail">点击登录</div>
      </a>
      <a href="javascript:void(0);" class="row home">M-主站</a>
      <a href="javascript:void(0);" class="row live">M-直播</a>
      <a href="javascript:void(0);" class="row wallet">M-钱包</a>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
    methods:{
        showMsg(){
            Toast('还在努力开发中，客官等等再来吧 ~ o(∩_∩)o ')
        }
    }
}
</script>
<style lang="stylus" scoped>
.mine
    width 3.75rem
    height calc(100% - 0.4rem)
    background #000
    position fixed
    z-index 98
    margin-top 0.4rem
    >a
        background #3d3d3d
    >a:after
        content ""
        display block
        width 0.08rem
        height 0.14rem
        background url('https://static.missevan.com/assets/m/images/build/sprite-icons@2x.1592535d.png')
        background-size 2.62rem 2.34rem
        background-position -2.47rem -2.02rem
        position absolute
        right 0.1rem
    .user
        width 3.15rem
        height 0.73rem
        padding 0.2rem 0.3rem
        margin-bottom 0.2rem
        display flex
        align-items center
        .pic
            width 0.7rem
            height 0.7rem
            img 
                width 100%
                height 100%
                border-radius 50%
        .detail
            display flex
            align-items center
            padding 0.1rem 0.2rem
            width calc(100% - 1.5rem)
            color #fff
            font-size 0.14rem
    .row
        color #fff
        display flex
        align-items center
        height 0.38rem
        width 3.39rem
        margin-bottom 0.01rem
        padding-left 0.36rem
        font-size 0.14rem
        position relative
    .home:before
        background  -0.02rem -0.43rem/0.82rem 0.61rem
    .live:before
        background  -0.46rem -0.02rem/0.82rem 0.61rem
    .wallet:before
        background  -0.22rem -0.43rem/0.82rem 0.61rem
    .row:before
        content: "";
        display: block;
        position: absolute;
        background-image url('https://static.missevan.com/assets/m/images/build/sprite-svg.fd0591a7.svg')
        top: 0.11rem;
        left: 0.1rem;
        height: 0.16rem;
        width: 0.16rem;
        background-repeat: no-repeat;
</style>