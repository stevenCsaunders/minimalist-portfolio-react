export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Contact Title',
      type: 'string'
    },
    {
      name: 'contactIntro',
      title: 'Contact Intro',
      type: 'blockContent',
    },
    {
      name: 'githubIcon',
      title: 'Github Icon',
      type: 'image',
      options: {
        hotspot: false
      },
      fields: [
        {
          name: 'link',
          title: 'Github Link',
          type: 'string',
          description: 'Please use full http:// or https:// url'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    },
    {
      name: 'twitterIcon',
      title: 'Twitter Icon',
      type: 'image',
      options: {
        hotspot: false
      },
      fields: [
        {
          name: 'link',
          title: 'Twitter Link',
          type: 'string',
          description: 'Please use full http:// or https:// url'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    },
    {
      name: 'linkedInIcon',
      title: 'LinkedIn Icon',
      type: 'image',
      options: {
        hotspot: false
      },
      fields: [
        {
          name: 'link',
          title: 'LinkedIn Link',
          type: 'string',
          description: 'Please use full http:// or https:// url'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }
  ],
}
