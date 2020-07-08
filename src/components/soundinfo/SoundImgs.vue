<template>
    <div class="tab-content">
        <table class="image-table">
            <tbody>
                没有请求到数据~~(ง •̀_•́)ง<slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
    mounted(){
        Toast("请求不到数据...");
    }
}
</script>

<style lang="stylus" scoped>
    .tab-content
        height 0.8rem 
        padding 0.12rem 0
        position relative
        background-image url(../../assets/images/404source.png)
        background-size  1.5rem 1rem
        background-repeat  no-repeat
        background-position 50%
        .image-table
            width 100%
            tbody
                width 100%
                text-align center
                font-size 0.14rem
                display block
                color #757575
                position absolute
                top 0
                left 0 
                right 0
                
</style>