function Task5() {
  return (
    <code>
      <pre>
        {`
// Input customization
import { useCallback } from 'react'
import { Stack, Text, TextInput } from '@sanity/ui'
import { set, unset } from 'sanity'

/* eslint-disable react/react-in-jsx-scope, react/prop-types */

function EnhancedString(props) {
  const {
    onChange,
    value = '',
    elementProps,
    schemaType: {
      validation: [{
        _rules: validationRules = []
      } = {}
      ] = []
    } = {},
  } = props
  const maxLength = validationRules
    ? validationRules.find((rule) => rule.flag === 'max')?.constraint
    : undefined
  const colorStyle = typeof maxLength === 'number' && value?.length > maxLength ? { color: '#ff4274' } : { color: '#6eff54' }
  const handleChange = useCallback(
    (event) => onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
    [onChange],
  )

  return (
    <Stack space={3}>
      <TextInput {...elementProps} onChange={handleChange} value={value} />
      <Text size={1}>
        <span style={colorStyle}>
          Characters: {value?.length || 0} {typeof maxLength === 'number' ? \` / \${maxLength}\` : ''}
        </span>
      </Text>
    </Stack>
  )
}

export default EnhancedString;





// logo plugin

import {definePlugin} from 'sanity'

/* eslint-disable react/react-in-jsx-scope, react/prop-types */

function PumaLogo(props) {
  const { title = '' } = props;

  return (
    <div title={title} style={{ width: '80px', height: '60px', padding: 5 }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.2" style={{backgroundColor: 'var(--card-bg-color)'}}>
        <g style={{ transform: 'scale(0.05)' }}>
          <path
            style={{fill: 'var(--card-fg-color)'}}
            d="M179.5 36.2c10.3-3.5 24.6-33.8 38.7-32 5.9.8 29.8 48.5 29.8 48.5C439.8 62.1 676.6 294.5 707 318c14.8 11.4 76.8 75.6 190.4 125.4 46.6 20.5 93.5 29.3 137 26.1 58-4.2 122.9-55.1 162.8-124.5 50-86.8 71.3-237.9 215.7-323.6 20.2-11.9 66-38.7 92.5-5 21.3 27.4 3.7 72.5-18.5 94.1-14.1 13.7-39.5 27.5-87.8 50.3-16.4 7.8-43.2 27.8-53.6 35.9-51.8 39.5-89.4 129.2-131.1 227.3 0 0-17.9 48.2-96.4 100.1-13.2 8.6-1.3 15.9 13.2 34.4 18.4 24.4 55.5 124.1 50.7 275.6-.8 27 10.1 38.6 22.4 60.7 21.2 38 63.2 29.5 62.1 79.4-1.4 66.9 48 81.1 32.2 112.1-11.6 22.5-7.6 44.4-7.5 66.3 0 11.2 6 27.3-17 26.2-94.1-5.8-87.8-131.9-86.1-175.4 1.5-5.7-2.8-16-3.5-16.5-4.7-3.4-63.3-48.9-67.2-52.8-71.2-72.4-118.1-137.4-144.3-204.3-17.4-44.5-35.3-88.5-65.8-116.7-34.3-31.2-76.2-48.8-113-49-261.8-1.3-315.7-116.2-386.9-173.4-2.2-1.6-8.7-5.3-12.5-5.6-3.9.3-7.1 5-9.6 7.3-27.5 28.7-55.2 38.2-92.5 38.2-88.4 0-183.6-77.5-200.4-60.3-12.8 13.5-1.6 41.2-25.2 45.8-34 6.9-69.2-26.7-66.4-55.2 5.1-50.9 57.2-65.8 103-71 37.8-4 68.7 6.3 75.8 7.1 21.1 3 24.8-22.5 21.3-39-3.9-17.9-20.6-21.6-37.9-26.8-21.2-6.3-44.8 11.3-60.6 5.9-18.5-6.7-20-16.1-35.3-29.8-19.6-17-42.2-21.6-42.1-45.6 0-22.2 27-24 34.7-44.4 3.9-10.2 2.8-20.8 6.2-27 9.1-16.7 26.3-15.9 40.1-29.3C124.7 42.3 134 6.5 143.8 5c9.7-1.5 26 34.4 35.7 31.2z"
          />
        </g>
      </svg>
    </div>
  );
}

export const logoPlugin = definePlugin({
  name: 'logo-plugin',
  studio: {
    components: {
      logo: PumaLogo,
    },
  },
})

export default logoPlugin;



// navbar plugin

import {definePlugin, useWorkspace} from 'sanity'
import {Card, Stack, Text} from '@sanity/ui'

/* eslint-disable react/react-in-jsx-scope, react/prop-types */

function CustomNavbar(props) {
  const { dataset } = useWorkspace();

  return (
    <Stack>
      <Card padding={3} tone="primary">
        <Text size={1}>
          Using the <b>{dataset}</b> dataset
        </Text>
      </Card>

      {props.renderDefault(props)}
    </Stack>
  )
}

export const navbarPlugin = definePlugin({
  studio: {
    components: {
      navbar: CustomNavbar,
    },
  },
});




// custom validation and permission conditions...

export function validateAlpha(value) {
  return !!value.match(/^[a-zA-Z]*$/) || 'Name must contain letters only';
}

export function hideWhenDisabled({document}) {
  return !document?.enabled;
}

export function isNotAdmin({ currentUser }) {
  return currentUser?.role !== 'administrator';
}


  `}
      </pre>
    </code>
  )
}

export default Task5;
