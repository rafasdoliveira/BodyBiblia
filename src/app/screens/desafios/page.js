import Title from '@/src/app/components/title/title'
import Button from '@/src/app/components/button/button'
import Footer from '@/src/app/components/footer/footer'

import styles from '@/src/app/page.module.css'

export default function Home() {
  return (
    <main>
      <div>
        <Title title='BodyBiblia - 1ª Versão!' />     
      </div>
      <div className={styles.botoes}> 
        <Button text= "Criar um desafio" link='/screens/criarDesafio' />
        <Button text= "Entrar em um desafio" link="/screens/desafios/entrarDesafio" />
        <Button text= "Meus desafios" link="/screens/joinchallenge" />
      </div>
      <div>
        <Button text= "Voltar para página inicial" link="/"/>
      </div>
      <Footer/>
    </main>
  )
}
