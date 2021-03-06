import dynamic from 'next/dynamic'
import Head from 'next/head'

import Footer from './Footer'

const Navigation = dynamic(() => import('@/components/layout/Navigation'), { ssr: false })

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title ? `${title} - Pastrim Pro` : 'Pastrim Pro'}</title>

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* <script src="https://feedbucket.app/js/tool.js" defer></script>
        <script
          module
          src="https://feedbucket.app/js/feedbucket.js"
          feedbucket-key="YGf0o3MVRI8Q5iepEDp5"
          defer
        ></script> */}
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : ''}`}>
        {/* Navigation here */}
        <Navigation />

        {children}
        <Footer />
        {/* Footer here */}
      </div>
    </>
  )
}
