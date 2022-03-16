import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}
