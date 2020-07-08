<template>
    <div id="sharepop" class="show"  @click.self="fadeinmask">
        <div class="share-container">
            <a href="http://service.weibo.com/share/share.php?url=https%3A%2F%2Fwww.missevan.com%2Fsound%2F1264774&title=%E3%80%90S.S%E6%9C%88%E6%9B%B4%E3%80%91%E7%8E%B0%E4%BB%A3%E6%82%AC%E7%96%91%E5%B9%BF%E6%92%AD%E5%89%A7%E3%80%8A%E4%B8%B4%E6%97%B6%E6%90%AD%E6%A1%A3%E3%80%8B%E7%AC%AC%E4%B8%80%E5%AD%A3%E7%AC%AC%E4%B8%80%E6%9C%9F%EF%BC%88%E5%81%B6%E7%84%B6%E8%AE%B0%E5%BE%97%E5%8E%9F%E8%91%97%EF%BC%89&pic=http%3A%2F%2Fstatic.missevan.com%2Fcoversmini%2F201906%2F30%2Fa488dc757c77459af56e6d5ee9e668b9155904.jpg&appkey=" target="_blank" class="share-item weibo">新浪微博</a>
            <a href="javascript:;"  class="share-item wechat" @click="toastMsg">微信好友</a>
            <div class="share-item moments" @click="toastMsg">朋友圈</div>
            <a href="javascript:;"  class="share-item tencent" @click="toastMsg">QQ 好友</a>
            <a href="javascript:;"  class="share-item qzone" @click="toastMsg">QQ 空间</a>
            <div class="share-item copy" @click="toastMsg">复制链接</div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    methods:{
        fadeinmask(){
            this.$store.commit("updatemaskflag",false);
        },
        toastMsg(){
            Toast("链接已经失效了...(ง •̀_•́)ง")
        }
    }
}
</script>

<style lang="stylus" scoped>
    #sharepop
        width 3.75rem 
        height 100vh
        display block
        position fixed
        left 0
        top 0
        right 0 
        bottom 0
        background-color rgba(0,0,0,.5)
        transition .3s ease
    .show
        opacity 1
        z-index 77
        .share-container
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            padding 6%
            background-color #fff
            justify-content space-around
            align-items center
            flex-wrap wrap
            .share-item
                display inline-block
                position relative
                margin 5%
                flex 1 1 auto
                height 0.76rem
                line-height 0.18rem
                width 0.6rem
                font-size 0.14rem
                color #9e9e9e
                text-align center
                &:before
                    content ""
                    display block
                    margin 0 auto 0.1rem
                    height 0.5rem
                    width 0.5rem
                    background no-repeat 50%
                    background-image url(../../assets/images/sprite-icons-share.png)
                    background-size 1.54rem 1.53rem
            .wechat:before
                background-position -0.52rem -0.52rem
            .moments:before
                background-position -1.04rem 0rem
            .tencent:before
                background-position 0rem -1.04rem
            .weibo:before
                background-position -1.04rem -0.51rem
            .qzone:before
                background-position 0 0
            .copy:before
                background-position -0.52rem 0
            



                



</style>