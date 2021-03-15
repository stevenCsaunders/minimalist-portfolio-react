export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  // __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Tile',
      type: 'string'
    },
    {
      name: 'portfolioItemDescription',
      title: 'Portdolio Project Description',
      type: 'blockContent',
    },
    {
      name: 'portfolioImage',
      title: 'Portfolio Project Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }
  ],
}