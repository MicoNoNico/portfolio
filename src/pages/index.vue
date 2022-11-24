<template>
  <div class="w-full h-screen flex bg-dark-50">
    <div class="m-auto">
      <Hero hero-title="A showcase of my past and ongoing projects" />
    </div>
  </div>

  <div class="columns is-gapless !mb-0">
    <router-link id="escapod" to="/projects/escapod" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/escapod-framed.png">
        </figure>
        <div class="overlay bg-violet-500">
          <div class="m-auto">
            <h1 class="title is-3 text-light-900">
              ESCAPOD
            </h1>
            <h2 class="subtitle is-4 text-light-900">
              casual mobile game
            </h2>
            <br>
            <h2 class="subtitle is-4 text-light-900">
              Role: Artist
            </h2>
          </div>
        </div>
      </div>
    </router-link>
    <router-link id="ewb" to="/projects/ewb" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/ewb-framed.png">
        </figure>
        <div class="overlay bg-cyan-500">
          <div class="m-auto">
            <h1 class="title is-3 text-light-900">
              Enemies With Benefits
            </h1>
            <h2 class="subtitle is-4 text-light-900">
              Multiplayer party game
            </h2>
            <br>
            <h2 class="subtitle is-4 text-light-900">
              Role: Artist & UI Designer
            </h2>
          </div>
        </div>
      </div>
    </router-link>
  </div>
  <div id="artpack" class="columns is-gapless">
    <router-link to="/projects/artpack" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/artpack-framed.png">
        </figure>
        <div class="overlay bg-amber-600">
          <div class="m-auto">
            <h1 class="title is-3 text-light-900">
              Art Asset Pack
            </h1>
          </div>
        </div>
      </div>
    </router-link>
    <router-link id="demoman" to="projects/demoman" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/demoman-framed.png">
        </figure>
        <div class="overlay bg-red-500">
          <div class="m-auto">
            <h1 class="title is-3 text-light-900">
              Demolition Man
            </h1>
            <h2 class="subtitle is-4 text-light-900">
              Singleplayer sidescrolling platformer
            </h2>
            <br>
            <h2 class="subtitle is-4 text-light-900">
              Role: Artist & UI Designer
            </h2>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
