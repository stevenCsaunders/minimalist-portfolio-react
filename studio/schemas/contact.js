export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'contactIntro',
      title: 'Contact Intro',
      type: 'blockContent',
    },
  ],
}
