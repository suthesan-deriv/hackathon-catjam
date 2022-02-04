import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = {
    first_name: 'Test',
    last_name: 'Me',
    address_line_1: 'test line 1',
    address_line_2: 'test line 2',
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'Malaysia',
    phone: {
      mobile: '0123456789',
      work: '0123456789',
    },
    email: 'john_doe@example.com',
    company: 'Mobstac Inc.',
    designation: 'Android Developer',
  }

  const [qr_url, setQrUrl] = useState('')

  const handleGetQr = (data) => {
    let getQr = {
      method: 'POST',
      body: JSON.stringify(data),
    }
    fetch('api/get_qr', getQr)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQrUrl(data.qr_url)
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>vCard - CatJam</title>
        <meta name="description" content="vCard QR Code Generator - CatJam style" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home Page</h1>
        <button onClick={() => handleGetQr(data)}>Get QR</button>
        {qr_url && <img src={qr_url} />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
