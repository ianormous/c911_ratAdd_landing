import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
// import ogImage from '../../public/og_img.jpg'

// import sitePreview  from '../../public/sitePreview.png'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta property="og:title" content="Critter 911 Rat & Animal Solutions" />
        <meta property="og:description" content="Animal removal cheapest price guaranteed" />
        {/* <meta property="og:image" content={ogImage} /> */}
        <meta property="og:image" content="/og_img.jpg" />
        <meta property="og:url" content="https://www.critter911advertise.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://www.google.com/recaptcha/api.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></Script>
      </body>
    </Html>
  )
}
