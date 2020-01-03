<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back_icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.countcity}}
        <span class="iconfont arrow_icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed :{
    ...mapState ({
      countcity:'city'
    })
  }
};
</script>

<style lang="stylus" scoped>
// 1rem=50px
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
    .back_icon {
        font-size 0.4rem
        text-align center
    }
  }

  .header-right {
    min-width: 1.04rem;
    padding : 0 .1rem;
    float: right;
    text-align: center;
    color #fff
    .arrow_icon{
        font-size .24rem
        margin-left -.04rem
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    color: #ccc;
    height: 0.64rem;
    line-height: 0.64rem;
    padding-left .15rem
  }
}
</style>