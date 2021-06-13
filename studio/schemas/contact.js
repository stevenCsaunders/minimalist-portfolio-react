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
      type: 'socialIcon'
    },
    {
      name: 'twitterIcon',
      title: 'Twitter Icon',
      type: 'socialIcon'
    },
    {
      name: 'linkedInIcon',
      title: 'LinkedIn Icon',
      type: 'socialIcon'
    }
  ],
}
