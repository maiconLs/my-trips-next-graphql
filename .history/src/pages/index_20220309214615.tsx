import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'))

export default function Home() {
  return <Map />
}
