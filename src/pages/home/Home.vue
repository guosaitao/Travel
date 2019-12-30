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
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeDataMsg () {
      axios.get('/api/index.json')
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
    this.getHomeDataMsg()
  },
};
</script>

<style>
</style>