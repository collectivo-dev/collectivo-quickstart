// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  extends: [
    "@collectivo/collectivo",
    "@collectivo/payments",
    "@collectivo/memberships",
  ],
  vite: {
    optimizeDeps: {
      include: ["yup"],
    },
  },
});
