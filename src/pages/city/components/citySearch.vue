<template>
<div>
    <div class="search">
      <input v-model="keyword" type="text" class="search_input" placeholder="请输入城市名称或拼音"/>
    </div>
    <div class="search_content" ref="wrapper" v-show="keyword"> 
      <ul>
        <li class="search_item border-bottom" v-for="item of list" :key="item.id" @click="cityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search_item no_data" v-show="isShowNoData">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
</div>
</template>
<script>
import Bgscroll from 'better-scroll'
export default {
  name: "citySearch",
  props:{
    citylist:Object
  },
  data () {
    return {
      keyword:"",
      list:[],
      timer:null
    }
  },
  mounted () {
    this.scroll=new Bgscroll(this.$refs.wrapper)
  },
  watch:{
    keyword () {
      if(!this.keyword){
        this.list=[]
        return
      }
      var result=[]
        for (var i in this.citylist){
          for(var j in this.citylist[i]){
            if(this.citylist[i][j].spell.indexOf(this.keyword)>-1 || this.citylist[i][j].name.indexOf(this.keyword)>-1){
              result.push(this.citylist[i][j])
            }
          }
        }
        this.list=result
    }
  },
  methods:{
    cityClick (city) {
      this.$store.commit("changeCity",city)
      this.$router.push('/')
    }
  },
  computed:{
    isShowNoData () {
      return !this.list.length
    }
  }
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
.search_content{
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  z-index 1
  overflow hidden
  background #eee
  .search_item{
    line-height .62rem
    background #ffffff
    padding-left .2rem
    color #666
  }
  .no_data{
    text-align center
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #fff
    padding-top 50%
    font-weight bold
    font-size .32rem
  }
}
</style>