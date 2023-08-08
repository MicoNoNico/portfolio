<script setup lang="ts">
const isActive = ref(false)
const router = useRouter()
const go = () => {
  router.push('/')
}
</script>

<template>
  <nav class="navbar is-spaced shadow py-3 bg-dark-400" role="navigation" aria-label="main navigation">
    <div class="navbar-brand flex">
      <a to="/" class="my-auto ml-2 !active:outline-none !focus:outline-none">
        <img src="/logo.png" width="60" @click="go">
      </a>
      <a role="button" class="navbar-burger ml-auto my-auto" aria-label="menu" aria-expanded="false" :class="{ 'is-active': isActive }" data-target="navBarMain" @click="isActive = !isActive">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navBarMain" class="navbar-menu text-xl bg-transparent" :class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <router-link to="/ui" class="navbar-item text-light-900" @click="isActive = false">
          <b>UI/UX</b>
        </router-link>
        <router-link to="/" class="navbar-item text-light-900" @click="isActive = false">
          Projects
        </router-link>
        <router-link to="/aboutme" class="navbar-item text-light-900" @click="isActive = false">
          About Me
        </router-link>
        <router-link to="/contact" class="navbar-item text-light-900" @click="isActive = false">
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>
