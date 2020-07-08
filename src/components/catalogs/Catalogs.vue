<template>
    <div class="tab-content">
        <Loading v-if="cataloglist.length==0"></Loading>
        <div v-else class="catalogs">
            <a href="javascript:;" class="catalog" v-for="item in cataloglist" :key="item.id" @click="tocatalogs(item.id,item.title)">
                <span class="catalog-icon" :style="{'background-image': 'url('+item.pic+')'}"></span>
                <span class="catalog-title">{{item.title}}</span>
            </a>
        </div>
    </div>
</template>

<script>
import Loading from "../public/Loading"
export default {
    props:{
        cataloglist:Array
    },
    data(){
        return {
            catalogid: this.cataloglist.id,
        }
    },
    methods:{
        tocatalogs(itemid,itemtitle){
            this.$router.push({
                name: "catalog",
                params: {id:itemid,title:itemtitle}
            })
        }
    },
    components: {
        "Loading": Loading
    }
}
</script>

<style lang="stylus" scoped>
.tab-content
    position relative
    .catalogs
        display block
        padding 0.14rem
        .catalog
            display inline-block
            position relative
            width calc((100% - 0.2rem) /3)
            height 1.04rem
            margin 0 0.1rem 0.1rem 0
            border-radius 0.04rem
            background-color #fff
            box-shadow 0 0.01rem 0.01rem 0 rgba(0,0,0,.2)
            text-align center
            &:nth-of-type(3n) 
                margin-right 0
            .catalog-icon
                display block
                height 0.5rem
                width 0.5rem
                margin 0.15rem auto 0.08rem
                background-position 50%
                background-repeat no-repeat
                background-size 100%
            .catalog-title
                font-size 0.14rem
</style>