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
				maxLength: 96,
			},
		},
    {
			name: 'mainImage',
			title: 'Main Project Images',
			type: 'array',
			of: [{
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
			}],
		},
		{
			name: 'projectOverview',
			title: 'Project Overview',
			type: 'blockContent',
		},
		{
			name: 'tech',
			title: 'Technology Categories',
			type: 'string',
			description: 'Spearate technologies by comma',
		},
		{
			name: 'buttonLink',
			title: 'Button Link',
			type: 'url',
		},
		{
			name: 'projectBackground',
			title: 'Project Background',
			type: 'blockContent',
		},
		{
			name: 'projectPreview',
			title: 'Project Preview Images',
			type: 'array',
			of: [{
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
			}],
		},
	],
}
