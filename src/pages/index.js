import Head from 'next/head'
import { Inter } from 'next/font/google'
// import Page2 from './components/Page2'
// import Page3 from './components/Page3'
// import Page4 from './components/Page4'
// import Page5 from './components/Page5'
// import Page6 from './components/Page6'
// import Page7 from './components/Page7'
// import Page8 from './components/Page8'
// import Page9 from './components/Page9'
// import Page10 from './components/Page10'
import useWindowSize from '../hook/useWindowSize'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const DynamicImageScroll = dynamic(() => import('./components/ImageScroll'), {
  ssr: false,
});

const DynamicPage2 = dynamic(() => import('./components/Page2'), {
  ssr: false,
});

const DynamicPage3 = dynamic(() => import('./components/Page3'), {
  ssr: false,
});

const DynamicPage4 = dynamic(() => import('./components/Page4'), {
  ssr: false,
});

const DynamicPage5 = dynamic(() => import('./components/Page5'), {
  ssr: false,
});

const DynamicPage6 = dynamic(() => import('./components/Page6'), {
  ssr: false,
});

const DynamicPage7 = dynamic(() => import('./components/Page7'), {
  ssr: false,
});

const DynamicPage8 = dynamic(() => import('./components/Page8'), {
  ssr: false,
});

const DynamicPage9 = dynamic(() => import('./components/Page9'), {
  ssr: false,
});

const DynamicPage10 = dynamic(() => import('./components/Page10'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const windowSize = useWindowSize();

  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

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
      {
        isClientLoaded ? 
        <>
        <DynamicImageScroll width={windowSize.width} height={windowSize.height} />
          <DynamicPage2/>
          <DynamicPage3/>
          <DynamicPage4/>
          <DynamicPage5/>
          <DynamicPage6/>
          <DynamicPage7/>
          <DynamicPage8/>
          <DynamicPage9/>
          <DynamicPage10/>
          </>
          :
          <h1>loading</h1>
      }
          

      </>
    </>
  )
}
