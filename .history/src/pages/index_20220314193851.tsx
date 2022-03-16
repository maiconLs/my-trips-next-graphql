import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 60,
    props: {
      places
    }
  }
}