<template>
    <div class="comments-page">
        <Loading v-if="requesttime"></Loading>
        <NoMessage v-else></NoMessage>
        <div class="comments" v-if="false">
            <div class="recommend-content">
                <div id="hot-comment-6206055" class="comment">
                    <a href="javascript:;" class="avatar">
                        <img src="" alt="">
                    </a>
                    <div class="comment-body">
                        <a href="javascript:;" class="username">音熊_不一</a>
                        <div class="comment-time">2019-07-03 18:09</div>
                        <div class="comment-like">108</div>
                        <div class="comment-content">来啦来啦 我会更加努力的</div>
                        <ul class="sub-comments">
                            <li>
                                <a href="javascript:;" class="username">白露未晞blwx</a>
                                <div class="comment-time">2019-07-19 17:26</div>
                                <div class="comment-content">凉哥！举高高！</div>
                            </li>
                            <li>
                                <a href="javascript:;" class="username">lyfly</a>
                                <div class="comment-time">2019-08-01 18:34</div>
                                <div class="comment-content">凉哥加油(ง •̀_•́)ง</div>
                            </li>
                            <li>
                                <a href="javascript:;" class="username">爱ガ余音</a>
                                <div class="comment-time">2019-08-02 01:24</div>
                                <div class="comment-content">稀饭稀饭</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <span class="recommend-bottom">更多热门评论 ></span>
            </div>
            <div id="comment-14847235" class="comment">
                <a href="javascript:;" class="avatar">
                    <img src="//static.missevan.com/avatars/202006/25/df16272d5357bbcc4d8ae585f96b3937000407.jpg?x-oss-process=style/webp" alt="">
                </a>
                <div class="comment-body">
                    <a href="javascript:;" class="username">小池池吧</a>
                    <div class="comment-time">2 小时前</div>
                    <div class="comment-like">108</div>
                    <div class="comment-content">来啦来啦 我会更加努力的</div>
                </div>
            </div>
            <div class="download-client">
                <div class="btn-download-client">
                    下载客户端，查看更多评论
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from "../public/Loading";
import NoMessage from "../soundinfo/SoundImgs";
export default {
    data(){
        return {
            playerinfo: {},
            requesttime:true
        }
    },
    components: {
        "Loading": Loading,
        "NoMessage": NoMessage
    },
    mounted(){
        setTimeout(()=>{
            this.requesttime = false
        },1500)
    }
}
</script>

<style lang="stylus" scoped>
.comments-page
    position relative
    box-sizing border-box
    .comments
        .recommend-content
            .comment
                position relative
                margin 0.12rem 0
                padding 0 0.1rem 0 0.62rem
                font-size 0.14rem
                .avatar
                    border-radius 50%
                    position absolute
                    top 0 
                    left 0.1rem
                    width 0.4rem
                    height 0.4rem
                    >img 
                        width 100%
                        height 100%
                        border-radius 50%
                .comment-body
                    position relative
                    padding 0.03rem 0 0.12rem
                    .username
                        display inline-block
                        color #757575
                        font-size 0.12rem
                        vertical-align top
                        height 0.14rem
                        line-height 0.14rem
                    .comment-time
                        font-size 0.11rem
                        color #b3b3b3
                        height 0.14rem
                        line-height 0.14rem
                    .comment-like
                        display inline-block
                        position absolute
                        top 0.05rem
                        right 0
                        height 0.16rem
                        line-height 0.16rem
                        padding-left 0.2rem
                        font-size 0.11rem
                        color #757575
                        &:before
                            content ""
                            position absolute
                            top -0.01rem
                            left 0
                            width 0.16rem
                            height 0.16rem
                            background-image url(../../assets/images/sprite-icons.png)
                            background-position -2.55rem -0.18rem
                            background-size 2.81rem 2.62rem
                    .comment-content
                        padding-top 0.06rem
                        word-break break-all
                    .sub-comments
                        position relative
                        background-color #ededed
                        border-radius 0.06rem
                        padding 0.12rem
                        margin-top 0.1rem
                        >li
                            margin-bottom 0.1rem
                            .username
                                display inline-block
                                color #3d3d3d
                                font-size 0.12rem
                                vertical-align top
                                height 0.14rem
                                line-height 0.14rem
                            .comment-time
                                float right 
                                font-size 0.11rem
                                color #b3b3b3
                                height 0.14rem
                                line-height 0.14rem
                            .comment-content
                                color #757575
                                padding-top 0.06rem
                                word-break break-all
            .recommend-bottom
                color #c14a3f
                display block
                position relative
                height 0.2rem
                margin 0.2rem 0
                font-size 0.14rem
                text-align center
                &:before
                    left 0
                    content ""
                    display block
                    position absolute
                    top 0.09rem
                    width calc(50% - 0.6rem)
                    border-bottom 0.01rem solid #e0e0e0
                &:after
                    right 0
                    content ""
                    display block
                    position absolute
                    top 0.09rem
                    width calc(50% - 0.6rem)
                    border-bottom 0.01rem solid #e0e0e0
        .comment   
            position relative
            margin 0.12rem 0
            padding 0 0.1rem 0 0.62rem
            font-size 0.14rem
            .avatar
                border-radius 50%
                position absolute
                top 0 
                left 0.1rem
                width 0.4rem
                height 0.4rem
                >img 
                    width 100%
                    height 100%
                    border-radius 50%
            .comment-body
                position relative
                padding 0.03rem 0 0.12rem
                .username
                    display inline-block
                    color #757575
                    font-size 0.12rem
                    vertical-align top
                    height 0.14rem
                    line-height 0.14rem
                .comment-time
                    font-size 0.11rem
                    color #b3b3b3
                    height 0.14rem
                    line-height 0.14rem
                .comment-like
                    display inline-block
                    position absolute
                    top 0.05rem
                    right 0
                    height 0.16rem
                    line-height 0.16rem
                    padding-left 0.2rem
                    font-size 0.11rem
                    color #757575
                    &:before
                        content ""
                        position absolute
                        top -0.01rem
                        left 0
                        width 0.16rem
                        height 0.16rem
                        background-image url(../../assets/images/sprite-icons.png)
                        background-position -2.55rem -0.18rem
                        background-size 2.81rem 2.62rem
                .comment-content
                    padding-top 0.06rem
                    word-break break-all
        .download-client
            margin 0.28rem 0
            text-align center
            .btn-download-client
                height 0.32rem
                font-size 0.14rem
                line-height 0.18rem
                padding 0.06rem 0.18rem
                color #fff
                background-color #c14a3f
                border-color #c14a3f
                display inline-block
                position relative
                border 0.01rem solid transparent
                box-sizing border-box
</style>