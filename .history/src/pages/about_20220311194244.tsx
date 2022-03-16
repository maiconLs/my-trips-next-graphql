import client from 'graphql/client'
import AboutTemplate from 'templates/About'

export default function AboutPage(){
  return <AboutTemplate/>
}

export const getStaticProps = async () => {
  client.request(GET_PAGES)
}
