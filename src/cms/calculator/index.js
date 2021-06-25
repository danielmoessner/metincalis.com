export default {
  name: 'category',
  label: 'Rechner',
  label_singular: 'Rechner',
  editor: {
    preview: false,
  },
  folder: 'content/calculators',
  slug: '{{fields.slug}}',
  create: true,
  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'calculator',
    },
    {
      label: 'Titel',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Sortierung',
      name: 'order',
      widget: 'number',
    },
    {
      label: 'Beschreibung',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
    {
      label: 'Kategorie',
      name: 'category',
      widget: 'string',
    },
    {
      label: 'Rechner Klasse',
      name: 'calculator',
      widget: 'string',
      hint: 'https://www.baufi-lead.de/baufilead/partner/dvvEderFNPvzhryAcDJwqVsqxpCjmC/baufileadEinbinden.html',
    },
  ],
};
