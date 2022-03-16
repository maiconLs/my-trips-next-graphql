import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper'


const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return <Map />

  <LinkWrapper href="/about">
  <InfoOutline size={32} aria-label="About" />
</LinkWrapper>
}
