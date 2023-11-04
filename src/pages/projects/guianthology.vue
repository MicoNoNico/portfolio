<script>
export default {
  data() {
    return {
      images: [
        '/shot-all.jpg',
        '/shot-bossfight.jpg',
        '/shot-buttons.jpg',
        '/shot-icons.jpg',
        '/shot-mobile.jpg',
        '/shot-pixel.jpg',
      ],
    }
  },
}
</script>

<template>
  <main class="wrap mt-30">
    <div class="mt-10 mb-30">
      <div class="mx-10 text-xl text-light-900">
        <h1 class="title is-1 text-violet-400">
          GUI Anthology
        </h1>
        <!-- Description -->
        <p>
          In this section I showcase some assets that I made available through the Unity Asset Store.
          <br>
          <br>
          <button class="button is-primary bg-teal-400">
            <a href="https://assetstore.unity.com/packages/2d/gui/roundify-gui-pack-248690" class="button-text-link text-dark-500 font-bold" target="_blank">GUI Asset Anthology</a>
          </button>
          <br>
          <br>
          The following assets were created mainly using Adobe Illustrator and occasionally with Photoshop.
          <br>
          The pixel art assets were created using Aseprite.
          <br>
          <br>
          <br>
        </p>
        <br>
        <!-- Image Carousel -->
        <div>
          <Carousel :images="images" />
        </div>
      </div>
    </div>
  </main>
</template>

    <route lang="yaml">
meta:
  layout: home
</route>
