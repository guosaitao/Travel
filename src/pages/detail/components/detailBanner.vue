<template>
  <div>
    <div class="banner">
      <img class="banner-img" :src="bannerimg" @click="clickBanner" />
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{bannernum}}
        </div>
      </div>
    </div>
    <fade-animation>
      <detail-gallary :gallaryImgs="gallaryImgs" v-show="isShowGallary" @close="closeGallary"></detail-gallary>
    </fade-animation>
  </div>
</template>
<script>
import detailGallary from "../../../comment/gallary/Gallary.vue";
import fadeAnimation from "../../../comment/fade/fadeAnimation.vue";
export default {
  name: "detailBanner",
  components: {
    detailGallary,
    fadeAnimation
  },
  props: {
    bannerimg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data() {
    return {
      bannernum: 0,
      isShowGallary: false
    };
  },
  methods: {
    clickBanner() {
      this.isShowGallary = true;
    },
    closeGallary() {
      this.isShowGallary = false;
    }
  },
  mounted() {
    this.bannernum = this.gallaryImgs.length;
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>