import type { NextPage } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Ig.News</title>
      </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, Welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acess to all the publications <br/>
          <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>
      <img src="/images/avatar.svg" alt="Girl coding in Notebook" />
    </main>
    </>
  )
}

export default Home