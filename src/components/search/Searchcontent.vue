<template>
    <div class="searchPage">
        <Loading v-if="tagList.length==0"></Loading>
        <div v-else>
            <div class="search-header">
                热门搜索
            </div>
            <div class="search-content">
                <span class="search-tag" v-for="(item,index) in tagList" :key="index" @click="showMsg">
                    {{item.key}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from "../public/Loading";
import { Toast } from 'vant';
export default {
    data(){
        return {
            tagList: []
        }
    },
    methods:{
        showMsg(){
            Toast('还在努力开发中，客官等等再来吧 ~ o(∩_∩)o ')
        }
    },
    mounted(){
        this.$axios('/ajax/mobileWeb/hotsearch').
        then(res=>{
            this.tagList = res.data.info
        })
    },
    components:{
        "Loading": Loading
    }
}
</script>
<style lang="stylus" scoped>
    .searchPage
        display block
        position relative
        height 100%
        width 100%
        .search-header
            display block
            position relative
            left 0
            top 0
            right 0
            height 0.2rem
            padding 0.1rem
            font-size 0.14rem
            color #424242
            &:after
                content ""
                display block
                position absolute
                bottom 0
                left 0
                right 0
                margin 0 0.1rem
                border-bottom 0.01rem solid #e0e0e0
        .search-content
            padding 0.1rem
            display block
            position relative
            top 0
            left 0
            bottom 0
            right 0
            .search-tag
                display inline-block
                position relative
                padding 0.04rem 0.1rem
                margin 0.05rem 0.06rem
                color #9e9e9e
                border 0.01rem solid  #9e9e9e
                border-radius 0.2rem
                background-color #fff
                font-size 0.12rem
</style>