import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'

export default function Home({ props }: MapProps) {
  return <HomeTemplate props={props} />
}