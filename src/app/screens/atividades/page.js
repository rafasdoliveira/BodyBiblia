import Title from '@/src/app/components/title/title'
import Button from '@/src/app/components/button/button'
import Footer from '@/src/app/components/footer/footer'

import styles from '@/src/app/page.module.css'

export default function Atividades() {
  return (
    <main>
      <div>
        <Title title='Atividades' />     
      </div>
      <div className={styles.botoes}> 
        <Button text= "Enviar Atividade" link='/screens/atividades/enviarAtividade' />
        <Button text= "Entrar em um desafio" link="/screens/atividades/consultarAtividade" />
      </div>
      <div>
        <Button text= "Voltar para página inicial" link="/"/>
      </div>
      <Footer/>
    </main>
  )
}
