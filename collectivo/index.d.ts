declare global {
  // Add custom collection of this extension to the database schema
  // This type will then be available through the directus client

  interface CollectivoSchema {
    example_collection: ExampleCollection[];
  }

  interface ExampleCollection {
    id: number;
    example_field: string;
  }
}

export {};
