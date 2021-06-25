import meta from '../symbols/meta';

export default {
  file: 'content/pages/contact.yml',
  label: 'Kontakt',
  name: 'contact',
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
      default: 'contact',
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
      label: 'Kontakt',
      name: 'contact',
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
          widget: 'text',
        },
        {
          label: 'Maps',
          name: 'maps',
          widget: 'string',
        },
      ],
    },
  ],
};
