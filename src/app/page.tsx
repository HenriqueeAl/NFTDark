import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { Live } from '@/components/liveauctions/Live'
import { Paterns } from '@/components/paterns/Paterns'
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
    </main>
  )
}
