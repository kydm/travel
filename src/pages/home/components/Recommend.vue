<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    background-color: #eee
    line-height: .8rem
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: 0.1rem
    .item-info
      flex: 1
      padding: .1rem
      overflow: hidden
      .item-title
        margin-top: .05rem
        line-height: .54rem
        font-size: .32rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .item-desc
        margin-top: .05rem
        line-height: .4rem
        color: #aaa
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .item-btn
        margin-top: .2rem
        height: .4rem
        line-height: .4rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        font-size: .2rem
        color: #fff
</style>
