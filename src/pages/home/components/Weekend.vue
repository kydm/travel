<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    background-color: #eee
    line-height: .8rem
    text-indent: .2rem
  .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 38.13%
      .item-img
        width: 100%
  .item-info
    padding: .1rem
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
</style>
