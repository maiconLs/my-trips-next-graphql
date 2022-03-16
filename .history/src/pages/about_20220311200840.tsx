import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  return <PageTemplate heading={''} body={''}/>
}

export asycn functi {
  const { pages } = await client.request(GET_PAGES)

}
