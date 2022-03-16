import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { GetPagesQuery, GetPageBySlugQuery } from 'graphql/generated/graphql'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Place({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, { first: 3 })

  const paths = places.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPageBySlugQuery>(GET_PLACE_BY_SLUG, {
    slug: `${params?.slug}`,
  })

  if (!place) return { notFound: true }

  return {
    props: {
      heading: place.heading,
      body: place.body.html,
    },
  }
}
