<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
          Bootstrap
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rizal_law">Rizal Law</router-link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Biography
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/Biography">Family</router-link>
                <router-link class="dropdown-item" to="/education">Education</router-link>
                <router-link class="dropdown-item" to="/philosophies">Philosophies</router-link>
                <router-link class="dropdown-item" to="/personalities">Personalities</router-link>
                <router-link class="dropdown-item" to="/quotes">Quotes and Trivia</router-link>
                <router-link class="dropdown-item" to="/foods">Foods</router-link>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Works
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/sculptures">Sculptures</router-link>
                <router-link class="dropdown-item" to="/poems">Poems</router-link>
                <router-link class="dropdown-item" to="/paintings">Paintings</router-link>
                <router-link class="dropdown-item" to="/portfolio">Portfolio</router-link>
              </div>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/lovelife">Lovelife</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/travels">Travels</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/people">People</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "/assets/sass/app.sass"

</style>
