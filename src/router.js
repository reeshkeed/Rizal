import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RizalLaw from './views/RizalLaw.vue'
import Biography from './views/Biography.vue'
import Education from './views/Education.vue'
import Philosophies from './views/Philosophies.vue'
import Personalities from './views/Personalities.vue'
import Quotes from './views/Quotes.vue'
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
      component: Home,
      meta: { showFooter: false }
    },
    {
      path: '/rizal_law',
      name: 'rizallaw',
      component: RizalLaw,
      meta: { showFooter: true }
    },
    {
      path: '/biography',
      name: 'biography',
      component: Biography,
      meta: { showFooter: true }
    },
    {
      path: '/education',
      name: 'education',
      component: Education,
      meta: { showFooter: true }
    },
    {
      path: '/philosophies',
      name: 'philosophies',
      component: Philosophies,
      meta: { showFooter: true }
    },
    {
      path: '/personalities',
      name: 'personalities',
      component: Personalities,
      meta: { showFooter: true }
    },
    {
      path: '/quotes',
      name: 'qoutes',
      component: Quotes,
      meta: { showFooter: true }
    },
    {
      path: '/sculptures',
      name: 'sculptures',
      component: Sculptures,
      meta: { showFooter: true }
    },
    {
      path: '/poems',
      name: 'poems',
      component: Poems,
      meta: { showFooter: true }
    },
    {
      path: '/paintings',
      name: 'paintings',
      component: Paintings,
      meta: { showFooter: true }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: { showFooter: true }
    },
    {
      path: '/lovelife',
      name: 'lovelife',
      component: Lovelife,
      meta: { showFooter: true }
    },
    {
      path: '/travels',
      name: 'travels',
      component: Travels,
      meta: { showFooter: true }
    },
    {
      path: '/people',
      name: 'people',
      component: People,
      meta: { showFooter: true }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { showFooter: true }
    }
  ]
})
