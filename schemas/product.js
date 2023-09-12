import { defineField, defineType } from "sanity";

export const product = defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean'
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'sku',
      type: 'string',
      title: 'SKU',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color'
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      initialValue: 0,
      validation: Rule => Rule.required().positive()
    }),
    defineField({
      title: 'Image URL',
      name: 'imageUrl',
      type: 'url',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'video',
      type: 'file',
      Description: 'Video',
      title: 'Video',
      options: {accept: '.mp4'}
    }),
  ]
});

export default product;
