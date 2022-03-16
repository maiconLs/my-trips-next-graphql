import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'import

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({places}: MapProps) {
  return (
    <>
      <Map />
      <LinkWrapper href='/about'>
        <InfoOutline size={32} aria-label='About' />
      </LinkWrapper>
    </>
  )
}
