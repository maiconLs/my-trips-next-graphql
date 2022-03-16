import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  await client.request(GET_PAGES)
}
