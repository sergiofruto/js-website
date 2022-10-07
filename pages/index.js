import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import HomepageContent from '@components/HomepageContent'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <HomepageContent></HomepageContent>
        <Footer />
      </main>

    </div>
  )
}
