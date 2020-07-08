<template>
    <div>
        <div class="headertop">
            <div class="headertop-action">
                <div class="search-input">
                    <span></span>
                    <input type="search">
                </div>
                <span class="btn-text" @click="cancel">取消</span>
                <i class="menu" @click="showmenu"></i>
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
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        cancel(){
            this.$router.back();
        },
        showmenu(){
            this.isShow = !this.isShow;
        }
    },
    components:{
        "my-menu": Mine
    },
  
}
</script>

<style scoped>
    .headertop{height: 0.4rem;padding: 0.1rem;width: 3.75rem;background-color: #000;display: flex;justify-content: space-between; align-items: center;line-height: 0.2rem;box-sizing: border-box;}
    .headertop i{display: inline-block;}
    .headertop .headertop-action{width: 100%;height: 0.2rem;display: flex;justify-content: flex-end;align-items: center;}
    .headertop .headertop-action .search-input{display: inline-block;flex: 1 1 auto;}
    .headertop .headertop-action .search-input>span{display: block;position: absolute;top: 0.13rem;left: 0.17rem;width: 0.14rem;height: 0.14rem;background-image: url(../../assets/images/sprite-icons.png);background-position: -2.55rem -1.57rem;background-size: 2.81rem 2.62rem;opacity: .3;}
    .headertop .headertop-action .search-input>input{padding-left: 0.3rem;margin: 0;width: 100%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;height: 0.3rem;background-color: #fff;color: #000;border: none;border-radius: 0.02rem;}
    .headertop .headertop-action .btn-text{display: inline-block;color: #fff;margin: 0 0.15rem; flex: 0 1 auto;font-size: 0.14rem;border: none;}
    .headertop .headertop-action .menu{width: 0.22rem;height: 0.2rem;background-image: url(../../assets/images/sprite-icons.png);background-size: 2.81rem 2.62rem;background-position: -0.24rem -2.24rem;}
</style>