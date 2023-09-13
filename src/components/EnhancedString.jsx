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
          Characters: {value?.length || 0} {typeof maxLength === 'number' ? ` / ${maxLength}` : ''}
        </span>
      </Text>
    </Stack>
  )
}

export default EnhancedString
