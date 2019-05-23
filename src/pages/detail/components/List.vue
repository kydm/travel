<template>
  <div>
    <div class="item border-bottom" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    position: relative
    height: .8rem
    line-height: .8rem
    font-size: .32rem
    .item-icon
      position: relative
      top: .08rem
      left: .1rem
      display: inline-block;
      width: .36rem;
      height: .36rem;
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
  .item-children
    padding: 0 .2rem
</style>
