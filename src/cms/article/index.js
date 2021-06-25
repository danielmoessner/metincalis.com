export default {
  name: 'article',
  label: 'Ratgeber',
  label_singular: 'Ratgeber',
  editor: {
    preview: false,
  },
  folder: 'content/article',
  slug: '{{fields.slug}}',
  create: true,
  preview_path: 'ratgeber/{{fields.slug}}/',
  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'article',
    },
    {
      label: 'Titel',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
    {
      label: 'Datum',
      name: 'date',
      widget: 'datetime',
      date_format: 'DD.MM.YYYY',
      time_format: '',
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
