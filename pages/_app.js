import '../styles/globals.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: 'https://pastrimpro.com/',
          site_name: 'Pastrim Pro Gostivar',
          description: 'Cleaning Service, Pastrim profesional i shtëpive dhe zyrave.',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
