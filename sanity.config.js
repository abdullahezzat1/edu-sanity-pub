import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'
import logoPlugin from './src/plugins/logo'
import { navbarPlugin } from './src/plugins/navbar'

export default defineConfig({
  name: 'default',
  title: 'edu-sanity',

  projectId: 'w40d3yrq',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    logoPlugin(),
    navbarPlugin()
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
