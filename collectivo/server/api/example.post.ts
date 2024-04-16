// This is an example of a custom API endpoint that can be called by Directus

export default defineEventHandler(async (event) => {
  // Protect route with API Token
  verifyCollectivoApiToken(event);

  return "Hello World!";
});
