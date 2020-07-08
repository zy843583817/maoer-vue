<template>
    <div class="tags-home" @touchmove.prevent>
        <div class="tags-header">
            <span class="cancel" @click="hideTypeMenu">取消</span>
            类型选择
        </div>
        <div class="tags-row">
            <span class="all">全部音单</span>
        </div>
        <div class="tags-row ">
            <div class="tag-type first">情感</div>
            <div class="tag-content">
                <span class="tag-item">热血</span>
                <span class="tag-item">治愈</span>
                <span class="tag-item">抖腿</span>
            </div>
        </div>
        <div class="tags-row ">
            <div class="tag-type second">场景</div>
            <div class="tag-content">
                <span class="tag-item">玩游戏</span>
                <span class="tag-item">运动听</span>
                <span class="tag-item">作业向</span>
            </div>
        </div>
        <div class="tags-row ">
            <div class="tag-type third">主题</div>
            <div class="tag-content">
                <span class="tag-item">OP</span>
                <span class="tag-item">ED</span>
                <span class="tag-item">翻唱</span>
                <span class="tag-item">古风</span>
                <span class="tag-item">同人音乐</span>
                <span class="tag-item">游戏原声</span>
                <span class="tag-item">广播剧</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        hideTypeMenu(){
            this.$store.commit("updateAlbumtype",false)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .tags-home
        background-color #f5f5f5
        z-index 10
        padding-top 0.4rem
        overflow auto
        position relative
        height 31.29rem
        width 100%
        .tags-header
            position absolute
            top 0
            right 0
            left 0
            height 0.4rem
            text-align center
            font-size 0.16rem
            line-height 0.4rem
            color #262626
            background-color white
            .cancel
                display block
                position absolute
                color #9e9e9e
                left 0.1rem
        .tags-row
            width 100%
            display block
            position relative
            margin 0 0 0.1rem
            background-color #fff
            color #3d3d3d
            font-size 0.14rem
            overflow hidden
            .all
                width 50%
                margin 0.06rem auto
                width calc(100% - 0.2rem)
                border-color #3d3d3d
                font-weight 700
                position relative
                display block
                height 0.46rem
                line-height 0.46rem
                text-align center
                box-sizing border-box
                border 0.01rem solid #e1e1e1
            .tag-content
                width  2.75rem
                float right 
                .tag-item
                    width 50%
                    float left 
                    border-color #3d3d3d
                    position relative
                    display block
                    height 0.46rem
                    line-height 0.46rem
                    text-align center
                    box-sizing border-box
                    border 0.01rem solid #e1e1e1
            .tag-type
                float left
                display block
                position absolute
                width 1rem
                height 100%
                left 0
                color #757575
                font-size 0.16rem
                text-align center
                padding-top 0.15rem
                &.first:before
                    content ""
                    display block
                    margin 0 auto
                    width 0.36rem
                    height 0.36rem
                    background url(../../assets/images/sprite-icons.png)
                    background-size 2.81rem 2.62rem
                    background-position -0.37rem -1.08rem
                &.second:before
                    content ""
                    display block
                    margin 0 auto
                    width 0.36rem
                    height 0.36rem
                    background url(../../assets/images/sprite-icons.png)
                    background-size 2.81rem 2.62rem
                    background-position -1.13rem -1.08rem
                &.third:before
                    content ""
                    display block
                    margin 0 auto
                    width 0.36rem
                    height 0.36rem
                    background url(../../assets/images/sprite-icons.png)
                    background-size 2.81rem 2.62rem
                    background-position -0.75rem -1.08rem

</style>