<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hostlist" :key="item.id" @click="cityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div v-for="(value,key,index) in citylist" :key="index" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list" v-for="city of value" :key="city.id" @click="cityClick(city.name)">
            <div class="item border-bottom">{{city.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListAlphabet from './alphabet'
import betterScroller from 'better-scroll'
import {mapState} from 'vuex'
export default {
  name: "cityList",
  components:{
    ListAlphabet
  },
  props: {
    hostlist: Array,
    citylist:Object,
    changeLetter:String
  },
  computed:{
    ...mapState({
      countCity:'city'
    })
  },
  methods:{
    cityClick (city) {
      this.$store.commit("changeCity",city)
      this.$router.push('/')
    },
    
  },
  mounted () {
    this.scroll=new betterScroller(this.$refs.wrapper);
  },
  watch: {
    changeLetter () {
      if(this.changeLetter){
        this.scroll.scrollToElement(this.$refs[this.changeLetter][0])
      }
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>