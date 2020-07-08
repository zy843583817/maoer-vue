<template>
    <div class="container">
        <div class="soundpage">
            <SoundPlayer></SoundPlayer>
            <SoundAction></SoundAction>
            <SoundTab></SoundTab>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import SoundPlayer from "./SoundPlayer";
import SoundAction from "./SoundAction";
import SoundTab from "./SoundTab";
import Footer from "../public/Footer";
export default {
    components:{
        "SoundPlayer": SoundPlayer,
        "SoundAction": SoundAction,
        "SoundTab": SoundTab,
        "Footer": Footer,
    },
    mounted(){
        this.$store.commit("updatenavflag",false);
        this.$store.state.headcomponent = "header-top";
    }
}
</script>
<style lang="stylus" scoped>
.container
    max-width 100vw
    display block
    min-height calc(100vh - 0.7rem)
    padding-top 0.4rem
    .soundpage
        position relative
        width 100%
        height 100%
</style>