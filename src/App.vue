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

    <!-- Render Views -->
    <router-view/>

      <!-- Footer -->
    <div class="footer" v-if="$route.meta.showFooter">
      <div class="footer-main bg-light">
        <div class="container text-center">
          <img class="footer-logo" src="../static/img/iconic.png" alt="">
          <div class="footer-disclaimer">
            <p>This website are for educational purposes only.</p>
            <p>Created 2018 - Updated 2019</p>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <a class="footer-caption" href="https://girishdaloso.me/" target="_blank" alt="Girish Daloso">© Girish Daloso</a>
          <div>
            <a class="footer-icon" href="https://github.com/reeshkeed" target="_blank"><span class="icon-github"></span></a>
            <a class="footer-icon" href="https://www.linkedin.com/in/girishdaloso/" target="_blank"><span class="icon-linkedin"></span></a>
            <a class="footer-icon" href="https://twitter.com/reeshkeed" target="_blank"><span class="icon-twitter"></span></a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="sass">
@import "assets/sass/app.sass"
@import "../static/style.css"

.navbar-logo
  height: 3rem
  margin-right: 1rem

.navbar-brand
  font-size: 1.5rem
  text-transform: uppercase
  font-weight: 800

.nav-link
  font-weight: 400
  margin-left: 0.7rem

.nav-link.router-link-exact-active.router-link-active
  color: #fff
  font-weight: 500

.dropdown-toggle
  cursor: pointer

.scrolled
  background: #3097D1
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28)
  color: red

.scrolled > .container > .navbar-brand
  font-size: 1.3rem

.scrolled > .container > .navbar-brand > .navbar-logo
  height: 2.5rem
  margin-right: 0.7rem

.footer
  margin-top: 4rem

.footer p
  margin-bottom: 0

.footer-main
  padding: 4rem 0

.footer-logo
  width: 7rem

.footer-disclaimer > p
  font-size: 0.9rem
  margin-bottom: 0.2rem

.footer-copyright
  padding: 2rem 0
  background: #eceef1

.footer-caption
  color: #444

.footer-icon
  font-size: 1.4rem
  margin-right: 0.6rem
  color: #8e8e8e

.footer-caption:hover, .footer-icon:hover
  text-decoration: none
  color: #3097D1


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
