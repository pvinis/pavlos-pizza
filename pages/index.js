import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pavlos Pizza = Best Pizza</title>
		<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>"></link>
	  </Head>

	  <p>Pay your respects by <a href="mailto:ilove@pavlos.pizza?subject=rip kebec&body=F">emailing me an F</a>.</p>

		<video autoPlay muted loop>
		<source src="/bye-kebec.mp4" type="video/mp4" />
		</video>

    </div>
  )
}
