<template>
  <div class="container" @click="handleGallaryClick" @touchmove.prevent @mousewheel.prevent>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.imgs.length
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: visible
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -2rem
</style>
