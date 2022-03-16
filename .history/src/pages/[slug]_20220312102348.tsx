import client from 'graphql/client'
import { GET_PAGES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplate heading={''} body={''} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 60, // once per day
    props: {
      place
    }
  }
