<template>
    <div class="sound-action-container">
        <ul class="sound-action">
            <li class="share" @click="showShare">
                <i></i>
                <span>分享</span>
            </li>
            <li class="like" @click="isLike">
                <i :style="liked"></i>
                <span>喜欢</span>
            </li>
            <li class="download" @click="toastDownload">
                <i></i>
                <span>下载</span>
            </li>
        </ul>
        <div class="open-in-client" @click="toastMsg">
            用客户端打开
        </div>
        <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
            <SharePop v-show="this.$store.state.isPopMask" class="popmask"></SharePop>
        </transition>
    </div>
</template>
<script>
import SharePop from "./SharePop";
import "@/assets/animation.css"
import { Dialog } from 'vant';
export default {
    data(){
        return {
            islikeitem:false,
            liked:"background-position:-0.37rem -1.5rem",
        }
    },
    components:{
        "SharePop":SharePop
    },
    methods:{
        showShare(){
            this.isPop = true
            this.$store.commit("updatemaskflag",true);
        },
        isLike(){
            this.islikeitem = !this.islikeitem;
            if(this.islikeitem==true){
                this.liked = "background-position:0rem -1.5rem"; //喜欢
            }else{
                this.liked = "background-position:-0.37rem -1.5rem";
            }
        },
        toastMsg(){
            Dialog.confirm({
                title:'下载客户端',
                message:'下载 APP 发现更多有趣内容 >w<'
            }).then(()=>{
                window.location.href="https://www.missevan.com/app/download?device=0&ct=missevan";
            })
        },
        toastDownload(){
            Dialog.alert({
                message:'请先下载客户端，在客户端中打开哦 >w<'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .sound-action-container
        display flex
        align-items center
        padding 0.14rem 0.12rem 0.1rem
        background-color #fff
        box-shadow 0 0.01rem 0.1rem 0 rgba(0,0,0,.05)
        box-sizing border-box
        .sound-action
            display flex
            justify-content space-around
            flex 1
            span
                display block
                margin-top 0.03rem
                font-size 0.1rem
            .share
                padding 0 0.02rem
                cursor pointer
                text-align center
                >i
                    background-size 2.81rem 2.62rem
                    width 0.35rem
                    height 0.35rem
                    background-image url(../../assets/images/sprite-icons.png);
                    background-position -1.11rem -1.5rem
                    display block
                    border-radius 50%
                    background-repeat no-repeat
            .like
                padding 0 0.02rem
                cursor pointer
                text-align center 
                >i 
                    background-size 2.81rem 2.62rem
                    width 0.35rem
                    height 0.35rem
                    background-image url(../../assets/images/sprite-icons.png);
                    background-position -0.37rem -1.5rem
                    display block
                    border-radius 50%
                    background-repeat no-repeat
            .download
                padding 0 0.02rem
                cursor pointer
                text-align center
                >i 
                    background-size 2.81rem 2.62rem
                    width 0.35rem
                    height 0.35rem
                    background-image url(../../assets/images/sprite-icons.png);
                    background-position -1.54rem 0rem
                    display block
                    border-radius 50%
                    background-repeat no-repeat
        .open-in-client
            width 1.2rem
            height 0.32rem
            margin-left 0.08rem
            background-color #ed7760
            border-color #ed7760
            font-size 0.12rem
            line-height 0.18rem
            padding 0.06rem 0.18rem
            color #fff
            display inline-block
            position relative
            text-align center
            vertical-align  middle
            cursor pointer
            border 0.01rem solid transparent
            border-radius 0.03rem
            margin 0.03rem
            box-sizing border-box
            transition color .2s ease,background-color .2s ease,background .2s ease,border-color .2s ease

</style>