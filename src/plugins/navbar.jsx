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
