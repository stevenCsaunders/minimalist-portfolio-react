export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'heroContent',
      title: 'Hero Content',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageWithAlt',
      option: {
        hotspot: true
      }
    },
    {
      name: 'aboutContent',
      title: 'About Me Content',
      type: 'blockContent',
    },
    {
      name: 'aboutImage',
      title: 'About Me Image',
      type: 'imageWithAlt',
      option: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
}
