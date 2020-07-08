<template>
  <div class="loading-content">
    <div class="loading"></div>
    <div class="loading-text">正在加载中...</div> 
  </div>
</template>

<style lang="stylus" scoped>
.loading-content
    flex 1
    flex-direction column
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    .loading
        margin 0 auto
        width 1rem
        height 1rem
        background url('https://static.missevan.com/mimages/201603/29/f6b4a63596f56f2bc77d4fb467cab85c160911.gif')
        background-size cover
        align-self center
    .loading-text
        margin-top 0.3rem
</style>