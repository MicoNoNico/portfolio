<template>
  <main class="wrap">
    <h1 class="title is-1 text-cyan-500 pt-10">
      DriVR
    </h1>
    <div class="is-size-5 py-20">
      DriVr is an educational game that aims to teach its users to be aware of the dangers of the road
      <br>
      Users first go through 360 videos which are tailor made to highlight specific driving situations. After that they are taken to a 3D environment
      where they can learn about each scenario through voice overs and interactions.
      <br>
      <br>
      This project was developed as part of my internship at: Lectoraat Digital Transformation
    </div>
    <div>
      <figure class="image is-16by9">
        <iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/MZcMkwM-WE0" title="YouTube video player" allowfullscreen />
      </figure>
    </div>

    <div class="my-10 p-10 bg-gray-300 is-hidden-touch rounded-2xl">
      <h1 class="py-2 title is-2 text-cyan-500 centered">
        DETAILS
      </h1>
      <h2 class="subtitle is-6 text-dark-900 font-semibold centered">
        <ul>
          <li>Genre: Educational game</li>
          <li>Engine: Unity</li>
          <li>Test platform: Oculus Quest 2</li>
          <li>Year: 2021</li>
        </ul>
      </h2>
    </div>

    <div class="my-10 p-10 bg-gray-300 is-hidden-touch rounded-2xl">
      <h1 class="py-2 title is-2 text-cyan-500 centered">
        MY ROLE
      </h1>
      <h2 class="subtitle is-6 text-dark-900 font-semibold centered">
        <ul>
          <li>Iteration and concept direction</li>
          <li>Mechanics ideation and level design</li>
          <li>VR-friendly UI design and development</li>
          <li>Various scenes implemented to integrate 360 videos with 3D VR environments</li>
          <li>Conducted various playtesting and demonstration sessions</li>
        </ul>
      </h2>
    </div>

    <div class="my-10 p-10 bg-gray-300 is-hidden-desktop rounded-2xl">
      <div class="column text-left">
        <h1 class="title is-3 text-cyan-500">
          DETAILS
        </h1>
        <h2 class="py-2 subtitle is-6 text-dark-900 font-semibold">
          <ul>
            <li>Genre: Educational game</li>
            <li>Engine: Unity</li>
            <li>Test platform: Oculus Quest 2</li>
            <li>Year: 2021</li>
          </ul>
        </h2>
      </div>
      <div class="column text-left">
        <h1 class="py-2 title is-3 text-cyan-500">
          MY ROLE
        </h1>
        <h3 class="subtitle is-6 text-dark-900 font-semibold">
          <ul>
            <li>Iteration and concept direction</li>
            <li>Mechanics ideation and level design</li>
            <li>VR-friendly UI design and development</li>
            <li>Various scenes implemented to integrate 360 videos with 3D VR environments</li>
            <li>Conducted various playtesting and demonstration sessions</li>
          </ul>
        </h3>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: home
  </route>
