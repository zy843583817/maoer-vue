<template>
    <div>
        <ul class="tab-list">
            <li class="list-item">
                <a href="javascript:;" :class="{active:isActiveIntroduce}" @click.stop="clickIntroduce ">简介</a>
            </li>
            <li class="list-item">
                <a href="javascript:;" :class="{active:isActiveComments}"  @click.stop="clickComments">评论 ({{comments_num}})</a>
            </li>
            <li class="list-item">
                <a href="javascript:;" :class="{active:isActiveImgs}"  @click.stop="clickImgs">图片</a>
            </li>
        </ul>
        <router-view />
    </div>
</template>

<script>
export default {
    data(){
        return {
            isActiveIntroduce: true,
            isActiveComments: false,
            isActiveImgs: false,
            soundid: '',
            comments_num: ''
        }
    },
    methods: {
        clickIntroduce(){
            this.isActiveIntroduce = true;
            this.isActiveComments = false;
            this.isActiveImgs = false;
            this.$router.push({name:"soundintroduce",params:{soundid:this.soundid}})
        },
        clickComments(){
            this.isActiveIntroduce = false;
            this.isActiveComments = true;
            this.isActiveImgs = false;
            this.$router.push({name:"soundcomments",params:{soundid:this.soundid}})
        },
        clickImgs(){
            this.isActiveIntroduce = false;
            this.isActiveComments = false;
            this.isActiveImgs = true;
            this.$router.push({name:"soundimgs",params:{soundid:this.soundid}})
        }
    },
    beforeCreate(){
        this.$bus.$on("getintroducesoundid",(soundid)=>{
            this.soundid = soundid;
        }),
        this.$bus.$on("getcomments_num",(comments_num)=>{
            this.comments_num = comments_num
        })
    }
}
</script>

<style lang="stylus" scoped>
    .tab-list
        display flex
        position relative
        height 0.4rem
        line-height 0.4rem
        box-sizing border-box
        justify-content space-between
        font-size 0.12rem
        margin 0.06rem 0
        overflow-x scroll
        overflow-y hidden
        .list-item
            >a
                display block
                width 100%
                height 0.38rem
                &:after
                    content ""
                    width 0.74rem
                    height 0.03rem
                    display block
                    background-color transparent
                    position absolute
                    bottom  0
                    left 50%
                    transform translateX(-50%)
                &.active:after
                    background-color #c14a3f
                &.active
                    color #c14a3f
            transition color .2s ease,border-color .2s ease;
            position relative
            display inline-block
            text-align center
            flex 1 0 auto
            z-index 0
            &:before
                content ""
                display block
                position absolute
                top 0.1rem
                left 0
                border-left 0.01rem solid #e0e0e0
                height 0.18rem
            &:nth-of-type(1):before
                display none
                
</style>