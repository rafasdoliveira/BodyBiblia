'use client'

import Input from '../components/form/input/input'
import Select from '../components/form/select/select'
import Button from '../components/button/button'
import styles from './page.module.css'
import axios from 'axios'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'

export default function CreateGroup() {

    //Constantes para capturar os valores de input
    
    // const router = useRouter()
    const [groupname, setGroupname] = useState('') 
    const [description, setDescription] = useState('')
    const [startdate, setStartdate] = useState('') 
    const [enddate, setEnddate] = useState('') 
    const [book, setBook] = useState('') 
    const [scoremode, setScoremode] = useState('') 

    //Essa função é comumente utilizada em componentes React para gerenciar o estado de um campo de formulário.
    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    //   };

      //Função utilizada para registrar os dados no banco
      function createChallenge(){
        axios.post('http://localhost:8081/createchallenge',{
            groupname: groupname,
            description: description,
            startdate: startdate,
            enddate: enddate,
            book: book,
            scoremode: scoremode
        },
            )  
            .then(function (response) {
                alert("Cadastro realizado com sucesso")
                console.log(response);
                // router.push("/")
          })
            .catch(function (error) {
                alert("Ops! Algo deu errado.. Fale com o Rafael!")
                console.log(error);
          });
    }

    //Constantes para os selects
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
            <h1>
                Crie um desafio
            </h1>
        </div>
        <div>
            <section>
                <form>
                    <Input label='Nome do grupo' type='text' name='inGroupName' id='inGroupName' placeholder='Defina um nome para seu grupo'
                    onChange={(e) => setGroupname(e.target.value)} />
                    <Input label='Descrição' type='text' name='inDescription' id='inDescription' placeholder='Defina uma descrição para seu grupo'
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input label='Data de Início' type='date' name='inStartDate' id='inStartDate' onChange={(e) => setStartdate(e.target.value)} />                    
                    <Input label='Data Final' type='date' name='inEndDate' id='inEndDate' onChange={(e) => setEnddate(e.target.value)} />        
                    <Select name="inBook" id="inBook" text="Escolha um livro a ser lido" options={listBible} onChange={(e) => setBook(e.target.value)} />
                    <Select name="inScoreMode" id="inScoreModes" text="Escolha um modelo de pontuação" options={listChallenge} onChange={(e) => setScoremode(e.target.value)} />
                    <Input type='submit' onClick={createChallenge} value='Registrar' /> 
                </form>
            </section>
            <div>
                <Button text= "Voltar para página inicial" link="/"/>
            </div>
        </div>
    </div>)
}