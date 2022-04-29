import { Grid, Text, Progress } from '@nextui-org/react'

export default function Skills(): JSX.Element {
  const skills = [
    { label: 'React.js', value: 100 },
    { label: 'Next.js', value: 80 },
    { label: 'Node.js', value: 70 },
    { label: 'REST API', value: 90 },
    { label: 'MongoDB', value: 80 },
    { label: 'Firebase', value: 75 },
    { label: 'HTML, CSS', value: 90 },
    { label: '@Mui', value: 90 },
    { label: '@NextUI', value: 80 },
    { label: '@AntD', value: 90 },
  ].map(({ label, value }) => (
    <Grid key={label} sm={6} xs={12} direction="column" css={{ pb: '$0' }}>
      <Text>{label}</Text>
      <Progress color="gradient" size="sm" value={value} />
    </Grid>
  ))
  return <>{skills}</>
}
