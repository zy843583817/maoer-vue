<template>
    <div>
        <Searchcontent></Searchcontent>
        <Footer class="myfooter"></Footer>
    </div>
</template>

<script>
import Searchcontent from "@/components/search/Searchcontent.vue"
import Footer from "@/components/public/Footer.vue";
export default {
    components:{
        "Searchcontent": Searchcontent,
        "Footer": Footer,
    },
    mounted(){
        this.$store.commit("updatenavflag",false);
        this.$store.state.headcomponent = "header-search"
    },
}
</script>
<style lang="stylus" scoped>
.myfooter
    position fixed
    bottom 0 
</style>