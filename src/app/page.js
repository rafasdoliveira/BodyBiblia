import Title from '@/src/app/components/title/title'
import Button from '@/src/app/components/button/button'
import Footer from '@/src/app/components/footer/footer'

import styles from '@/src/app/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        <Title title='BodyBiblia - 1ª Versão!' />     
        <p>
          Clique nos botões para interagir!
        </p>
      </div>
      <div className={styles.botoes}> 
        <Button text= "Atividades" link="/screens/atividades" />
        <Button text= "Cadastros" link="/screens/cadastros" />
        <Button text= "Desafios" link="/screens/desafios" />
      </div>
      <Footer/>
    </main>
  )
}
