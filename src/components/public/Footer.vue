<template>
    <div class="footercontent">
        <div class="content">
            <button @click="toastMsg">客户端</button>
            <i class="logo_cat"></i>
            <button @click="toTop">返回顶部</button>
        </div>
         <div class="bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    methods: {
        toTop(){
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0
        },
        toastMsg(){
            Dialog.confirm({
                title:'下载客户端',
                message:'下载 APP 发现更多有趣内容 >w<'
            }).then(()=>{
                window.location.href="https://www.missevan.com/app/download?device=0&ct=missevan";
            })
        }
    },
}
</script>

<style lang="stylus" scoped>
    .footercontent 
        flex-direction column
        align-items center
        position relative
        height 0.7rem
        padding 0.1rem 0.2rem 
        color #9e9e9e
        font-size 0.14rem
        width 3.75rem
        box-sizing border-box
        .content
            display flex
            justify-content space-around
            width 100%
            button
                background transparent
                color #9e9e9e
                border none 
                width 0.6rem
            .logo_cat
                background-image url(../../assets/images/sprite-icons.png)
                background-size 2.81rem 2.62rem
                background-position -2.55rem -1.05rem
                width 0.14rem
                height 0.16rem
        .bottom
            width 100%
            text-align center
            font-size 0.12rem
            margin-top 0.05rem
</style>