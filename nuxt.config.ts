// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/ionic", "@nuxtjs/google-fonts"],
  css: ['~/assets/css/ionic.css'],
  ionic: {
    css: {
      utilities: true
    }
  },
  googleFonts: {
    download: false,
    families: {
      Inter: [500, 700],
      Merriweather: [300],
      Raleway: [500],
      Poppins: [500, 700],
      OpenSans: [200, 500],
      'Roboto+Slab': [200, 400, 600]
    }
  },
  experimental: {
    appManifest: false
  }
})