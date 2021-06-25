import meta from '../symbols/meta';

export default {
  file: 'content/pages/home.yml',
  label: 'Startseite',
  name: 'home',
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
      default: 'home',
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
          label: 'Titel Farbig',
          name: 'titleColor',
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
      label: 'Formular',
      name: 'form',
      widget: 'object',
      fields: [
        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Label 1',
          name: 'label1',
          widget: 'string',
        },
        {
          label: 'Label 2',
          name: 'label2',
          widget: 'string',
        },
        {
          label: 'Label 3',
          name: 'label3',
          widget: 'string',
        },
        {
          label: 'Label 4',
          name: 'label4',
          widget: 'string',
        },
        {
          label: 'Button',
          name: 'button',
          widget: 'string',
        },
        {
          label: 'Untertext',
          name: 'subtext',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Angebot',
      name: 'offer',
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
        {
          label: 'Angebote',
          name: 'offers',
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
              widget: 'text',
            },
            {
              label: 'Link',
              name: 'link',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Button',
          name: 'button',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Plan',
      name: 'plan',
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
        {
          label: 'Schritte',
          name: 'steps',
          widget: 'list',
          hint: 'Bitte 3 oder 4 Schritte angeben. Bei einer anderen Anzahl funktioniert das Design nicht.',
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
      ],
    },
    {
      label: 'Ratgeber',
      name: 'articles',
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
        {
          label: 'Button',
          name: 'button',
          widget: 'string',
        },
      ],
    },
    {
      label: 'CTA',
      name: 'cta',
      widget: 'object',
      fields: [
        {
          label: 'Text oben',
          name: 'textTop',
          widget: 'string',
        },
        {
          label: 'Text unten',
          name: 'textBottom',
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
