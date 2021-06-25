export default {
  name: 'setting',
  label: 'Einstellungen',
  label_singular: 'Einstellung',
  delete: false,
  editor: {
    preview: false,
  },
  files: [
    {
      file: 'content/settings/global.yml',
      label: 'Global',
      name: 'global-settings',
      preview: false,
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'setting',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'global',
        },
        {
          label: 'Favicon',
          name: 'favicon',
          widget: 'image',
        },
        {
          label: 'Logo',
          name: 'logo',
          widget: 'image',
        },
      ],
    },
    {
      file: 'content/settings/teaser.yml',
      label: 'Teaser',
      name: 'teaser',
      preview: false,
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'setting',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'teaser',
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
        },
        {
          label: 'Button Text',
          name: 'buttonText',
          widget: 'string',
        },
        {
          label: 'Button Link',
          name: 'buttonLink',
          widget: 'string',
        },
      ],
    },
    {
      file: 'content/settings/contact.yml',
      label: 'Kontaktinformationen',
      name: 'contact',
      preview: false,
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'setting',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'contact',
        },
        {
          label: 'Telefonnummer',
          name: 'phone',
          widget: 'string',
        },
        {
          label: 'E-Mail',
          name: 'email',
          widget: 'string',
        },
        {
          label: 'Adresse',
          name: 'address',
          widget: 'text',
        },
      ],
    },
    {
      file: 'content/settings/footer.yml',
      label: 'Footer',
      name: 'footer',
      preview: false,
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'setting',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'footer',
        },
        {
          label: 'Spalte 1',
          name: 'column1',
          widget: 'string',
        },
        {
          label: 'Spalte 2',
          name: 'column2',
          widget: 'string',
        },
        {
          label: 'Spalte 3',
          name: 'column3',
          widget: 'string',
        },
        {
          label: 'Spalte 4',
          name: 'column4',
          widget: 'string',
        },
        {
          label: 'Copyright',
          name: 'copyright',
          widget: 'string',
        },
      ],
    },
  ],
};
