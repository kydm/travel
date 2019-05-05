<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
  data: function () {
    return {
      weekendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必打卡',
        desc: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必打卡',
        desc: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必打卡',
        desc: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必打卡',
        desc: '中西合璧，现代和传统各有各的精彩'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    background-color: #eee
    line-height: .8rem
    text-indent: .2rem
  .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 37%
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
