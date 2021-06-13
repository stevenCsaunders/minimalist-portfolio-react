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
      type: 'imageWithOptions'
    },
    {
      name: 'aboutContent',
      title: 'About Me Content',
      type: 'blockContent',
    },
    {
      name: 'aboutImage',
      title: 'About Image',
      type: 'imageWithOptions'
    },
  ],
}
