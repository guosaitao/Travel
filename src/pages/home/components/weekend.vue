<template>
  <div class="hot">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item_img">
          <img
            :src="item.imgUrl"
          />
        </div>
        <div class="item_info">
          <p class="item_title">{{item.title}}</p>
          <p class="item_desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props:{
      list:Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.hot {
  .title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2em;
  }

  .item {
    overflow: hidden;
    .item_img {
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
    } 
  }
}
</style>