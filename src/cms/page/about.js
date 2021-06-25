import meta from '../symbols/meta';

export default {
  file: 'content/pages/about.yml',
  label: 'Über uns',
  name: 'about',
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
      default: 'about',
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
      label: 'Über uns',
      name: 'about',
      widget: 'object',
      fields: [
        {
          label: 'Vortitel',
          name: 'pretitle',
          widget: 'string',
        },
        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Vorteile',
          name: 'advantages',
          widget: 'list',
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
          label: 'Bild',
          name: 'image',
          widget: 'image',
        },
      ],
    },
    {
      label: 'CTA',
      name: 'cta',
      widget: 'object',
      fields: [
        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Button',
          name: 'button',
          widget: 'string',
        },
      ],
    },
  ],
};
