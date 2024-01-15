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
      <div> 
        <Button text= "Cadastro Individual" link="/screens/cadastros/cadastroIndividual" />
        <Button text= "Cadastro Igreja" link="/screens/caIgreja" />
      </div>
      <div>
        <Button text= "Voltar para página inicial" link="/"/>
      </div>
      <Footer/>
    </main>
  )
}
