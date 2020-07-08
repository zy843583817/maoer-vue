<template>
    <div>
        <div>
            <myalbumslist></myalbumslist>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script>
import Footer from "@/components/public/Footer.vue";
import AlbumsList from "@/components/albums/AlbumsList.vue";
export default {
    components:{
        "myfooter": Footer,
        "myalbumslist": AlbumsList
    },
    mounted(){
        this.$store.state.headcomponent = "header-top";
        this.$store.commit("updatenavflag",true);
    }
}
</script>