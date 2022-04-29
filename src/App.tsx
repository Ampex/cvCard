import {
  Card,
  Container,
  Grid,
  Text,
  Avatar,
  Spacer,
  Tooltip,
} from '@nextui-org/react'
import './App.css'
import Links from './components/Links'
import Skills from './components/Skills'

export default function App() {
  return (
    <Container sm>
      <Grid.Container alignContent="center" css={{ height: '100vh' }}>
        <Card css={{ p: '$10' }}>
          <Grid.Container>
            <Grid.Container justify="space-between" gap={2}>
              <Grid sm={8} direction="column">
                <Text css={{ letterSpacing: 'normal' }} h1>
                  Błażej Kasperski
                </Text>
                <Text size={20} color="#888888">
                  React Software Engineer
                </Text>
                <Spacer y={1} />
                <Text>
                  I`m an experienced Front-end web developer interested in
                  applying best cutting edge technologies to real life use web
                  applications.
                </Text>
              </Grid>
              <Grid>
                <Tooltip
                  content={'Developers love React.js'}
                  rounded
                  color="secondary"
                >
                  <Avatar
                    bordered
                    color="gradient"
                    src="https://ampex.github.io/cvCard/static/media/bkasperski.a393f900.jpg"
                    css={{ size: 180 }}
                  />
                </Tooltip>
              </Grid>
            </Grid.Container>
            <Grid.Container alignItems="center" justify="space-between" gap={2}>
              <Grid>
                <Text h2>Skills</Text>
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Skills />
            </Grid.Container>
          </Grid.Container>
        </Card>
        <Spacer y={1} />
        <Grid.Container justify="flex-end" gap={1}>
          <Links />
        </Grid.Container>
      </Grid.Container>
    </Container>
  )
}
