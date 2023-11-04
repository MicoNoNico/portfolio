<script>
import { Icon } from '@iconify/vue'
const router = useRouter()
export default defineComponent ({
  components: {
    Icon,
  },
  props: {
    projectData: Object,
  },
  methods: {
    go() {
      this.$router.push(this.projectData.link)
      window.scrollTo(0, 0)
    },
  },
})
</script>

<template>
  <div class="popup cursor-pointer" @click="go">
    <figure class="home-image">
      <img class="rounded-2xl" :src="projectData.imageSrc" alt="Card background">
    </figure>
    <div class="popup-container bg-dark-200 rounded-2xl column-outline shadow-dark-900 shadow-md">
      <h1 class="home-title text-light-900">
        {{ projectData.cardTitle }}
      </h1>
      <h2 class="home-subtitle text-light-900">
        {{ projectData.cardYear }}
      </h2>
      <h2 class="home-subtitle text-light-900">
        {{ projectData.cardSubtitle }}
      </h2>
      <div class="text-dark-900">
        <div v-for="item in projectData.typeTag" :key="item" class="tag-text tag-type px-2" style="display: inline-block; bottom: 0;">
          <Icon icon="bxs:tag" rotate="180deg" width="15" target="_blank" color="white" class="display-inline" />
          {{ item }}
        </div>
        <div v-for="item in projectData.designTag" :key="item" class="tag-text tag-design px-2" style="display: inline-block; bottom: 0;">
          <Icon icon="bxs:tag" rotate="180deg" width="15" target="_blank" color="white" class="display-inline" />
          {{ item }}
        </div>
        <div v-for="item in projectData.artTag" :key="item" class="tag-text tag-art px-2" style="display: inline-block; bottom: 0;">
          <Icon icon="bxs:tag" rotate="180deg" width="15" target="_blank" color="white" class="display-inline" />
          {{ item }}
        </div>
        <div v-for="item in projectData.programmingTag" :key="item" class="tag-text tag-programming px-2" style="display: inline-block; bottom: 0;">
          <Icon icon="bxs:tag" rotate="180deg" width="15" target="_blank" color="white" class="display-inline" />
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
