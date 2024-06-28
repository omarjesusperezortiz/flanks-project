export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: {
        class: 'bg-white dark:bg-black text-black dark:text-white'
      }
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:4000',
    },
  },
  ssr: true,
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', "@nuxt/icon",  '@nuxtjs/color-mode'],
  colorMode: {
    classPrefix: ''
  },
  css: ['/assets/css/main.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    viewer: false
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons'
      },
    ],
  },
  plugins: [
    { src: '~/plugins/vue-good-table-next', ssr: false },
    { src: '~/plugins/apexcharts.client', mode: 'client' },
    { src: '~/plugins/flowbite.client'},
  ],
});