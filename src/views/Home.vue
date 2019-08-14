<template>
  <div class="home">
    <div class="video-container">
      <div class="overlay"></div>
      <video autoplay muted loop>
        <source src="../../static/video/home-video.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>

    <div class="front-text-container">
      <span class="front-text-helper"></span><img class="front-text" src="../../static/img/front_pic.png" alt="">
    </div>
  </div>
</template>

<style lang="sass">
  .video-container
    position: fixed
    height: 100%
    width: 100%

  .video-container video
    min-width: 100%
    min-height: 100%
    position: relative
    z-index: 1

  .video-container .overlay
    height: 100%
    width: 100%
    position: absolute
    top: 0
    left: 0
    z-index: 2
    background: linear-gradient(#067bc2, #fe4a49)
    opacity: 0.5

  .front-text-container
    position: absolute
    height: 100%
    width: 100%
    text-align: center

  .front-text-helper
    display: inline-block
    height: 100%
    vertical-align: middle

  .front-text
    height: 20rem
    width: auto
    vertical-align: middle


  @media (max-width: 991px)
    .front-text
      height: 15rem

  @media (max-width: 700px)
    .front-text
      height: 10rem

  @media (max-width: 400px)
    .front-text
      height: 7rem

</style>

<script>

</script>
