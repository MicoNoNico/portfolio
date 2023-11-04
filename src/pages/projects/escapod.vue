<template>
  <main class="wrap">
    <figure id="escapod-logo-desktop" class="image mt-20 is-hidden-mobile centered">
      <img src="/escapod-logo-scaled.png">
    </figure>
    <figure class="image is-hidden-tablet m-5">
      <img src="/escapod-logo-scaled.png">
    </figure>
    <div class="is-size-5 py-20">
      Your home is under attack by a monstrous alien! Guide the survivors to their designated Escapod to ensure their escape.
      <br>
      Keep the line moving at all costs!
      <br>
      <br>
      Game jam theme: "Keep Moving!"
    </div>
    <video id="escapod-video" class="px-10 pb-10 centered is-hidden-mobile" autoplay muted controls>
      <source src="/escapod-cropped.mp4">
    </video>
    <video id="escapod-video" class="pb-10 centered is-hidden-tablet" autoplay muted controls>
      <source src="/escapod-cropped.mp4">
    </video>
    <a href="https://gx.games/games/kk5imy/escapod/" target="_blank" class="button is-large is-outlined btn-purple">
      <h2 class="title text-light-900">
        TRY THE GAME
      </h2>
    </a>

    <div class="my-10 p-10 bg-gray-300 is-hidden-touch rounded-2xl">
      <h1 class="py-2 title is-2 text-violet-400 centered">
        DETAILS
      </h1>
      <h2 class="subtitle is-6 text-dark-900 font-semibold centered">
        <ul>
          <li>Genre: Casual game</li>
          <li>Platform: Opera GX (Mobile/PC)</li>
          <li>Engine: Game Maker Studio</li>
          <li>Created for: Opera Mobile Game Jam 2022</li>
        </ul>
      </h2>
    </div>

    <div class="my-10 p-10 bg-gray-300 is-hidden-touch rounded-2xl">
      <h1 class="py-2 title is-2 text-violet-400 centered">
        MY ROLE
      </h1>
      <h2 class="subtitle is-6 text-dark-900 font-semibold centered">
        <ul>
          <li>Ideation and concept direction</li>
          <li>Mechanics and level design</li>
          <li>Pixel art assets</li>
        </ul>
      </h2>
    </div>

    <div class="my-10 p-10 bg-gray-300 is-hidden-desktop rounded-2xl">
      <div class="column text-left">
        <h1 class="py-2 title is-3 text-violet-400">
          DETAILS
        </h1>
        <h2 class="subtitle is-6 text-dark-900 font-semibold">
          <ul>
            <li>Genre: Casual game</li>
            <li>Platform: Opera GX (Mobile/PC)</li>
            <li>Engine: Game Maker Studio</li>
            <li>Created for: Opera Mobile Game Jam 2022</li>
          </ul>
        </h2>
      </div>
      <div class="column text-left">
        <h1 class="py-2 title is-3 text-violet-400">
          MY ROLE
        </h1>
        <h2 class="subtitle is-6 text-dark-900 font-semibold">
          <ul>
            <li>Ideation and concept direction</li>
            <li>Mechanics and level design</li>
            <li>Pixel art assets</li>
          </ul>
        </h2>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: home
  </route>

