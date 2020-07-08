<template>
    <div>
        <Loading v-if="list.length==0"></Loading>
        <div v-else>
            <Cataloghead :headtitle="'全区动态'" :more="''"></Cataloghead>
            <div class="panel-body">
            <div class="panel-list">
                <div class="list-item" v-for="item in list" :key="item.id">
                    <div class="cover">
                        <img class="cover-img" :src="item.front_cover" alt="">
                    </div>
                    <a class="detail" href="javascript:;" @click="toSound(item.id)">
                        <div class="detail-title">{{item.soundstr}}</div>
                        <div class="detail-username">UP 主：{{item.username}}</div>
                        <div class="detail-footer">
                            <div class="detail-playtimes"> {{item.view_count|count_filter}}</div>
                            <div class="detail-time">{{item.duration|time_filter}}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Cataloghead from "./Cataloghead";
import Loading from "../public/Loading"
export default {
    props:["id"],
    data(){
        return {
            list:[],
        }
    },
    methods:{
        toSound(soundid){
            this.$router.push({name:"soundintroduce",params:{soundid:soundid}})
        }
    },
    mounted(){
        this.$axios(`/ajax/mobileWeb/catalogrank?cid=${this.id}`).
        then(res=>{
            // console.log(res.data.info)
            this.list = res.data.info;
        })
    },
    components:{
        "Cataloghead": Cataloghead,
        "Loading": Loading
    },
    filters:{
        count_filter(value){
            return parseInt(value)>9999? (Math.floor(parseInt(value)/1000)/10) + '万': value 
        },
        time_filter(value){
            let time = new Date(value);
            return time.getMinutes()+":"+(time.getSeconds()<10?'0'+time.getSeconds():time.getSeconds())
        }
    },
}
</script>
<style lang="stylus" scoped>
.panel-body
    margin 0 0.14rem
    padding 0
    .panel-list
        padding-bottom 0.16rem
        margin 0.1rem 0
        .list-item
            height 0.9rem
            line-height 0.9rem
            width 100%
            padding 0
            position relative
            &:after
                content ""
                display block
                position absolute
                right 0
                bottom 0
                left 0.1rem
                border-bottom 0.01rem solid #e0e0e0
            .cover
                width 0.7rem
                height 0.7rem
                border-radius 0.04rem
                margin 0.1rem
                float left
                overflow hidden
                position relative
                display block
                background-repeat no-repeat
                background-size 100%
                background-position 50%
                .cover-img
                    width 0.7rem
                    height 0.7rem
                    z-z-index 0
                    display block
                    position absolute
                    border-radius 0.04rem
            .detail
                width calc(100% - 0.9rem)
                float right 
                padding 0.1rem 0
                height 0.7rem
                color #424242
                overflow hidden
                position relative
                .detail-title
                    width 94%
                    height 0.36rem
                    word-break break-all
                    text-overflow ellipsis
                    line-height 0.18rem
                    overflow hidden
                    color #616161
                .detail-username
                    width 86%
                    white-space nowrap
                    font-size 0.12rem
                    overflow hidden
                    text-overflow ellipsis
                    height 0.2rem
                    line-height 0.2rem
                    color #9e9e9e
                .detail-footer
                    height 0.12rem 
                    line-height 0.12rem
                    display block
                    position absolute
                    left 0
                    right 0
                    bottom 0.11rem
                    .detail-playtimes
                        font-size 0.12rem
                        color #9e9e9e
                        margin-right 0.2rem
                        padding-left 0.18rem
                        width 0.66rem
                        white-space nowrap
                        position relative
                        overflow hidden
                        text-overflow ellipsis
                        display inline-block
                        &:before
                            background-image url(../../assets/images/sprite-icons-body.png)
                            background-size 0.7rem 0.55rem
                            background-position -0.58rem 0
                            content ""
                            display block
                            position absolute
                            width 0.12rem
                            left 0.02rem
                            top 0.01rem
                            height 0.12rem
                            line-height 0.12rem
                    .detail-time
                        font-size 0.12rem
                        color #9e9e9e
                        margin-right 0.2rem
                        padding-left 0.18rem
                        width 0.66rem
                        white-space nowrap
                        position relative
                        overflow hidden
                        text-overflow ellipsis
                        display inline-block
                        height 0.12rem
                        line-height 0.12rem
                        &:before
                            content ""
                            display block
                            background-image url(../../assets/images/sprite-icons-body.png)
                            background-size 0.7rem 0.55rem
                            background-position -0.29rem -0.44rem
                            position absolute
                            height 0.12rem
                            line-height 0.12rem
                            width 0.12rem
                            left 0.02rem
                            top 0.01rem



</style>