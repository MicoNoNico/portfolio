<script>
export default {
  data() {
    return {
      // control variables
      isActive: false,
      showNavbar: true,
    }
  },
}
</script>

<template>
  <header class="navbar is-fixed-top is-transparent is-spaced">
    <div class="container">
      <a to="/">
        <figure class="image ml-5 my-auto">
          <img src="/logo.png" style="width: 60px; height: auto;">
        </figure>
      </a>
      <a :aria-expanded="isActive" :class="{ 'is-active': isActive }" role="button" class="navbar-burger" aria-label="menu" data-target="collapse" @click="isActive = !isActive">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
      <div id="collapse" class="navbar-menu is-paddingless is-active">
        <nav class="navbar-end">
          <router-link to="/" class="navbar-item">
            Portfolio
          </router-link>
          <router-link to="/aboutme" class="navbar-item">
            About Me
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>
