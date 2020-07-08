<template>
    <div>
        <div class="headertop">
            <div class="">
                <a href="/"><i class="headertop-logo"></i></a>
                <div class="headertop-action">
                    <a href="#/search" @click="changeTag"><i class="search"></i></a>
                    <i class="menu" @click="showmenu"></i>
                </div>
            </div>
        </div>
        <transition enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
            <my-menu v-show="isShow"></my-menu>
        </transition>
    </div>
</template>

<script>
import Mine from "@/components/mine/Mine.vue";
import "@/assets/animation.css"
export default {
    methods:{
        changeTag(){
            this.$store.state.headcomponent = "header-search"
        },
        showmenu(){
            this.isShow = !this.isShow
        }
    },
    data(){
        return {
            isShow:false
        }
    },
    components:{
        "my-menu": Mine
    }
}
</script>

<style scoped>
    .headertop{height: 0.4rem;padding: 0.1rem;width: 3.75rem;background-color: #000;box-sizing: border-box; position: fixed;z-index: 99;}
    .headertop a,i{display: inline-block;}
    .headertop .headertop-logo{ float:left; width: 1.02rem;height:0.2rem;background-image: url(../../assets/images/logo.png);background-size: 100% 100%;}
    .headertop .headertop-action{width: 0.84rem;height: 0.2rem;float: right;}
    .headertop .headertop-action>a{width: 0.62rem;height: 0.2rem;display: inline-block;}
    .headertop .headertop-action i.search{width: 0.22rem;height: 0.2rem;margin: 0 0.2rem;background-image: url(../../assets/images/sprite-icons.png);background-size: 2.81rem 2.62rem;background-position: -0.48rem -2.24rem;}
    .headertop .headertop-action .menu{width: 0.22rem;height: 0.2rem;background-image: url(../../assets/images/sprite-icons.png);background-size: 2.81rem 2.62rem;background-position: -0.24rem -2.24rem;}
</style>
