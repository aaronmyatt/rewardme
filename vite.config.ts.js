// vite.config.ts
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import svgLoader from 'vite-svg-loader'
import { quasar as Quasar, transformAssetUrls } from '@quasar/vite-plugin'
const markdownWrapperClasses = 'prose prose-sm m-auto text-left'
const vite_config_default = defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve('/Users/aaronmyatt/WebstormProjects/rewardme', 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      template: { transformAssetUrls },
    }),
    svgLoader(),
    Quasar({
      sassVariables: 'src/styles/quasar-variables.sass',
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        'vitest',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Icons({
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader('./src/png'),
      },
    }),
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism)
        md.use(LinkAttributes, {
          pattern: /^https?:\/\//,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Reward Me',
        short_name: 'RewardMe',
        theme_color: '#7989C4',
        icons: [
          {
            src: '/logo.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
          {
            src: '/logo.svg',
            sizes: '512x512',
            type: 'image/svg',
          },
          {
            src: '/logo.svg',
            sizes: '512x512',
            type: 'image/svg',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve('/Users/aaronmyatt/WebstormProjects/rewardme', 'locales/**')],
    }),
    Inspect({
      enabled: false,
    }),
  ],
  server: {
    fs: {
      strict: true,
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
})
export {
  vite_config_default as default,
}
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IHsgRmlsZVN5c3RlbUljb25Mb2FkZXIgfSBmcm9tICd1bnBsdWdpbi1pY29ucy9sb2FkZXJzJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBNYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi1tZCdcbmltcG9ydCBXaW5kaUNTUyBmcm9tICd2aXRlLXBsdWdpbi13aW5kaWNzcydcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS92aXRlLXBsdWdpbi12dWUtaTE4bidcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXG5pbXBvcnQgUHJpc20gZnJvbSAnbWFya2Rvd24taXQtcHJpc20nXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXG5pbXBvcnQgeyBxdWFzYXIgYXMgUXVhc2FyLCB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tICdAcXVhc2FyL3ZpdGUtcGx1Z2luJ1xuXG5jb25zdCBtYXJrZG93bldyYXBwZXJDbGFzc2VzID0gJ3Byb3NlIHByb3NlLXNtIG0tYXV0byB0ZXh0LWxlZnQnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKFwiL1VzZXJzL2Fhcm9ubXlhdHQvV2Vic3Rvcm1Qcm9qZWN0cy9yZXdhcmRtZVwiLCAnc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSxcbiAgICB9KSxcblxuICAgIHN2Z0xvYWRlcigpLFxuXG4gICAgUXVhc2FyKHtcbiAgICAgIHNhc3NWYXJpYWJsZXM6ICdzcmMvc3R5bGVzL3F1YXNhci12YXJpYWJsZXMuc2FzcycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFubm9lcnUvdml0ZS1wbHVnaW4tcGFnZXNcbiAgICBQYWdlcyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICAndml0ZXN0JyxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuXG4gICAgICAvLyBjdXN0b20gcmVzb2x2ZXJzXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgLy8gYXV0byBpbXBvcnQgaWNvbnNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWljb25zXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgIGNvbXBvbmVudFByZWZpeDogJycsXG4gICAgICAgICAgLy8gZW5hYmxlZENvbGxlY3Rpb25zOiBbJ2NhcmJvbiddXG4gICAgICAgIH0pLFxuICAgICAgXSxcblxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4taWNvbnNcbiAgICBJY29ucyh7XG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZSxcbiAgICAgIGN1c3RvbUNvbGxlY3Rpb25zOiB7XG4gICAgICAgIGN1c3RvbTogRmlsZVN5c3RlbUljb25Mb2FkZXIoJy4vc3JjL3BuZycpLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi13aW5kaWNzc1xuICAgIFdpbmRpQ1NTKHtcbiAgICAgIHNhZmVsaXN0OiBtYXJrZG93bldyYXBwZXJDbGFzc2VzLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLW1kXG4gICAgLy8gRG9uJ3QgbmVlZCB0aGlzPyBUcnkgdml0ZXNzZS1saXRlOiBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZXNzZS1saXRlXG4gICAgTWFya2Rvd24oe1xuICAgICAgd3JhcHBlckNsYXNzZXM6IG1hcmtkb3duV3JhcHBlckNsYXNzZXMsXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAvLyBodHRwczovL3ByaXNtanMuY29tL1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHR5cGVzIG1pc21hdGNoXG4gICAgICAgIG1kLnVzZShQcmlzbSlcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0eXBlcyBtaXNtYXRjaFxuICAgICAgICBtZC51c2UoTGlua0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXmh0dHBzPzpcXC9cXC8vLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2xvZ28uc3ZnJywgJ3JvYm90cy50eHQnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnUmV3YXJkIE1lJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1Jld2FyZE1lJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjNzk4OUM0JyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvbG9nby5zdmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9zdmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2xvZ28uc3ZnJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2Uvc3ZnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9sb2dvLnN2ZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3N2ZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdml0ZS1wbHVnaW4tdnVlLWkxOG5cbiAgICBWdWVJMThuKHtcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShcIi9Vc2Vycy9hYXJvbm15YXR0L1dlYnN0b3JtUHJvamVjdHMvcmV3YXJkbWVcIiwgJ2xvY2FsZXMvKionKV0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4taW5zcGVjdFxuICAgIEluc3BlY3Qoe1xuICAgICAgLy8gY2hhbmdlIHRoaXMgdG8gZW5hYmxlIGluc3BlY3QgZm9yIGRlYnVnZ2luZ1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSksXG4gIF0sXG5cbiAgc2VydmVyOiB7XG4gICAgZnM6IHtcbiAgICAgIHN0cmljdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xuICBzc2dPcHRpb25zOiB7XG4gICAgc2NyaXB0OiAnYXN5bmMnLFxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxuICB9LFxuXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICd2dWUnLFxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAnQHZ1ZXVzZS9oZWFkJyxcbiAgICBdLFxuICAgIGV4Y2x1ZGU6IFtcbiAgICAgICd2dWUtZGVtaScsXG4gICAgXSxcbiAgfSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3RcbiAgdGVzdDoge1xuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnXSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBkZXBzOiB7XG4gICAgICBpbmxpbmU6IFsnQHZ1ZScsICdAdnVldXNlJywgJ3Z1ZS1kZW1pJ10sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNLHlCQUF5QjtBQUUvQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLCtDQUErQztBQUFBO0FBQUE7QUFBQSxFQUd6RSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsVUFBVTtBQUFBLE1BQ3BCLFVBQVUsRUFBRTtBQUFBO0FBQUEsSUFHZDtBQUFBLElBRUEsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBO0FBQUEsSUFJakIsTUFBTTtBQUFBLE1BQ0osWUFBWSxDQUFDLE9BQU87QUFBQTtBQUFBLElBSXRCO0FBQUEsSUFHQSxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUVGLEtBQUs7QUFBQTtBQUFBLElBSVAsV0FBVztBQUFBLE1BRVQsWUFBWSxDQUFDLE9BQU87QUFBQSxNQUdwQixTQUFTLENBQUMsVUFBVSxjQUFjO0FBQUEsTUFHbEMsV0FBVztBQUFBLFFBR1QsY0FBYztBQUFBLFVBQ1osaUJBQWlCO0FBQUE7QUFBQTtBQUFBLE1BS3JCLEtBQUs7QUFBQTtBQUFBLElBSVAsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsUUFDakIsUUFBUSxxQkFBcUI7QUFBQTtBQUFBO0FBQUEsSUFLakMsU0FBUztBQUFBLE1BQ1AsVUFBVTtBQUFBO0FBQUEsSUFLWixTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixhQUFhO0FBQUEsTUFDYixnQkFBZ0IsSUFBSTtBQUdsQixXQUFHLElBQUk7QUFFUCxXQUFHLElBQUksZ0JBQWdCO0FBQUEsVUFDckIsU0FBUztBQUFBLFVBQ1QsT0FBTztBQUFBLFlBQ0wsUUFBUTtBQUFBLFlBQ1IsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPYixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsWUFBWSxjQUFjO0FBQUEsTUFDMUMsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBT2pCLFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLE1BQ2pCLFNBQVMsQ0FBQyxLQUFLLFFBQVEsK0NBQStDO0FBQUE7QUFBQSxJQUl4RSxRQUFRO0FBQUEsTUFFTixTQUFTO0FBQUE7QUFBQTtBQUFBLEVBSWIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBO0FBQUE7QUFBQSxFQUtaLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQTtBQUFBLEVBR2QsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBRUYsU0FBUztBQUFBLE1BQ1A7QUFBQTtBQUFBO0FBQUEsRUFLSixNQUFNO0FBQUEsSUFDSixTQUFTLENBQUM7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxNQUNKLFFBQVEsQ0FBQyxRQUFRLFdBQVc7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
