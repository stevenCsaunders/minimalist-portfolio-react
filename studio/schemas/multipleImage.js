export default {
	name: 'multipleImage',
	title: 'Image Upload',
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
}
