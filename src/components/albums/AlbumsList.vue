<template>
    <div class="albumsList">
        <transition enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
            <AlbumType v-show="this.$store.state.isShow" class="albumType"></AlbumType>
        </transition>
        <Loading v-if="albumsList.length==0"></Loading>
        <div v-else>
            <div class="panel">
                <div class="panel-head">
                    <div class="panel-title">
                        <div class="callout">
                            全部音单
                        </div>
                    </div>
                    <div class="panel-nav">
                        <div class="panel-nav-type" @click="showTypeMenu">
                            类型
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <a href="javascript:;" class="Thumbnail" v-for="item in albumsList" :key="item.id" @click="toList(item.id)">
                        <div class="album-cover-bg"></div>
                        <div class="lazy-image" :style="'background-image: url('+ item.front_cover +')'">
                            <div class="sound-num">
                                <span>{{item.music_count}}</span>
                            </div>
                        </div>
                        <div class="title">{{item.title}}</div>
                    </a>
                </div>
            </div>
            <div class="more">
                <button @click="toastMsg">查看更多音单</button>
            </div>
        </div>
    </div>
</template>

<script>
import AlbumType from "./AlbumType";
import Loading from "../public/Loading";
import "@/assets/animation.css"
import { Toast } from "vant";
export default {
    data(){
        return {
            albumsList: [],
        }
    },
    methods:{
        toList(listid){
            this.$router.push({name:"album",params:{albumid:listid}});
        },
        toastMsg(){
            Toast('请先下载客户端...(ง •̀_•́)ง')
        },
        showTypeMenu(){
            Toast('还在努力开发中...(ง •̀_•́)ง')
            this.$store.commit('updateAlbumtype',true);
        }
    },
    components: {
        "Loading": Loading,
        "AlbumType": AlbumType
    },
    mounted(){
        if(window.sessionStorage.getItem('albumslist')){
            this.albumsList =JSON.parse(window.sessionStorage.getItem('albumslist'));
        }else{
            this.$axios('/ajax/explore/tagalbum?order=0').
            then(res=>{
                console.log(res.data.albums);
                this.albumsList = res.data.albums;
                window.sessionStorage.setItem('albumslist',JSON.stringify(this.albumsList));
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .albumsList
        .albumType
            position fixed
            width 100%
            top 0.4rem
        padding 0
        overflow hidden
        .panel
            display block
            position relative
            margin 0.1rem auto
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
            .panel-body
                flex-wrap wrap
                padding-top 0.1rem
                min-height 3.2rem
                display flex
                justify-content space-around
                align-items center
                margin 0 0.14rem
                .Thumbnail
                    display inline-block
                    z-index 0
                    position relative
                    margin 0 0 0.1rem
                    width 1.63rem
                    height 1.91rem
                    margin-left 0 
                    margin-right 0 
                    .album-cover-bg
                        display block
                        position absolute
                        width 100%
                        padding-bottom 100%
                        background url(../../assets/images/albumbg.png) no-repeat
                        background-size contain
                    .lazy-image
                        display block
                        position relative
                        border-border-radius 0.04rem
                        background-repeat no-repeat
                        background-position 50%
                        background-size 100%
                        overflow visible
                        background-color #e0e0e0
                        border none 
                        width 1.456rem
                        height 1.456rem
                        .sound-num
                            height 0.36rem
                            line-height 0.24rem
                            position absolute
                            right 0
                            bottom 0
                            left 0
                            border-radius 0 0 0.04rem 0.04rem 
                            background linear-gradient(180deg,transparent,rgba(0,0,0,.26))
                            span 
                                display block
                                position absolute
                                padding-left 0.14rem
                                right 0.05rem
                                font-size 0.12rem
                                color #fff
                                bottom 0
                                text-shadow 0.005rem 0 0.01rem #000
                                &:before
                                    margin-top 0.08rem
                                    content ""
                                    display block
                                    position absolute
                                    margin 0.04rem 0 0.03rem
                                    left 0
                                    top 0.04rem
                                    width 0.13rem
                                    height 0.11rem
                                    background-image url(../../assets/images/sprite-icons-body.png)
                                    background-position 0 -0.44rem
                                    background-size 0.7rem 0.55rem
                    .title
                        margin-top 0.06rem
                        width 100%
                        height 0.4rem
                        word-break break-all
                        text-overflow ellipsis
                        overflow hidden
                        line-height 0.2rem
                        margin 0
                        white-space normal
                        color #616161
                        font-size 0.13rem
        .more
            width 100%
            padding-bottom 0.1rem
            button 
                display block
                width 80%
                height 0.3rem
                margin 0.1rem auto
                background-color #e0e0e0
                border none 
                font-size 0.14rem
</style>