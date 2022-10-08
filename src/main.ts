// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import './styles/main.css'
import { Notify, Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

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

const myApp = createApp(App)

myApp.use(router)

myApp.use(Quasar, {
  plugins: {
    Notify,
  },
  extras: [
    'poppins-font',
  ],
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
