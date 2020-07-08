<template>
    <div id="head">
        <div class="head-title">
            <i></i>{{titleleft}}
        </div>
        <a class="head-rank" href="javascript:;" @click="toCatalogList(panelheadmore,titleleft)" v-if="title!=''">
            {{title}}
        </a>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        titleleft:String,
        panelheadmore:String
    },
    methods:{
        toCatalogList(catalogListid,titleleft){
            this.$router.push({name:'catalog',params:{id:catalogListid, title:titleleft}});
        }
    }
}
</script>
<style scoped>
    #head{height: 0.4rem;padding: 0 0.14rem;display: flex;justify-content: space-between;}
    #head .head-title{width: 1rem;height: 0.4rem;font-size: 0.16rem;text-align: left;}
    #head .head-title i{width: 0.26rem;height: 0.26rem;background-size: 1.66rem 1.66rem;background-image: url(../../assets/images/sprite-icons-panel.png);background-position: -0.28rem 0rem;position: relative;top: 0.07rem;}
    #head .head-rank{font-size: 0.13rem;width: 0.62rem;height: 0.4rem;text-align: right;color: #9e9e9e;display: block;line-height: 0.4rem;}
    #head .head-rank::after{content: ""; width: 0.18rem;height: 0.18rem;display: inline-block;background-image: url(../../assets/images/sprite-icons.png);background-size: 2.81rem 2.62rem;background-position: -1.8rem -2.24rem;position: relative; top: 0.05rem;right: -0.03rem;}
</style>