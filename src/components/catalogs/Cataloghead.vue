<template>
    <div class="panel-head">
        <div class="panel-title">
            <div class="callout">
                {{headtitle}}
            </div>
        </div>
        <div class="panel-nav" v-if="more!=''">
            <div class="panel-nav-type" @click.stop="toastMsg">
                {{more}}
            </div>
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';

export default {
    props:{
        "headtitle": String,
        "more": String
    },
    methods:{
        toastMsg(){
            Dialog.confirm({
                title:'下载客户端',
                message:'下载 APP 发现更多有趣内容 >w<'
            }).then(()=>{
                window.location.href="https://www.missevan.com/app/download?device=0&ct=missevan";
            })
        },
    }
}
</script>
<style lang="stylus" scoped>
.panel-head
    display flex
    justify-content space-between
    padding 0 0.14rem
    height 0.24rem
    line-height 0.24rem
    margin 0.1rem 0
    .panel-title
        font-size 0.16rem
        display inline-block
        position relative
        .callout
            display block
            padding-left 0.1rem
            &:before
                content ""
                display block
                position absolute
                left 0
                top 10%
                height 80%
                background-color #000
                width 0.04rem
                border-radius 0.04rem
    .panel-nav
        font-size 0.14rem
        color #9e9e9e
        display inline-block
        .panel-nav-type
            display block
            position relative
            float right 
            background-color #ffffff
            border 0.01rem solid #e0e0e0
            border-radius 0.2rem
            width 0.64rem
            height 0.24rem
            line-height 0.24rem
            font-size 0.13rem
            text-align center
            color #757575
            &:after
                content ""
                display block
                position relative
                float right 
                top 0.07rem
                right 0.12rem
                width 0.08rem
                height 0.08rem
                box-sizing border-box
                border 0.01rem solid  #757575
                border-bottom none 
                border-left none 
                transform rotate(45deg)
</style>