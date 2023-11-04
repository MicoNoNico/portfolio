<script>
import { Icon } from '@iconify/vue'
import json from '../json/projects.json'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      myJson: json,
    }
  },
  methods: {
    scrollToProjects() {
      const target = this.$refs.projectsDiv
      const top = target.offsetTop
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    },
  },

}
</script>

<template>
  <div class="w-full h-screen flex bg-transparent is-hidden-touch locked-div">
    <div class="m-auto">
      <div class="z-10 absolute left-0 w-full">
        <h1 class="title is-1 text-light-900 mx-5">
          A showcase of my past and ongoing projects
        </h1>
      </div>
      <video class="w-full absolute left-0 top-20 opacity-40" autoplay muted loop>
        <source src="/Portfolio_Demo.mp4">
      </video>
      <button class="scroll-arrow-container cursor-pointer" @click="scrollToProjects">
        <div class="icon-wrapper">
          <Icon icon="mdi-arrow-down" target="_blank" width="60" color="white" class="display-inline m-5" />
        </div>
      </button>
    </div>
  </div>

  <div class="w-full flex is-hidden-desktop my-15">
    <div class="z-10 absolute w-full">
      <h1 class="home-title text-light-900 mt-30 is-hidden-tablet">
        A showcase of my past and ongoing projects
      </h1>
      <h1 class="title is-3 text-light-900 mt-50 is-hidden-mobile">
        A showcase of my past and ongoing projects
      </h1>
    </div>
    <video class="opacity-40" autoplay muted loop>
      <source src="/Portfolio_Demo.mp4">
    </video>
  </div>

  <div class="above-content push-down wrap rounded-2xl">
    <div class="columns py-5 is-mobile is-multiline bg-dark-400 rounded-2xl">
      <div v-for="card in myJson.cards" :key="card" class="column is-one-third-desktop is-one-third-tablet is-full-mobile my-3">
        <card :project-data="card" />
      </div>
      <div ref="projectsDiv" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
