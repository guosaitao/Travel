<template>
  <div class="hot">
    <div class="title">热销服务</div>
    <ul>
      <router-link tag="li" :to="'/detail/'+item.id" class="item" v-for="item of list" :key="item.id">
        <div class="item_img">
          <img
            :src="item.imgUrl"
          />
        </div>
        <div class="item_info">
            <p class="item_title">{{item.title}}</p>
            <p class="item_desc">{{item.desc}}</p>
            <button class="item_button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props:{
    list:Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.hot {
  .title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2em;
  }

  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;

    .item_img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;

      img {
        width: 100%;
      }
    }

    .item_info {
      flex 1
      padding 0.1rem
      .item_title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
      }
      .item_desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
      }
      .item_button {
        background: #ff9300;
        padding: 0 0.22rem;
        border-radius: 0.06rem;
        margin-top: 0.16rem;
        line-height: 0.44rem;
        color #fff
      }
    } 
  }
}
</style>