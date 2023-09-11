import { defineField, defineType } from "sanity";

export const category = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image'
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description'
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [
        defineField({
          type: 'reference',
          to: [{type: 'product'}]
        })
      ],
      title: 'Products'
    }),
  ]
})

export default category;
