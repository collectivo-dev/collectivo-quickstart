<script setup lang="ts">
import { readItems } from "@directus/sdk";

// Requires authentication to view this page
definePageMeta({
  middleware: ["auth"],
});

// Set the title of the page
setCollectivoTitle("Example Page");

// Use translations
const { t } = useI18n();

// Get custom data
const directus = useDirectus();
const data = ref(null);

// Fetch data from Directus
const fetchData = async () => {
  data.value = await directus.request(readItems("example_collection"));
  console.log("Fetched data: ", data.value);
};

fetchData();
</script>

<template>
  <CollectivoContainer>
    Hello World! This is a custom page. The source code can be found in
    'pages/example/index.vue'. Use vue components and tailwind classes to design
    your pages. You can replace 'example' with the name of your extension.
    Namespacing will avoid conflicts with other extensions.
  </CollectivoContainer>
  <div class="gap-5 space-y-5 columns-1 md:columns-2">
    <CollectivoCard title="Translation" color="green">
      <template #content>
        The following will automatically be translated:
        <span class="font-bold">{{ t("Example (EN)") }}</span>
      </template>
    </CollectivoCard>
    <CollectivoCard title="Data fetching" color="blue">
      <template #content>
        The following data is loaded from the custom database collection
        'example_collection'. The source code can be found in '/server'.
        <div class="bg-gray-200 mt-3 rounded p-3 text-sm">
          {{ data }}
        </div>
      </template>
    </CollectivoCard>
    <CollectivoCard title="Menu items" color="orange">
      <template #content>
        The menu item on the left is defined in '/plugins/setup.ts'.
      </template>
    </CollectivoCard>
    <ExampleComponent></ExampleComponent>
  </div>
</template>
