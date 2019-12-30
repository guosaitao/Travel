<template>
  <div class="cityHeader">
    <div class="header">
      <router-link to="/">
        <div class="iconfont back_icon">&#xe624;</div>
      </router-link>城市选择
    </div>
  </div>
</template>
<script>
export default {
  name: "cityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.cityHeader {
  .header {
    overflow: hidden;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: $bgColor;

    .back_icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;
      text-align: center;
      font-size: 0.4rem;
      color: #fff;
    }
  }
}
</style>