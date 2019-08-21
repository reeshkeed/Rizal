import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: { showFooter: false }
    },
    {
      path: '/rizal_law',
      name: 'rizallaw',
      component: () => import('./views/RizalLaw.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/biography',
      name: 'biography',
      component: () => import('./views/Biography.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('./views/Education.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/philosophies',
      name: 'philosophies',
      component: () => import('./views/Philosophies.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/personalities',
      name: 'personalities',
      component: () => import('./views/Personalities.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/quotes',
      name: 'qoutes',
      component: () => import('./views/Quotes.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/sculptures',
      name: 'sculptures',
      component: () => import('./views/Sculptures.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/poems',
      name: 'poems',
      component: () => import('./views/Poems.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/paintings',
      name: 'paintings',
      component: () => import('./views/Paintings.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/lovelife',
      name: 'lovelife',
      component: () => import('./views/Lovelife.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/travels',
      name: 'travels',
      component: () => import('./views/Travels.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('./views/People.vue'),
      meta: { showFooter: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: { showFooter: true }
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return new Promise((resolve, reject) => {
      let scrollDuration = 500,
          cosParameter = window.scrollY / 2,
          oldTimestamp = performance.now(),
          scrollCount = 0

      function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))

        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0)
        }

        if (window.scrollY === 0) {
          resolve({ x: 0, y: 0 })

          return
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))

        oldTimestamp = newTimestamp

        window.requestAnimationFrame(step)
      }

      window.requestAnimationFrame(step);
    })
  }
})

router.beforeEach((to, from, next) => {
  router.app.$emit('loading', true)
  next()
})

router.afterEach((to, from, next) => {
  setTimeout(function () {
    router.app.$emit('loading', false)
  }, 1000)
})

export default router
