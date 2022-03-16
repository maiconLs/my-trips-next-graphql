import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/M'))

export default function Home() {
  return <Map />
}
