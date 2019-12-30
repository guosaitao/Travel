<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiperList">
      <swiper-slide class="swiper-slide" v-for="item of list" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
      list:Array
  },
  data () {
    return {
      swiperOption: {
          speed:3000,
          autoplay:2000,
          loop:true,
          pagination:'.swiper-pagination'
      }
    };
  },
  computed: {
      showSwiperList () {
          return this.list.length
      }
  },
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff
.wrapper
    .swiper-img {
        width: 100%;
    }
</style>