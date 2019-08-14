import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RizalLaw from './views/RizalLaw.vue'
import Biography from './views/Biography.vue'
import Education from './views/Education.vue'
import Philosophies from './views/Philosophies.vue'
import Personalities from './views/Personalities.vue'
import Quotes from './views/Quotes.vue'
import Foods from './views/Foods.vue'
import Sculptures from './views/Sculptures.vue'
import Poems from './views/Poems.vue'
import Paintings from './views/Paintings.vue'
import Portfolio from './views/Portfolio.vue'
import Lovelife from './views/Lovelife.vue'
import Travels from './views/Travels.vue'
import People from './views/People.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rizal_law',
      name: 'rizallaw',
      component: RizalLaw
    },
    {
      path: '/biography',
      name: 'biography',
      component: Biography
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/philosophies',
      name: 'philosophies',
      component: Philosophies
    },
    {
      path: '/personalities',
      name: 'personalities',
      component: Personalities
    },
    {
      path: '/quotes',
      name: 'qoutes',
      component: Quotes
    },
    {
      path: '/foods',
      name: 'foods',
      component: Foods
    },
    {
      path: '/sculptures',
      name: 'sculptures',
      component: Sculptures
    },
    {
      path: '/poems',
      name: 'poems',
      component: Poems
    },
    {
      path: '/paintings',
      name: 'paintings',
      component: Paintings
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/lovelife',
      name: 'lovelife',
      component: Lovelife
    },
    {
      path: '/travels',
      name: 'travels',
      component: Travels
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
