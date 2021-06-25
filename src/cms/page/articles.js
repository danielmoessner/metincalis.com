import meta from '../symbols/meta';

export default {
  file: 'content/pages/articles.yml',
  label: 'Ratgeber',
  name: 'articles',
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
      default: 'articles',
    },
    meta,
    {
      label: 'Header',
      name: 'header',
      widget: 'object',
      fields: [
        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Artikel',
      name: 'articles',
      widget: 'object',
      fields: [
        {
          label: 'Lesen Button',
          name: 'button',
          widget: 'string',
        },
      ],
    },
  ],
};
