<template>
  <nav class="navbar py-3" role="navigation" aria-label="main navigation">
    <div class="navbar-item text-yellow-500 font-medium text-2xl">
      Niccolò Chiodo
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/" class="button is-warning is-light">
              Portfolio
            </router-link>
            <router-link to="/about" class="button is-warning is-light">
              About Me
            </router-link>
            <router-link to="/contact" class="button is-warning is-light">
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
