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
    <div v-if="$route.meta.showFooter">
      <div class="footer bg-light">
        <div class="container">
          <div class="row v-centered">
            <div class="col-lg-4 text-center">
              <img class="footer-logo" src="../static/img/iconic.png" alt="">
              <p class="footer-disclaimer">This website are for educational purposes only.<br>2017-2018</p>
            </div>
            <div class="col-lg text-right">
              <div class="row">
                <div class="col-lg col-md col-4">
                  <p class="footer-subtitle">General</p>
                  <router-link class="footer-link" to="/">Home</router-link>
                  <router-link class="footer-link" to="/rizal_law">Rizal Law</router-link>
                  <router-link class="footer-link" to="/lovelife">Lovelife</router-link>
                  <router-link class="footer-link" to="/travels">Travels</router-link>
                  <router-link class="footer-link" to="/people">People</router-link>
                  <router-link class="footer-link" to="/about">About</router-link>
                </div>
                <div class="col-lg col-md col-4">
                  <p class="footer-subtitle">Biography</p>
                  <router-link class="footer-link" v-for="item in bioItem" :to="item.link">{{ item.name }}</router-link>
                </div>
                <div class="col-lg col-md col-4">
                  <p class="footer-subtitle">Works</p>
                  <router-link class="footer-link" v-for="item in worksItem" :to="item.link">{{ item.name }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <p class="footer-caption" alt="Girish Daloso">© Girish Daloso</p>
          <a class="footer-icon" href="https://www.linkedin.com/in/girishdaloso/" target="_blank"><span class="icon-github">asdasd</span></a>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="sass">
@import "/assets/sass/app.sass"
@import "/assets/style.css"

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

.footer
  margin-top: 4rem
  padding: 3rem 0

.footer-logo
  width: 7rem

.footer-subtitle
  color: #444
  text-transform: uppercase
  font-weight: 700

.footer-link
  display: block
  color: #8e8e8e
  text-decoration: none
  font-weight: 200

.footer-link:hover
  text-decoration: none
  color: #c65c34

.footer-disclaimer
  font-size: 0.9rem

.footer-copyright
  padding: 1rem 0
  background: #eceef1

.footer-caption
  margin-bottom: 0

.footer-icon
  height: 2rem
  color: red

.footer-link.router-link-exact-active.router-link-active
  color: #c65c34
  font-weight: 500


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
