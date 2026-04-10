import { route } from 'quasar/wrappers'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/stores/auth'

export default route(function () {

  const Router = createRouter({
    history: createWebHistory(),
    routes
  })

  Router.beforeEach((to, from, next) => {
    const auth = useAuthStore()

    if (!auth.isLoggedIn && to.name !== 'login') {
      next('/login')
    } else {
      next()
    }
  })

  return Router
})
