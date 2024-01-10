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
    const [value, setValue] = useState('') 
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
            value: value,
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

    //Atividades
    const listScoreMode = {
        opcao: "Selecione uma  opção",
        opcao1: "Ponto por atividade",
        opcao2: "Maior distância"
      };
    // Buscar os livros da Bíblia a partir da API Bíblia Online
    const listBible = {
        opcao: "Selecione uma opção",
        opcao1: "Gênesis"
    };
    // Buscar as instituições a partir dos cadastros das igrejas        
    const listOsc = {
        opcao: "Selecione uma opção",
        opcao1: "Instituto Céu No Sertão",
        opcao2: "Instituto Vida Videira"
    };
    // Definir a duração do desafio de acordo com o livro com maior quantidade de capítulos da Bíblia
    const listNumbers = {};
        for (let i = 1; i <= 150; i++) {
        listNumbers[`opcao${i}`] = i.toString();
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
                    <Input label='Nome do Grupo' type='text' name='inGroupName' id='inGroupName' placeholder='Nome do Grupo' required
                    onChange={(e) => setGroupname(e.target.value)} />
                    <Input label='Descrição' type='text' name='inDescription' id='inDescription' placeholder='Descrição (Opcional)' onChange={(e) => setDescription(e.target.value)} />
                    <Input label='Data de Início' type='date' name='inStartDate' id='inStartDate' required onChange={(e) => setStartdate(e.target.value)} />   
                    <Select name="inNumbers" id="inNumbers" text="Defina a quantidade de dias" options={listNumbers} required onChange={(e) => setNumber(e.target.value)} />                 
                    <Input label='Data Final' type='date' name='inEndDate' id='inEndDate' required onChange={(e) => setEnddate(e.target.value)} />   
                    <Input label='Valor por participante' type='number' min='1' step='0.01' name='inValue' id='inValue' placeholder='Valor por participante' onChange={(e) => setValue(e.target.value)} />
                    <Select name="inBook" id="inBook" text="Escolha um livro a ser lido" options={listBible} required onChange={(e) => setBook(e.target.value)} />
                    <Select name="inScoreMode" id="inScoreModes" text="Escolha um modelo de pontuação" options={listScoreMode} required onChange={(e) => setScoremode(e.target.value)} />
                    <Input type='submit' onClick={createChallenge} value='Registrar' /> 
                    
                </form>
            </section>
            <div>
                <Button text= "Voltar para página inicial" link="/"/>
            </div>
        </div>
    </div>)
}