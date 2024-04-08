export default defineNuxtPlugin({
  name: "example-setup",
  async setup() {
    const menu = useCollectivoMenus();

    menu.value.main.push({
      label: "Example",
      icon: "i-heroicons-document-text",
      to: "/example",
      order: 200,
    });
  },
});
