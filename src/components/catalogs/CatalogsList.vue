<template>
    <div class="container">
        <div class="sub-header">{{this.$route.params.title}}</div>
        <div class="soundscatalog">
            <CatalogListFirst :id="this.$route.params.id"></CatalogListFirst>
            <div v-for="item in sonList" :key="item.id">
                <Cataloghead :headtitle="item.catalog_name" :more="'更多'"></Cataloghead>
                <Catalogbody :sonlistid="item.id"></Catalogbody>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
import Footer from "@/components/public/Footer";
import Cataloghead from "./Cataloghead";
import Catalogbody from "./Catalogbody";
import CatalogListFirst from "./CatalogListFirst";
export default {
    data(){
        return {
            sonList: []
        }
    },
    components:{
        "Cataloghead": Cataloghead,
        "Catalogbody": Catalogbody,
        "CatalogListFirst": CatalogListFirst,
        "Footer": Footer,
    },
    mounted(){
        this.$store.commit("updatenavflag",false);
        /* this.$axios(`/ajax/mobileWeb/catalogrank?cid=${this.$route.params.id}`).
        then(res=>{
            // console.log(res.data.info)
            this.firstUl = res.data.info;
        }) */
        this.$axios('/ajax/mobileWeb/catalogs').then(res=>{
            let arr = res.data.info;
            for(let item in arr){
                // console.log(arr[item])
                if(arr[item].id == this.$route.params.id){
                    let arr1 = Object.values(arr[item].son);
                    this.sonList = arr1;
                    console.log(this.sonList)
                }
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
.container
    padding-top 0.4rem
    .sub-header
        width 100%
        display block
        line-height 0.4rem
        background-color #fff
        color #000
        text-align center
        font-size 0.16rem
        border-bottom 0.01rem solid #e0e0e0
        position relative
        height 0.4rem
        top 0
        left 0
        right 0
</style>