<template>
    <div id="panelsounds">
        <PanelHead :titleleft="titleleft" :title="title" :panelheadmore="panelheadmore" ></PanelHead>
        <PanelItem :arr="arr"></PanelItem>
    </div>
</template>

<script>
import PanelHead from "./PanelHead";
import PanelItem from "./PanelItem";
export default {
    props:{
        title:String,
        titleleft:String,
        otherSoundsList:Array,
        panelheadmore:String
    },
    data(){ 
        return {
            arr: [],
        }
    },
    components:{
        "PanelHead":PanelHead,
        "PanelItem":PanelItem
    },
    methods: {
         
    },
    mounted(){
        if(this.otherSoundsList){
            this.arr = this.otherSoundsList;
        }else{
            if(window.sessionStorage.getItem("firstsouondslist")){
                this.arr = JSON.parse(window.sessionStorage.getItem("firstsouondslist"));
            }else{
                //第一栏和banner数据
                this.$axios('/ajax/mobileWeb/newHomepage3').
                then(res=>{
                    let newArr = res.data.info.sound.splice(0,3);
                    this.arr = newArr; 
                    window.sessionStorage.setItem("firstsouondslist",JSON.stringify(newArr))
                })
            }
        }
       
    }

}
</script>

<style scoped>
    #panelsounds{margin: 0.1rem 0rem;padding: 0 0 0.16rem 0;}
</style>