
import Head from 'next/head'
import Casa from '../components/Casa'
export default function Home() {
  return (
    <>
      <div className=''>
       
        <Head>
          <link rel="shortcut icon" href="./realidade_virtual.png" />
          <title>Banner</title>
        </Head>
        <Casa />
      </div>
    </>
  )
}