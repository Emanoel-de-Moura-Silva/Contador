import styles from '../styles/Home.module.css'
import Topo from '@/components/Topo'
import Corpo from '@/components/Corpo'


export default function Home() {
  return (
   <div className={styles.container}>
      <Topo />
      <Corpo />
   </div>
  )
}
