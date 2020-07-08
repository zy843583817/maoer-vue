<template>
<div class="introduce-page">
    <Loading v-if="Object.keys(playerInfo).length==0||introduceContentRelated.length==0"></Loading>
    <div class="introduce" v-else>
        <div class="sound-info" v-if="introduceContent.sound">
            <h3 class="title">{{introduceContent.sound.soundstr}}</h3>
            <ul class="status">
                <li class="icon-play-times">{{introduceContent.sound.view_count_formatted}}</li>
                <li class="icon-comments">{{introduceContent.sound.comment_count}}</li>
                <li>音频 ID：{{introduceContent.sound.id}}</li>
            </ul>
            <div class="intro-container">
                <div :class="['intro' ,{active:isShowExpand}]" >
                    <p>简介：</p>
                    <div v-html="introduceContent.sound.intro"></div>
                </div>
                <span :class="['btn-text-expand',{active:isShowExpand}]" @click="showExpend"></span>
            </div>
        </div>
        <div class="sound-drama" v-if="haveDrama">
            <div v-if="introduceContentUser">
                <a href="javascript:;" class="drama-cover">
                    <img :src="introduceContentUser.cover" alt="">
                </a>
                <a href="javascript:;" class="drama-details">
                    <div class="drama-title">{{introduceContentUser.name}}</div>
                    <div class="drama-type">{{introduceContentUser.catalog_name}} 类型：{{introduceContentUser.type_name}}</div>
                    <div class="drama-latest-update">更新至 {{introduceContentUser.newest}}</div>
                </a>
                <div class="data-btn-attention" @click="attentionMsg"></div>
            </div>
        </div>
        <div class="sound-cv" v-if="haveCvs">
            <div class="title" v-if="introduceContentCvs">参演 CV ({{introduceContentCvs.length}})</div>
            <div class="cvs-container">
                <div :class="['cvs-block',{active:isShowCvsExpand}]">
                    <div class="cv-in-sound" v-for="item in introduceContentCvs" :key="item.id">
                        <img :src="item.cvinfo.icon" alt="">
                        <div class="name">{{item.cvinfo.name}}</div>
                        <div class="character">饰：{{item.character}}</div>
                        <div class="group">{{item.cvinfo.group}}</div>
                    </div>
                </div>
                <span :class="['btn-text-expand',{active:isShowCvsExpand}]" @click="showCvsExpend"></span>
            </div>
        </div>
        <div class="sound-user" v-if="introduceContent.user">
            <a href="javascript:;" class="avatar">
                <img :src="introduceContent.user.icon" alt="" class="lazy-image">
            </a>
            <div class="user-sound-info">
                <a href="javascript:;">{{introduceContent.user.username}}</a>
                <p class="publish-time">发布于：{{introduceContent.sound.create_time|timeFilter}}</p>
            </div>
            <div class="user-btn-attention" @click="attentionMsg"></div>
        </div>
        <div class="sound-related" >
            <div class="sound-block sound-dramas" v-if="haveRelated">
                <div class="section">剧集推荐</div>
                <div class="sound-container">
                    <a href="javascript:;" class="re-drama" v-for="item in introduceContentRelated.dramas" :key="item.id"  @click="toastMsg">
                        <div class="cover">
                            <img :src="item.front_cover" alt="">
                        </div>
                        <div class="title">{{item.name}}</div>
                    </a>
                </div>
            </div>
            <div class="sound-block sound-sounds">
                <div class="section">相似音频</div>
                <div class="sound-container">
                    <a href="javascript:;" class="Thumbnail sound" v-for="item in introduceContentRelated.sounds" :key="item.id" @click="toSound(item.id)">
                        <div class="cover-wrap">
                            <img :src="item.front_cover" alt="">
                            <div class="title">{{item.soundstr}}</div>
                            <div class="detail">
                                <span class="item play-times">{{item.view_count|countFilter}}</span>
                                <span class="item comments">{{item.all_comments|countFilter}}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Loading from "../public/Loading"
import { Toast } from 'vant';
export default {
    data(){
        return {
            introduceContent: {},
            introduceContentUser: {},
            introduceContentCvs: [],
            introduceContentRelated: {},
            playerInfo: {},
            haveCvs: true,
            haveRelated: true, 
            haveDrama: true,
            isShowExpand:false,
            isShowCvsExpand:false,
        }
    },
    components: {
        "Loading": Loading
    },
    methods:{
        showCvsExpend(){
            this.isShowCvsExpand = !this.isShowCvsExpand;
        },
        showExpend(){
            this.isShowExpand = !this.isShowExpand
        },
        toSound(soundid){
            this.$router.push({name:"soundintroduce",params:{soundid:soundid}})
            this.$router.go(0);
        },
        toastMsg(){
            Toast("这里数据异常了，~~~(>_<)~~~")
        },
        attentionMsg(){
            Toast("请先进行登录哦 ~ ~");
        }
    },
    mounted(){
        this.$bus.$emit("getintroducesoundid",this.$route.params.soundid);
        this.$axios(`/ajax/sound/getsound?soundid=${this.$route.params.soundid}`).
        then((res)=>{
            // console.log(res.data.info.sound);
            this.introduceContent = res.data.info;
            this.playerInfo = res.data.info.sound;
            this.$bus.$emit("getplayerinfo",res.data.info.sound);
            this.$bus.$emit("getcomments_num",res.data.info.sound.comments_num);
        })
        this.$axios(`/ajax/dramaapi/getdramabysound?sound_id=${this.$route.params.soundid}`).
        then((res)=>{
            // console.log(res);
            if(res.data.success==true){
                this.introduceContentUser = res.data.info.drama;
                this.introduceContentCvs = res.data.info.cvs;
                this.haveCvs = true;
                this.haveDrama = true
            }else{
                this.haveDrama = false
                this.haveCvs = false;
            }
        })
        this.$axios(`/ajax/sound/getsoundlike?type=15&sound_id=${this.$route.params.soundid}`).
        then((res)=>{
            // console.log(res.data.info)
            this.introduceContentRelated = res.data.info;
            if(this.introduceContentRelated.dramas.length){
                this.haveRelated = true;
            }else{
                this.haveRelated = false;
            }
        })
    },
    filters:{
        timeFilter(value){
            var now = new Date(value * 1000); // 依情况进行更改 * 1
            let y = now.getFullYear();
            let m = now.getMonth() + 1;
            let d = now.getDate();
            return y + "/" + (m < 10 ? "0" + m : m) + "/" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 5);
        },
        countFilter(value){
            return parseInt(value)>9999? (Math.floor(parseInt(value)/1000)/10) + '万': value 
        },
    }
}
</script>
<style lang="stylus" scoped>
.introduce-page
    position relative
    padding 0.12rem 0
    .introduce
        position relative
        .sound-info
            padding 0 0.1rem
            padding-bottom 0.18rem
            border-bottom 0.01rem solid  #e0e0e0
            .title
                font-size 0.14rem
                font-weight 400
                min-height 0.24rem
                line-height 0.24rem
            .status
                height 0.14rem
                line-height 0.14rem
                font-size 0.1rem
                color #757575
                margin 0.1rem 0
                >li
                    display inline-block
                    position relative
                    margin-right 0.2rem
                .icon-play-times
                    padding-left 0.16rem
                    &:before
                        background-image url(../../assets/images/sprite-icons-body.png)
                        background-size 0.7rem 0.55rem
                        background-position -0.58rem 0
                        content ""
                        position absolute
                        top 0.02rem
                        left 0.01rem
                        width 0.12rem
                        height 0.1rem
                        background-repeat no-repeat
                .icon-comments
                    padding-left 0.16rem
                    &:before
                        background-image url(../../assets/images/sprite-icons-body.png)
                        background-size 0.7rem 0.55rem
                        background-position -0.44rem -0.27rem
                        content ""
                        position absolute
                        top 0.02rem
                        left 0.01rem
                        width 0.12rem
                        height 0.1rem
                        background-repeat no-repeat
            .intro-container
                display block
                position relative
                .intro
                    margin 0.05rem 0
                    font-size 0.12rem
                    color #9e9e9e
                    width 100%
                    word-break break-all
                    overflow hidden
                    text-overflow ellipsis
                    display block
                    line-height 0.2rem
                    max-height 0.4rem
                    height auto
                    &.active
                        max-height none
                .btn-text-expand
                    font-size 0.14rem
                    border none 
                    text-align center
                    background-size 2.81rem 2.62rem
                    background-position -0.52rem -0.98rem
                    width 0.14rem
                    height 0.08rem
                    background-image url(../../assets/images/sprite-icons.png)
                    display block
                    position relative
                    margin 0.03rem
                    margin-left calc(100% - 0.16rem)
                    &.active
                        transform rotateZ(180deg);
        .sound-drama
            position relative
            height 0.67rem
            margin 0 0.1rem
            padding 0.18rem 0.02rem 0.18rem 0.72rem
            border-bottom 0.01rem solid  #e0e0e0
            .drama-cover
                display inline-block
                position absolute
                top 0.18rem
                left 0.02rem
                width 0.6rem
                border-radius 0.04rem
                >img
                    width 100%
                    height 100%
                    border-radius 0.04rem
            .drama-details
                max-width calc(100% - 0.72rem)
                float left
                >div
                    overflow hidden
                    height 0.2rem
                    line-height 0.2rem
                    white-space nowrap
                    text-overflow ellipsis
                .drama-title
                    color #000
                    font-size 0.14rem
                .drama-type,.drama-latest-update
                    font-size 0.12rem
                    color #9e9e9e
            .data-btn-attention
                box-sizing border-box
                width 0.65rem
                height 0.26rem
                margin 0.16rem 0
                padding 0.03rem
                padding-left 0.2rem
                float right
                border-color #ed7760
                background-color #ed7760
                color #ffffff
                line-height 0.18rem
                font-size 0.12rem
                display inline-block
                position relative
                text-align center
                vertical-align middle
                &:before
                    background-image url(../../assets/images/sprite-icons.png)
                    background-size 2.81rem 2.62rem
                    background-position -2.55rem -2.16rem
                    width 0.13rem 
                    height 0.12rem
                    content ""
                    display block
                    position absolute
                    top 0.06rem
                    left 0.12rem
                &:after
                    content "\8FFD\5267"
        .sound-cv  
            position relative
            padding 0.16rem 0
            border-bottom 0.01rem solid #e0e0e0
            .title
                position absolute
                top -0.1rem
                width 1rem
                left 0
                right 0
                margin 0 auto
                background-color #f5f5f5
                text-align center
                font-size 0.12rem
            .cvs-container
                position relative
                .cvs-block
                    max-height 1.1rem
                    overflow hidden
                    &.active
                        max-height none
                    .cv-in-sound
                        width calc(25% - 0.1rem)
                        height 1.1rem
                        vertical-align top
                        display inline-block
                        margin 0.05rem
                        >img
                            width 0.46rem
                            height 0.46rem
                            margin 0 auto
                            border-radius 50%
                            display block
                            overflow hidden
                            position relative
                            background-repeat no-repeat
                            background-position 50%
                            background-size 100%
                        .name
                            height 0.18rem
                            margin-top 0.05rem
                            font-size 0.12rem
                            line-height 0.18rem
                            text-align center
                            overflow hidden
                            white-space nowrap
                            text-overflow ellipsis
                        .character,.group
                            height 0.16rem
                            color #9e9e9e
                            line-height 0.16rem
                            font-size 0.1rem
                            text-align center
                            overflow hidden
                            white-space nowrap
                            text-overflow ellipsis
                .btn-text-expand
                    display block
                    position relative
                    padding 0.05rem 0
                    text-align center
                    font-size 0.14rem
                    border none 
                    margin 0.03rem
                    &.active
                        transform rotateZ(180deg);
                    &:before
                        content ""
                        display block
                        width 0.08rem
                        height 0.08rem
                        margin 0 auto
                        border-top 0.02rem solid #9e9e9e
                        border-left 0.02rem solid #9e9e9e
                        transform rotate(-135deg)
        .sound-user
            box-sizing border-box
            position relative
            height 0.78rem
            margin-bottom 0.18rem
            padding 0.18rem 0.12rem 0.18rem 0.62rem
            border-bottom 0.01rem solid #e0e0e0
            .avatar
                display inline-block
                position absolute
                top 0.18rem
                left 0.12rem
                width 0.4rem
                height 0.4rem
                border-radius 50%
                >img 
                    border-radius 50%
                    width 100%
                    height 100%
            .user-sound-info
                display inline-block
                >a
                    display block
                    margin-bottom 0.02rem
                    color #3d3d3d
                    font-size 0.14rem
                    height 0.2rem
                    line-height 0.2rem
                >p
                    font-size 0.12rem
                    color #8c8c8c
                    height 0.2rem
                    line-height 0.2rem
            .user-btn-attention
                box-sizing border-box
                float right 
                height 0.26rem
                margin 0.06rem 0
                padding 0.03rem
                border-color #ed7760
                background-color #ed7760
                line-height 0.18rem
                font-size 0.12rem
                color #ffffff
                width 0.65rem
                text-align center
                border 0.01rem solid transparent
                &:after
                    content "\5173\6CE8"
        .sound-related
            margin 0.1rem 0
            .sound-block
                margin 0.2rem 0.08rem
            .sound-dramas
                .section
                    margin-bottom 0.1rem
                    font-size 0.13rem
                    color #979797
                .sound-container
                    margin 0
                    width 100%
                    display flex
                    justify-content space-between
                    flex-wrap wrap
                    height 1.56rem
                    .re-drama
                        display inline-block
                        position relative
                        vertical-align top
                        width calc((100vw - 0.6rem) / 3)
                        margin 0.05rem
                        .cover
                            background-position 50%
                            >img 
                                width 1.06rem
                                height 1.37rem
                                display block
                                overflow hidden
                                border-radius 0.04rem
                        .title
                            width 100%
                            white-space nowrap
                            margin-top 0.02rem
                            overflow hidden
                            text-overflow ellipsis
                            color #424242
                            font-size 0.13rem
                            text-align center
            .sound-sounds
                .section
                    margin-bottom 0.1rem
                    font-size 0.13rem
                    color #979797
                .sound-container
                    margin 0
                    width 100%
                    display flex
                    justify-content space-between
                    flex-wrap wrap
                    .Thumbnail
                        display inline-block
                        margin 0.05rem
                        padding 0
                    .sound
                        width 1.06rem
                        height 1.63rem
                        .cover-wrap
                            position relative
                            >img 
                                width 1.06rem
                                height 1.06rem
                                display block
                                overflow hidden
                                border-radius 0.04rem
                            .title
                                width 100%
                                height 0.36rem
                                word-break break-all
                                overflow hidden
                                text-overflow ellipsis
                                display -webkit-box
                                margin 0.04rem 0
                                line-height 0.18rem
                                font-size 0.13rem
                            .detail 
                                display flex
                                justify-content space-between
                                .item
                                    position relative
                                    padding-left 0.14rem
                                    font-size 0.11rem
                                    line-height 0.11rem
                                    color #bdbdbd
                                .play-times:before
                                    background-image url(../../assets/images/sprite-icons-body.png) 
                                    background-size 0.7rem 0.55rem
                                    background-position -0.58rem 0
                                    content ""
                                    display block
                                    position absolute
                                    left 0
                                    width 0.12rem
                                    height 0.1rem
                                .comments:before
                                    background-image url(../../assets/images/sprite-icons-body.png) 
                                    background-size 0.7rem 0.55rem
                                    background-position -0.44rem -0.27rem
                                    content ""
                                    display block
                                    position absolute
                                    left 0
                                    width 0.12rem
                                    height 0.1rem
</style>