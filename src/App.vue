<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="../static/img/iconic.png" width="30" height="30" class="d-inline-block align-top" alt="">
          Jose Rizal
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
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
                <router-link class="dropdown-item" v-for="item in bioItem" :to="item.link">{{ item.name }}</router-link>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Works
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" v-for="item in worksItem" :to="item.link">{{ item.name }}</router-link>
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
    <router-view  v-on:scroll="handleScroll"/>
  </div>
</template>

<style lang="sass">
@import "/assets/sass/app.sass"

.navbar-brand
  font-size: 1.25rem
  text-transform: uppercase
  font-weight: 700

.nav-link
  text-transform: uppercase
  font-weight: 600
  margin-left: 0.7rem

.dropdown-toggle
  cursor: pointer

</style>

<script>
import bioItem from '../static/json/dropdown/bio.json'
import worksItem from '../static/json/dropdown/works.json'

export default {
  data: () => ({
    bioItem,
    worksItem,

    scrolled: false
  }),
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>
