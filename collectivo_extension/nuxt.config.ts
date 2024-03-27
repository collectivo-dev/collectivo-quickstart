// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  // Add your extensions here
  // https://nuxt.com/docs/getting-started/layers
  extends: ["@collectivo/collectivo"],
  i18n: {
    lazy: true,
    langDir: "./lang",
    locales: [
      { code: "en", file: "en.json" },
      { code: "de", file: "de.json" },
    ],
  },
});
