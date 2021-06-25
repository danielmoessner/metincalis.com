export default {
  name: 'service',
  label: 'Angebote',
  label_singular: 'Angebot',
  editor: {
    preview: false,
  },
  folder: 'content/service',
  slug: '{{fields.slug}}',
  create: true,

  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'service',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
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
      label: 'Sortierung',
      name: 'order',
      widget: 'number',
    },
    {
      label: 'Icon',
      name: 'icon',
      widget: 'text',
      hint: 'https://heroicons.com/',
    },
    {
      label: 'Beschreibung',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Rechner Button',
      widget: 'object',
      name: 'calcButton',
      required: false,
      fields: [
        {
          label: 'Text',
          name: 'text',
          widget: 'string',
          required: false,
        },
        {
          label: 'Rechner',
          name: 'calculator',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Link Button',
      widget: 'object',
      name: 'linkButton',

      fields: [
        {
          label: 'Text',
          name: 'text',
          widget: 'string',
          required: false,
        },
        {
          label: 'Link',
          name: 'link',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Text',
      name: 'body',
      widget: 'markdown',
      required: false,
    },
  ],
};
