export default {
  file: 'content/pages/imprint.md',
  name: 'imprint',
  label: 'Impressum',
  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'hidden',
      default: 'imprint',
    },
    {
      label: 'Titel',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Kategorie',
      name: 'category',
      widget: 'string',
    },
    {
      label: 'Beschreibung',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Inhalt',
      name: 'body',
      widget: 'markdown',
    },
  ],
};
