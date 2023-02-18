<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon,
  },
}
</script>

<template>
  <footer class="footer bg-dark-900 w-full h-auto p-2 bottom-0">
    <nav class="centered">
      <a href="https://www.linkedin.com/in/niccolo-chiodo/"><Icon icon="mdi:linkedin" target="_blank" height="60" color="white" class="display-inline m-5" /></a>
      <a href="https://github.com/MicoNoNico"><Icon icon="mdi:github" target="_blank" width="60" color="white" class="display-inline m-5" /></a>
      <br>
      <h1 class="title is-6 text-light-900 display-inline">
        Made by Niccolò Chiodo
      </h1>
      <Icon icon="ph:copyright-fill" width="20" class="display-inline" />
      2023
    </nav>
  </footer>
</template>
