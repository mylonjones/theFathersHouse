export default {
  name: 'ministry',
  title: 'Ministry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  orderings: [
    {
      title: 'date',
      name: 'date',
      by: [
        {field: 'publishedAt', diresction: 'desc'}
      ]
    }
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}