export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'heroContent',
      title: 'Hero Content',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      fields: [
        {
          name: 'mediaTypeWidth',
          title: 'Media Type Width',
          type: 'string',
          description: 'Mobile, tablet, or desktop'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Needed for SEO and Accesibility'
        },
      ]
    },
    {
      name: 'aboutContent',
      title: 'About Me Content',
      type: 'blockContent',
    },
    {
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      fields: [
        {
          name: 'mediaTypeWidth',
          title: 'Media Type Width',
          type: 'string',
          description: 'Mobile, tablet, or desktop'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Needed for SEO and Accesibility'
        },
      ]
    },
  ],
}
