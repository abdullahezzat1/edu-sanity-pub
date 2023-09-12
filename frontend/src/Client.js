import {createClient} from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'w40d3yrq', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
})

export const builder = ImageUrlBuilder(client)

export default client
