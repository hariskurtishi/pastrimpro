import About from '@/components/sections/About'
import HeaderSection from '@/components/sections/HeaderSection'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Header Section Example */}
      <HeaderSection />
      <About />
      <Services />
      <Projects />
    </Layout>
  )
}
