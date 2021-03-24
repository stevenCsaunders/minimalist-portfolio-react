export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			},
		},
    {
			name: 'mainImage',
			title: 'Main Project Images',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string'
				}
			]
		},
		{
			name: 'projectOverview',
			title: 'Project Overview',
			type: 'blockContent',
		},
		{
			name: 'roles',
			title: 'Roles',
			type: 'string',
			description: 'Spearate roles by /',
		},
		{
			name: 'tech',
			title: 'Technology Categories',
			type: 'string',
			description: 'Spearate technologies by /',
		},
		{
			name: 'projectBackground',
			title: 'Project Background',
			type: 'blockContent',
		},
		{
			name: 'projectPreview1',
			title: 'Project Preview Image 1',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string'
				}
			]
		},
		{
			name: 'projectPreview2',
			title: 'Project Preview Image 2',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string'
				}
			]
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
