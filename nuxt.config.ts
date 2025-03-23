// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  builder: "rspack",
  app: {
    cdnURL: "/detector/",
  },
  imports: { autoImport: false },
});
