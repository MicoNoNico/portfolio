<script>
export default {
  props: {
    heroTitle: String,
    heroSubtitle: String,
  },
}
</script>

<template>
  <h1 class="title is-1 text-light-900">
    {{ heroTitle }}
  </h1>
  <h2 class="subtitle is-3">
    {{ heroSubtitle }}
  </h2>
</template>
