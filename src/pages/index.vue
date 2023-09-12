<template>
  <div class="w-full h-screen flex bg-transparent is-hidden-touch">
    <div class="m-auto">
      <div class="z-10 absolute left-0 w-full">
        <h1 class="title is-1 text-light-900">
          A showcase of my past and ongoing projects
        </h1>
      </div>
      <video class="w-full absolute left-0 top-20 opacity-40" autoplay muted loop>
        <source src="/Portfolio_Demo.mp4">
      </video>
    </div>
  </div>

  <div class="w-full flex is-hidden-desktop">
    <div class="z-10 absolute w-full">
      <h1 class="title is-6 text-light-900 mt-20 is-hidden-tablet">
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
              Role: Game Designer & Artist
            </h2>
          </div>
        </div>
      </div>
    </router-link>
    <router-link id="drivr" to="/projects/drivr" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/drivr-framed.png">
        </figure>
        <div class="overlay bg-cyan-600">
          <div class="m-auto">
            <h1 class="title is-3 text-light-900">
              DriVR
            </h1>
            <h2 class="subtitle is-4 text-light-900">
              VR educational game
            </h2>
            <br>
            <h2 class="subtitle is-4 text-light-900">
              Role: Game Designer, UI/UX Designer, Programmer
            </h2>
          </div>
        </div>
      </div>
    </router-link>
  </div>

  <div class="columns is-gapless !mb-0">
    <router-link id="ewb" to="/projects/ewb" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/ewb-framed.png">
        </figure>
        <div class="overlay bg-green-700">
          <div class="m-auto">
            <h1 class="title is-3 text-light-900">
              Enemies With Benefits
            </h1>
            <h2 class="subtitle is-4 text-light-900">
              Multiplayer party game
            </h2>
            <br>
            <h2 class="subtitle is-4 text-light-900">
              Role: Game Designer, 3D Artist, UI/UX Designer, Programmer
            </h2>
          </div>
        </div>
      </div>
    </router-link>
    <router-link id="artpack" to="/projects/artpack" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/artpack-framed.png">
        </figure>
        <div class="overlay bg-amber-600">
          <div class="m-auto">
            <h1 class="title is-3 text-light-900">
              Medieval FPS
              <h2 class="subtitle is-4 text-light-900">
                Art asset pack
              </h2>
            </h1>
          </div>
        </div>
      </div>
    </router-link>
  </div>

  <div class="columns is-gapless">
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
              Role: Game Designer, Programmer, UI/UX Designer
            </h2>
          </div>
        </div>
      </div>
    </router-link>
    <router-link id="demoman" to="/index" class="column">
      <div class="overlay-container relative cursor-pointer">
        <figure class="image">
          <img src="/blank-framed.png">
        </figure>
      </div>
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
