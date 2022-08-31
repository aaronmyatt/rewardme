// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import { Notify, Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import PubSub from 'pubsub-js'
import './composites/subscriptions'
import App from './App.vue'
import { store } from '~/composites/store'
import { Reinforcement, StoreKeys } from '~/schemas'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

if (!import.meta.env.PROD) {
  PubSub.subscribe('*', (topic: string, data: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log({
      topic, data,
    })
  })
}

if (!store.getItem(StoreKeys.REINFORCEMENT))
  store.setItem(StoreKeys.REINFORCEMENT, Reinforcement.parse({ count: 0 }))
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
