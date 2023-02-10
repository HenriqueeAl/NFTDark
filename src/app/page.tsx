import { Creators } from '@/components/creators/Creators'
import { Explore } from '@/components/explore/Explore'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { Live } from '@/components/liveauctions/Live'
import { Paterns } from '@/components/paterns/Paterns'
import { Popular } from '@/components/popular/Popular'
import { Ready } from '@/components/ready/ready'
import { Work } from '@/components/work/Work'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Hero></Hero>
      <Paterns></Paterns>
      <Live></Live>
      <Work></Work>
      <Popular></Popular>
      <Explore></Explore>
      <Creators></Creators>
      <Ready></Ready>
      <Footer></Footer>
    </main>
  )
}
