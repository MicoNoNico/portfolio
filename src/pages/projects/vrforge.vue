<template>
  <main class="wrap mt-30">
    <div class="mt-10 mb-30">
      <div class="text-xl text-light-900">
        <h2 class="title is-1 text-violet-400 text-center">
          VR Forge
        </h2>
        <br>
        <br>
        VR Forge is a project I worked on during my employment at my university's research group, the Lectoraat Digital Transformation.
        <br>
        <br>
        The project consists of a level designer (video above) and a VR level loader. Its main purpose lies in creating levels with timed events and being able to view them in VR.
        <br>
        <br>
        <figure class="image is-16by9">
          <iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/pNhJF2vmFPA" title="YouTube video player" allowfullscreen />
        </figure>
        <br>
        <br>
        <div class="mb-5">
          <a href="/vrforge-ui.png" data-title="VR Forge UI"><img src="/vrforge-ui.png" alt="VR Forge UI"></a>
          <p class="text-base mt-2">
            VR Forge interface
          </p>
        </div>
        <br>
        Regarding the <b>user interface</b>, the design takes inspiration from management games such as Planet Zoo or Cities Skylines, in which the user can pick from a scroll list of items displayed at the bottom of the hud.
        <br>
        <br>
        The following image shows the original wireframe of the level editor scene.
        <br>
        <br>
        <div class="mb-5">
          <a href="/vrforge-wireframe.png" data-title="VR Forge UI"><img id="vrforge-wireframe" src="/vrforge-wireframe.png" alt="VR Forge UI"></a>
          <p class="text-base mt-2">
            VR Forge wireframe
          </p>
        </div>
      </div>
      <div class="my-10 p-10 bg-gray-300 is-hidden-touch rounded-2xl">
        <h1 class="py-2 title is-2 text-violet-400 centered">
          DETAILS
        </h1>
        <h2 class="subtitle is-6 text-dark-900 font-semibold centered">
          <ul>
            <li>Year: 2023</li>
            <li>Genre: Level editor</li>
            <li>Engine: Unity</li>
            <li>Created for: Digital Society Hub, Groningen</li>
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
            <li>UI & UX design</li>
            <li>UI navigation implementation</li>
            <li>QA & Public test session organization</li>
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
              <li>Genre: Level editor</li>
              <li>Engine: Unity</li>
              <li>Created for: Digital Society Hub, Groningen</li>
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
              <li>UI & UX design</li>
              <li>UI navigation implementation</li>
              <li>QA & Public test session organization</li>
            </ul>
          </h2>
        </div>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
