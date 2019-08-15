<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark" :class="{ 'scrolled': hasScrolled }">
      <div class="container">
        <router-link class="navbar-brand v-centered" to="/">
          <img src="../static/img/iconic.png" class="d-inline-block align-top navbar-logo" alt="">
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
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "/assets/sass/app.sass"

.navbar-logo
  height: 3rem
  margin-right: 1rem

.navbar-brand
  font-size: 1.3rem
  text-transform: uppercase
  font-weight: 700

.nav-link
  font-weight: 400
  margin-left: 0.7rem

.nav-link.router-link-exact-active.router-link-active
  color: #fff
  font-weight: 500

.navbar-toggler
  border-color: 0

.navbar-collapse
  background-color: #fff
  border-radius: 0.5rem
  padding: 2rem 3rem

.navbar-collapse > .navbar-nav > .nav-item > .nav-link
  color: #444
  margin-left: 0

.dropdown-toggle
  cursor: pointer

.scrolled
  background-image: linear-gradient(to right, #c65c34, #e46216)
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28)

.scrolled > .container > .navbar-brand
  font-size: 1.2rem

.scrolled > .container > .navbar-brand > .navbar-logo
  height: 2.5rem
  margin-right: 0.5rem

</style>

<script>
import bioItem from '../static/json/dropdown/bio.json'
import worksItem from '../static/json/dropdown/works.json'

export default {
  data: () => ({
    bioItem,
    worksItem,

    scrollY: 0
  }),

  mounted () {
    window.addEventListener('scroll', this.onScroll, false)

    this.onScroll()
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll, false)
  },

  computed: {
    hasScrolled () {
      return this.scrollY >= 100
    }
  },

  methods: {
    onScroll () {
      this.scrollY = window.scrollY
    }
  }
}

</script>
