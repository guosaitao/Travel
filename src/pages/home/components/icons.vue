<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon_img">
            <img class="icon_img_content" :src="item.imgUrl" />
            <p class="icon_desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
      list:Array
  },
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    }
  },
  computed: {
    pages: function() {
        console.log(this.list)
      var pages = [];
      this.list.forEach(function(item, index) {
        var page = Math.floor(index / 8); //页码
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.icons {
  width: 100%;
  overflow: hidden;
  padding-bottom: 4%;
  padding-top 4%
  .swiper-container {
    overflow: initial;

    .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;

      .icon_img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;

        .icon_img_content {
          height: 100%;
          margin: 0 auto;
          display: block;
        }
      }
    }
    .swiper-pagination{
        bottom -10px
    }
  }

  .icon_desc {
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: $darkTextColor;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>