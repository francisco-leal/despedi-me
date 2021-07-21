import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Break } from "components/Break"
import Emoji from "components/Emoji"
import camoes from "../public/camoes.png"
import styles from '../styles/background.module.css'

export default function Home() {
  return (
    <div className="flex h-screen justify-center">
      <Head>
        <title>Despedi-me!</title>
        <meta name="description" content="É demitir.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bg} />
      <div className={`${styles.bg} ${styles.bg2}`} />
      <div className={`${styles.bg} ${styles.bg3}`} />
      <div className="flex flex-col justify-center items-center w-96 max-w-1/4">
        <Image src={camoes} className="w-3/4" alt="Luís de Camões chateado contigo"/>
        <h1 className="text-center text-xl">Aprende português Caralho!</h1>
        <p>
          Se o teu chefe se chegou ao pe de ti e disse:<Break />
          <i>Põe-te no caralho, antes que o caralho se ponha em ti!</i><Break />
          Foste <b>despedido</b>.<Break />

          Se acordaste de manhã e decidiste mandar tudo pó caralho, <b><Link href="https://www.demiti.me/"><a className="text-yellow-600">demitiste-te</a></Link>.</b>
        </p>

        <footer><p className="text-center">© {new Date().getFullYear()} Sardinhas 2.0 <Emoji symbol="🐟" label="Fish"/></p></footer>
      </div>
    </div>
  )
}
