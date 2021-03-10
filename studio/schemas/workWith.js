export default {
  name: 'workWith',
  title: 'Work With',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'workWithContent',
      title: 'Work With Content',
      type: 'string',
    }
  ]
}