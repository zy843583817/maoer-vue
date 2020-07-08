<template>
    <div class="soundplayer">
        <div class="cover" :style="{backgroundImage:'url('+playerinfo.mosaic_url+')'}">
            <div class="record-disk">
                <Loading v-if="Object.keys(playerinfo)==''"></Loading>
                <div v-else class="disk-cover" :style="{backgroundImage:'url('+playerinfo.front_cover+')'}"></div>
            </div>
        </div>
        <audio ref="audioPlayer" preload="auto" id="audioPlayer" :src="playerinfo.soundurl"></audio>
        <div class="controller">
            <div class="btn-icon btn-play" @click="playAudio" v-show="!isPlay"></div>  
            <div class="btn-icon btn-pause" @click="pauseAudio" v-show="isPlay"></div>
        </div>
        <van-slider class="slider" bar-height="0.02rem" v-model="audioTime" @change="onChange">
            <template #button>
                <div class="custom-button"></div>
            </template>
        </van-slider>
        <div class="sound-time">
            <span class="played-time">{{audioCurrentTime| timeFilter}}</span>
            <span class="duration">{{playerinfo.duration||0 | timeFilter}}</span>
        </div>
    </div>
</template>
<script>
import Loading from "../public/Loading"
import { Toast , Slider } from 'vant';
let audioInterval;      //声明一个全局定时器对象
export default {
    data(){
        return {
            soundid:'',
            playerinfo: {},
            audioTime:0,       //音频进度百分比
            audioCurrentTime:0,       //音频当前播放时间
            audioAllTime:0,       //音频总播放时间
            audioAllDuration:0,       //音频总播放秒数
            isPlay:false,       //是否正在播放
        }
    },
    methods:{
        setAudioInterval(){
            audioInterval = setInterval(() => {
                this.getAudioTime();
                let audioPlayer = this.$refs.audioPlayer;
                if(audioPlayer.ended){  //播放结束重置数据
                    clearInterval(audioInterval);
                    this.audioTime = 0;
                    audioPlayer.currentTime = 0;
                    this.audioCurrentTime = 0;
                    this.isPlay == false;
                }
                audioPlayer.paused?this.isPlay=false:this.isPlay=true;
            }, 500);
        },
        playAudio(){
            // this.ifpause = !this.ifpause;
            clearInterval(audioInterval);
            this.getAudioTime();
            this.setAudioInterval();
            this.$refs.audioPlayer.play()
            this.isPlay = true;
        },
        pauseAudio(){
            this.$refs.audioPlayer.pause();
            this.isPlay = false;
        },
        getAudioTime(){ //获取播放时间
            let audioPlayer = this.$refs.audioPlayer;
            this.audioAllTime = audioPlayer.duration;
            this.audioAllDuration = audioPlayer.duration;
            this.audioCurrentTime = audioPlayer.currentTime*1000;
            this.audioTime = (audioPlayer.currentTime*100/audioPlayer.duration)
        },
        onChange(value){        //滑动进度条设置播放时间
            let audioPlayer = this.$refs.audioPlayer;
            this.audioCurrentTime = this.audioAllDuration*value/100
            audioPlayer.currentTime = parseInt(this.audioAllDuration*value/100)
        }
    },
    mounted(){
        this.$bus.$on("getplayerinfo",(playerinfo)=>{
            this.playerinfo = playerinfo;
        })
    },
    created(){
        this.$bus.$on("getintroducesoundid",(soundid)=>{
            this.soundid = soundid;
        })
        this.$bus.$on("getplayerinfo",(playerinfo)=>{
            if(playerinfo){
                this.playerinfo = playerinfo
            }else{
                Toast('数据异常...')
            }
        })
    },
    components: {
        "Loading": Loading,
        "van-slider": Slider
    },
    filters:{
        timeFilter(value){
            let m=new Date(value)
            return m.getMinutes()+":"+(m.getSeconds()<10?'0'+m.getSeconds():m.getSeconds())
        }
    },
}
</script>

<style lang="stylus" scoped>
.soundplayer
    position relative
    height 3.25rem
    overflow hidden
    .cover
        background-image url(../../assets/images/soundbg.jpg)
        display block
        height 3.25rem
        width 100%
        position absolute
        top 0
        z-index 0
        background-size cover
        background-position 50%
        .record-disk
            z-index 1
            position absolute
            top 0.3rem
            left 0
            right 0
            height 2.2rem
            text-align center
            .disk-cover
                width 2.2rem
                height 2.2rem
                margin 0 auto
                border-radius 50%
                border 0.01rem solid rgba(0,0,0,.3)
                background-size cover 
                background-position 50%
                background-repeat no-repeat
    .controller
        position absolute
        z-index 5
        width 0.48rem
        height 0.3rem
        right 0.1rem
        bottom 0.2rem
        background-color hsla(0,0%,84%,.4)
        box-shadow 0 0 0.05rem 0 rgba(0,0,0,.4)
        border-radius 0.08rem
        cursor pointer
        text-align center
        transition bottom .5s ease
        .btn-icon,.btn-play
            background-image url(../../assets/images/playericon.png)
            background-size 1.2rem 1.02rem
            margin-left 0.01rem
            background-position -0.75rem 0
            display inline-block
            width 0.28rem
            height 0.28rem
            margin-top 0.01rem
            background-repeat no-repeat
        .btn-pause
            background-image url(../../assets/images/playericon.png)
            background-size 1.2rem 1.02rem
            margin-left 0.01rem
            background-position -0.75rem -0.3rem
            display inline-block
            width 0.28rem
            height 0.28rem
            margin-top 0.01rem
            background-repeat no-repeat
    .slider
        position absolute
        bottom 0.01rem
        z-index 10
    .sound-time
        position absolute
        bottom 0px
        left 0
        width 3.65rem
        font-size 0.09rem
        height 0.12rem
        color #fff
        line-height 0.12rem
        padding 0.01rem 0.05rem
        pointer-events none
        .duration
            float right
            margin-right 0.06rem

</style>