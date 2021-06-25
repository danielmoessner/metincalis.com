import meta from '../symbols/meta';

export default {
  file: 'content/pages/calculators.yml',
  label: 'Rechner',
  name: 'calculators',
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
      default: 'calculators',
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
      label: 'Rechner',
      name: 'calculators',
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
