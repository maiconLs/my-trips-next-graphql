import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/'))

export default function Home() {
  return <Map />
}
