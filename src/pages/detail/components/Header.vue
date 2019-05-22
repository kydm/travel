<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 150
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle.opacity = opacity
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    height: .8rem
    width: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    font-size: .32rem
    color: #fff
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align center
      font-size .4rem
      color: #fff
</style>
