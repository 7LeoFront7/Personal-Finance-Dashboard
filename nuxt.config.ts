// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  imports: {
    autoImport: true, // ← должно быть по умолчанию
  },
  modules: ['@element-plus/nuxt','@nuxt/fonts', '@nuxtjs/tailwindcss','@nuxt/icon', '@pinia/nuxt',],
  css: ['~/assets/scss/main.scss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#1d4ed8',
          },
        },
      },
    },
  },
})
