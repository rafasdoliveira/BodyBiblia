'use client'
import Input from '../components/form/input/input'
import Select from '../components/form/select/select'
import styles from './page.module.css'


export default function createChallenge() {

    const listChallenge = {
        opcao: "Selecione uma  opção",
        opcao1: "Atividade",
        opcao2: "Pontos por movimentação",
        opcao3: "Duração",
        opcao4: "Distância", 
        opcao5: "Passos",
        opcao6: "Calorias"
      };

    const listBible = {

    };

    return(
    <div>
        <div>
            Crie um desafio
        </div>
        <div>
            <section>
                <form>
                    <Input label='Nome do grupo' type='text' name='gender' id='inGroupName' placeholder='Defina um nome para seu grupo'/> 
                    {/* onChange={(e) => setEmail(e.target.value)}  */}
                    <Input label='Descrição' type='text' name='gender' id='inDescription' placeholder='Defina uma descrição para seu grupo'/>
                    <Input label='Data de Início' type='date' name='gender' id='inStartDate'/>                    
                    <Input label='Data Final' type='date' name='gender' id='inEndDate' placeholder='Descrição'/>        
                    <Select name="bible" id="bible" text="Escolha um livro a ser lido" options={listBible} />
                    <Select name="nome" id="identificador" text="Escolha um modelo de pontuação" options={listChallenge} />
                    <Input label='Data Final' type='submit' name='gender' id='inGender' placeholder='Descrição' value='Cadastrar'/>
                </form>
            </section>
        </div>
    </div>)
}