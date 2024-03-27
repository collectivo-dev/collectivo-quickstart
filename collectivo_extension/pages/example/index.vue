<script setup lang="ts">
// Requires authentication to view this page
definePageMeta({
  middleware: ["auth"],
});

// Set the title of the page
setCollectivoTitle("Example Page");
</script>

<template>
  <CollectivoContainer>
    <p>
      Hello World! This is a custom page. The source code can be found in
      'pages/example/index.vue'. Use vue components and tailwind classes to
      design your pages. You can replace 'example' with the name of your
      extension. Namespacing will avoid conflicts with other extensions.
    </p>
  </CollectivoContainer>

  <ExampleComponent></ExampleComponent>
</template>
