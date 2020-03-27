<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/icons";
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons:HomeIcons,
    HomeRecommend:HomeRecommend,
    HomeWeekend:HomeWeekend
  },
  data () {
    return {
      lastcity:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed :{
    ...mapState(['city'])
  },
  methods: {
    getHomeDataMsg () {
      axios.get('/api/index.json?city='+this.city)
        .then(this.getHomeDataSuccess)
      },
      getHomeDataSuccess (res) {
        var data=res.data
        this.swiperList=data.data.swiperList
        this.iconList=data.data.iconList
        this.recommendList=data.data.recommendList
        this.weekendList=data.data.weekendList
      }
  },
  mounted () {
    console.log(this.$store)
    this.lastcity=this.city
    this.getHomeDataMsg()
  },
  activated () {//页面重新加载
    if(this.lastcity!=this.city){
      this.lastcity=this.city
      this.getHomeDataMsg()
    }
  }
};
</script>

<style>
</style>