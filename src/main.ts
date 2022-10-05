// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

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

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
    ctx.app.use(Quasar, {
      plugins: {
        Notify,
      },
      extras: [
        'poppins-font',
      ],
    })
  },
)
