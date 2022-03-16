import dynamic from 'next/dynamic'

const Map = dynamic(() => import '')

export default function Home() {
  return <Map />
}
