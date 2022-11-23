<template>
  <div class="w-full h-screen flex bg-dark-50">
    <div class="m-auto">
      <Hero hero-title="A showcase of my past and ongoing projects" />
    </div>
  </div>

  <div class="columns is-gapless !mb-0">
    <div class="column">
      <div class="overlay-container relative">
        <figure class="image">
          <img src="/escapod-framed.png">
        </figure>
        <div class="overlay bg-violet-500">
          Stonks
        </div>
      </div>
    </div>
    <div class="column">
      <div class="overlay-container relative">
        <figure class="image">
          <img src="/ewb-framed.png">
        </figure>
        <div class="overlay bg-cyan-500">
          <figure class="image">
            <img src="/ewb-logo.png" class="p-30">
            Multiplayer party game
            Role: Artist & UI Designer
          </figure>
        </div>
      </div>
    </div>
  </div>
  <div class="columns is-gapless">
    <div class="column">
      <div class="overlay-container relative">
        <figure class="image">
          <img src="/artpack-framed.png">
        </figure>
        <div class="overlay bg-amber-600">
          Stonks
        </div>
      </div>
    </div>
    <div class="column">
      <div class="overlay-container relative">
        <figure class="image">
          <img src="/demoman-framed.png">
        </figure>
        <div class="overlay bg-red-500">
          Stonks
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
