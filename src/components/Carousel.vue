<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<template>
  <Swiper :modules="modules" :config="swiperOptions" :loop="true" :autoplay="{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }" :navigation="true">
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="" class="swiper-image">
    </SwiperSlide>

    <template #pagination>
      <div class="swiper-pagination" />
    </template>

    <template #button-next>
      <div class="swiper-button-next" />
    </template>

    <template #button-prev>
      <div class="swiper-button-prev" />
    </template>
  </Swiper>
</template>

<style scoped>
.swiper {
  height: 600px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
