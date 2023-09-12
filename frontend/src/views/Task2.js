export function Task2() {
  return (
    <>
      <h2>Custom Schema</h2>
      <code><pre>
        {`
        // category schema
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
        });

        //product schema

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
          ]
        });
        `}
        </pre>
      </code>
    </>
  )
}

export default Task2;
