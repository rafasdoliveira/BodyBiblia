import Link from 'next/link'
import Data from './components/date/date'
import Footer from './components/footer/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
       <Data/>
        <h1>
          BodyBiblia - 3ª Edição!
        </h1>      
        <p>
          Clique nos botões para interagir!
        </p>
      </div>
      <div className={styles.botoes}> 
        <div className={styles.links}>
          <Link href="/signup">Inscreva-se!</Link>
        </div>
        <div className={styles.links}>
          <Link href="/rules">Regulamento</Link>
        </div>     
        <div className={styles.links}>
          <Link href="/forms">Enviar Formulário</Link>
        </div>
        <div className={styles.links}>
          <Link href="/envios">Consultar Envios</Link>
        </div>
      </div>
      
      <Footer/>
    </main>
  )
}
