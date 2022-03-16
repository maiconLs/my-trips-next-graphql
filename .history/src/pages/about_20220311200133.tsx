import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import PageTemplate from 'templates/About'

export default function AboutPage() {
  return <PageTemplate heading={''} body={''}/>
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  return {
    props:{}
  }
}
