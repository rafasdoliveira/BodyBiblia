import Link from 'next/link'
import Data from './components/date/date'
import Title from './components/title/title'
import Button from './components/button/button'
import Footer from './components/footer/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        {/* <Data/> */}
        <Title title='BodyBiblia - 3ª Edição!' />     
        <p>
          Clique nos botões para interagir!
        </p>
      </div>
      <div className={styles.botoes}> 
        <Button text= "Inscreva-se" link="/signup" />
        <Button text= "Regulamento" link="/rules" />
        <Button text= "Enviar Formulário" link="/forms" />
        <Button text= "Consultar Envios" link="/envios" />
      </div>
      
      <Footer/>
    </main>
  )
}
