// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'

import { Notify, Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './styles/main.css'

// import PubSub from 'pubsub-js'
import './composites/subscriptions'
import App from './App.vue'
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'

// if (import.meta.env.DEV) {
//   PubSub.subscribe('*', (topic: string, data: Record<string, any>) => {
//     // eslint-disable-next-line no-console
//     console.log({
//       topic, data,
//     })
//   })
// }

if (!store.getItem(StoreKeys.REINFORCEMENT))
  store.setItem(StoreKeys.REINFORCEMENT, [])
if (!store.getItem(StoreKeys.REWARDS))
  store.setItem(StoreKeys.REWARDS, [])
if (!store.getItem(StoreKeys.PROFILES))
  store.setItem(StoreKeys.PROFILES, [])

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  routes,
  history: createWebHistory(),
})
const head = createHead()
const myApp = createApp(App)

myApp.use(router)
myApp.use(head)
myApp.use(Quasar, {
  plugins: {
    Notify,
  },
  config: {
    extras: [
      'poppins-font',
    ],
  },
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
