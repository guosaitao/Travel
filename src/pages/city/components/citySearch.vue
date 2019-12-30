<template>
  <div class="search">
    <input type="text" class="search_input" placeholder="请输入城市名称或拼音"/>
  </div>
</template>
<script>
export default {
  name: "citySearch"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search{
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search_input{
        height .62rem
        line-height .62rem
        width 100%
        border-radius .6rem
        text-align center
        color #666
        box-sizing border-box
        padding 0 .1rem
    }
}
</style>