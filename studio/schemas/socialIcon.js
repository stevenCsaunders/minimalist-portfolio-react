export default {
  name: 'socialIcon',
  title: 'Social Icon',
  type: 'image',
  options: {
    hotspot: false
  },
  fields: [
    {
      name: 'link',
      title: 'Social Icon Link',
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