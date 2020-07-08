<template>
    <div id="body">
        <a href="javascript:;" class="body-sound" v-for="item in arr" :key="item.id"  @click="toSound(item.id)">
            <div class="cover-wrap" >
                <img :src="item.front_cover" alt="">
            </div>
            <div class="title" >
                {{item.soundstr}}
            </div>
            <div class="detail" >
                <span class="item-playtimes">{{item.view_count|countFilter}}</span>
                <span class="item-comments">{{item.all_comments|countFilter}}</span>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        toSound(soundid){
            this.$router.push({name:"soundintroduce",params:{soundid:soundid}})
        }
    },
    props:{
        arr: Array 
    },
    filters:{
        countFilter(value){
            return parseInt(value)>9999? (Math.floor(parseInt(value)/1000)/10) + '万': value 
        },
    }
    
}
</script>

<style scoped>
#body{overflow-x: auto;min-height: 1.7rem;display: flex;justify-content: space-around;align-items: center;margin: 0 0.14rem;}
#body>a{width: 1.06rem;height: 1.63rem;display: inline-block;margin: 0.05rem 0;}
#body>a>.cover-wrap{position: relative;}
#body>a>.cover-wrap img{position: relative;height: 1.06rem;height: 1.06rem;overflow: hidden;border-radius: 0.04rem;background-repeat: no-repeat;background-position: 50%;background-size: 100%;}
#body>a>.title{width: 100%;height: 0.36rem;word-break: break-all;text-overflow: ellipsis;overflow: hidden;line-height: 0.18rem;font-size: 0.13rem;margin: 0.04rem 0;line-clamp: 2;color: #616161;}
#body>a>.detail{display: flex;justify-content: space-between;-webkit-box-pack: justify;}
#body>a>.detail span{position: relative;padding-left: 0.14rem;font-size: 0.11rem;line-height: 0.11rem;color: #bdbdbd;}
#body>a>.detail .item-playtimes::before{background-image:  url(../../assets/images/sprite-icons-body.png);background-size: 0.7rem 0.55rem;background-position: -0.58rem 0;content: "";display: block;position: absolute;left: 0;width: 0.12rem;height: 0.1rem;}
#body>a>.detail .item-comments::before{content: "";display:inline-block;position: absolute;left: 0;width: 0.12rem;height: 0.1rem;background-image: url(../../assets/images/sprite-icons-body.png);background-size: 0.7rem 0.55rem;background-position: -0.44rem -0.27rem;}
</style>