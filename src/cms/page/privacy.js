export default {
  file: 'content/pages/dataProtection.md',
  name: 'dataProtection',
  label: 'Datenschutz',
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
      default: 'data-protection',
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
