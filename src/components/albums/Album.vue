<template>
    <div class="albumpage">
        <Loading v-if="Object.keys(wallalbum).length==0||albumlist.length==0 "></Loading>
        <div v-else>
            <div class="album-wall" v-if="wallalbum.album">
                <div class="wall-body" >
                    <img  class="album-avatar" :src="wallalbum.album.front_cover" alt="">
                    <div class="album-detail">
                        <span class="album-title">{{wallalbum.album.title}}</span>
                        <div class="album-user">
                            <img class="album-user-icon" :src="wallalbum.owner.boardiconurl2" alt="">
                            <span class="name">{{wallalbum.album.username}}</span>
                        </div>
                    </div>
                </div>
                <div class="wall-warp" :style="{background:'url('+wallalbum.album.front_cover+')'}"></div>
            </div>                    
            <div class="soundlist" v-if="albumlist">
                <div class="sounditem" v-for="item in albumlist" :key="item.id" @click="toSound(item.id)">
                    <div class="cover">
                        <img class="cover-img" :src="item.front_cover" alt="">
                    </div>
                    <a href="javascript:;" class="detail">
                        <div class="title">{{item.soundstr}}</div>
                        <div class="statistics">
                            <div class="item play-times">{{item.view_count|countFilter}}</div>
                            <div class="item duration">{{item.duration|timeFilter}}</div>
                        </div>
                    </a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Loading from "../public/Loading";
import Footer from "../public/Footer";
export default {
    data(){
        return {
            wallalbum:{},
            albumlist:[]
        }
    },
    methods: {
        toSound(soundid){
            this.$router.push({name:"soundintroduce",params:{soundid:soundid}})
        }
    },
    mounted(){
        this.$store.commit("updatenavflag",false);
        this.$axios(`/ajax/sound/soundalllist?albumid=${this.$route.params.albumid}`).
        then(res=>{
            console.log(res.data.info);
            this.wallalbum = res.data.info
            this.albumlist = res.data.info.sounds;
        })
    },
    filters:{
        timeFilter(value){
            let m = new Date(value)
            return m.getMinutes()+":"+(m.getSeconds()<10?'0'+m.getSeconds():m.getSeconds())
        },
        countFilter(value){
            return parseInt(value)>9999? (Math.floor(parseInt(value)/1000)/10) + '万': value 
        },
    },
    components: {
        "Loading": Loading,
        "Footer": Footer
    }

}
</script>

<style lang="stylus" scoped>
    .albumpage
        padding-top 0.4rem
        width 100%
        height 100%
        .album-wall
            height 1.5rem
            background-color rgba(0,0,0,.5)
            position relative
            left 0
            right 0
            top 0
            overflow hidden
            .wall-body
                display flex
                justify-content space-around
                align-items center
                padding 0.1rem
                overflow hidden
                left 0
                right 0
                top 0
                bottom 0
                z-index 1
                position absolute
                .album-avatar
                    width 1.1rem
                    display block
                    height 1.1rem
                .album-detail
                    display flex
                    flex-direction column
                    justify-content space-between
                    color #fff
                    width calc(100% - 1.3rem)
                    height 1.1rem
                    .album-title
                        width calc(100% - 0.1rem)
                        height 0.5rem
                        word-break break-all
                        text-overflow ellipsis
                        overflow hidden
                        display -webkit-box
                        line-height 0.25rem
                        margin-left 0.1rem
                    .album-user
                        width calc(100% - 0.1rem)
                        position relative
                        color #fff
                        display block
                        height 0.3rem
                        line-height 0.3rem
                        margin 0.05rem
                        padding 0
                        .album-user-icon
                            display block
                            width 0.25rem
                            height 0.25rem
                            position absolute
                            left 0.02rem
                            margin 0.02rem
                            border-radius 50%
                        .name
                            display block
                            position relative
                            margin-left 0.4rem
                            font-size 0.16rem
                            width calc(100% - 0.4rem)
                            white-space nowrap
                            text-overflow ellipsis
                            overflow hidden
            .wall-warp
                background-color #f5f5f5
                filter blur(0.2rem)
                position absolute
                left -0.2rem
                top -0.2rem
                right -0.2rem
                bottom -0.2rem
                z-index 0
                background-position 50%
                background-repeat no-repeat
                background-size 100% 100%             
        .soundlist
            display block
            position relative
            top 0
            right 0
            bottom 0
            left 0
            padding-bottom 0.1rem
            .sounditem
                display block
                position relative
                width 100%
                height 0.7rem
                line-height 0.7rem
                .cover
                    border-radius 0.04rem
                    width 0.5rem
                    height 0.5rem
                    margin 0.1rem
                    float left
                    position relative
                    overflow hidden
                    background-size 100%
                    background-position 50%
                    .cover-img
                        position absolute
                        z-index 0
                        border-radius 0.04rem
                        width 0.5rem
                        height 0.5rem
                .detail
                    box-sizing border-box
                    float right 
                    padding 0.1rem 0
                    height 100%
                    color #424242
                    width calc(100% - 0.7rem)
                    position relative
                    .title
                        width 94%
                        height 0.36rem
                        word-break break-all
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        line-height 0.18rem
                        font-size 0.12rem
                        color #616161
                    .statistics
                        height 0.12rem
                        line-height 0.12rem
                        position absolute
                        bottom 0.11rem
                        left 0
                        right 0
                        .item
                            font-size 0.12rem
                            margin-right 0.2rem
                            color #9e9e9e
                            padding-left 0.18rem
                            width 0.66rem
                            box-sizing border-box
                            white-space nowrap
                            display inline-block
                            overflow hidden
                            text-overflow ellipsis
                            position relative
                            height 0.12rem
                            line-height 0.12rem
                            &:before
                                content ""
                                position absolute
                                left 0.02rem
                                top 0.01rem
                                width 0.12rem
                                height 0.12rem
                                line-height 0.12rem
                                background-image url(../../assets/images/sprite-icons-body.png)
                                background-size 0.7rem 0.55rem
                        .play-times:before
                            background-position -0.58rem 0
                        .duration:before
                            background-position -0.29rem -0.44rem


                            

</style>