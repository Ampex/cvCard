import { Grid, Link } from '@nextui-org/react'

export default function Links(): JSX.Element {
  const links = [
    {
      label: 'Github',
      url: 'https://github.com/Ampex',
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/bkasperski-frontend/',
    },
    {
      label: 'Email',
      url: 'mailto:kasperski.blazej@gmail.com',
    },
  ].map(({ label, url }) => (
    <Grid key={label}>
      <Link icon block color="secondary" key={url} href={url}>
        {label}
      </Link>
    </Grid>
  ))
  return <>{links}</>
}
