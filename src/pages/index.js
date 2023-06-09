import Head from 'next/head'
import { Inter } from 'next/font/google'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'
import Page8 from './components/Page8'
import Page9 from './components/Page9'
import Page10 from './components/Page10'
import useWindowSize from '../hook/useWindowSize'
import ImageScroll from './components/ImageScroll'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const windowSize = useWindowSize();

  return (
    <>
      <Head>
        <title>3D-Avatar</title>
        <meta name="description" content="An interactive 3d avatar from the world of Metaverse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
      <>
          <ImageScroll width={windowSize.width} height={windowSize.height} />
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
          <Page7/>
          <Page8/>
          <Page9/>
          <Page10/>

      </>
    </>
  )
}
