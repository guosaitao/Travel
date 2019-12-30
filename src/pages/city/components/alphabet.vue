<template>
  <div class="list">
    <div class="item" 
        v-for="item of letter" 
        :key="item" 
        @click="changeClick"
        @touchstart="changeTouchStart"
        @touchmove="changeTouchMove"
        @touchend="changeTouchEnd"
        :ref="item"
    >{{item}}</div>
  </div>
</template>
<script>
import betterScroller from "better-scroll";
export default {
  name: "ListAlphabet",
  props: {
    citylist: Object
  },
  data() {
      return {
          touchstatus:false,
          startY:0,
          timer:null
      }
  },
  computed: {
      letter () {
          var letter=[]
          for(var i in this.citylist){
              letter.push(i)
          }
          return letter
      }
  },
  updated () {
      this.startY=this.$refs['A'][0].offsetTop
  },
  methods: {
      changeClick (e) {
          this.$emit("change",e.target.innerText)
      },
      changeTouchStart () {
          this.touchstatus=true
      },
      changeTouchMove (e) {
          if(this.touchstatus){
            var touchY=e.touches[0].clientY-79
            var index=Math.floor((touchY-this.startY)/20)
            if(index>= 0 && this.letter.length){
                this.$emit('change',this.letter[index])
            }
          }
      },
      changeTouchEnd () {
          this.touchstatus=false
      }
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.48rem;
  left: unset;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
    font-weight: bold;
  }
}
</style>