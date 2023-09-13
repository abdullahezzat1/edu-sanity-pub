import {defineField, defineType} from 'sanity'
import EnhancedString from '../src/components/EnhancedString'
import {hideWhenDisabled, isNotAdmin, validateAlpha} from '../src/util/util'

export const product = defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().max(50).custom(validateAlpha),
      components: {
        input: EnhancedString,
      },
    }),
    defineField({
      name: 'sku',
      type: 'string',
      title: 'SKU',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      hidden: hideWhenDisabled
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      hidden: hideWhenDisabled
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      initialValue: 0,
      validation: (Rule) => Rule.required().positive(),
      hidden: hideWhenDisabled
    }),
    defineField({
      title: 'Image URL',
      name: 'imageUrl',
      type: 'url',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
      },
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      readOnly: isNotAdmin,
    }),
    defineField({
      name: 'video',
      type: 'file',
      Description: 'Video',
      title: 'Video',
      options: {accept: '.mp4'},

    }),
  ],
})

export default product
