'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Title from "@/src/app/components/title/title"
import Input from "@/src/app/components/form/input/input"
import Select from "@/src/app/components/form/select/select"
import Button from '@/src/app/components/button/button'

import styles from './page.module.css'

export default function CreateGroup() {

    //Constantes para capturar os valores de input
    const router = useRouter()
    const [livros, setLivros] = useState([]) 
    const [groupname, setGroupname] = useState('') 
    const [description, setDescription] = useState('')
    const [startdate, setStartdate] = useState('') 
    const [enddate, setEnddate] = useState('') 
    const [value, setValue] = useState('') 
    const [book, setBook] = useState('') 
    const [scoremode, setScoremode] = useState('') 

      //Função utilizada para registrar os dados no banco
      function createChallenge(){
        axios.post('http://localhost:8081/createchallenge',{
            groupname: groupname,
            description: description,
            startdate: startdate,
            enddate: enddate,
            value: value,
            book: book,
            scoremode: scoremode
        },
            )  
            .then(function (response) {
                alert("Cadastro realizado com sucesso")
                console.log(response);
                router.push("/")
          })
            .catch(function (error) {
                alert("Ops! Algo deu errado.. Fale com o Rafael!")
                console.log(error);
          });
    }

    //Consumo de API RESTFul da Bíblia
    async function getLivros() {
        try {
          const response = await axios.get('https://www.abibliadigital.com.br/api/books');
          setLivros(response.data);
          console.log(livros)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        getLivros()
      })

    //Constantes para os selects
    //Atividades
    const listScoreMode = {
        opcao: "Selecione uma  opção",
        opcao1: "Ponto por atividade",
        opcao2: "Maior distância"
      };
    // Buscar os livros da Bíblia a partir da API Bíblia Online
    const listLivros = livros.map((livro) => (
        <option key={livro.id}>{livro.name}</option>
      ));   
    // Buscar as instituições a partir dos cadastros das igrejas        
    const listOsc = {
        opcao: "Selecione uma opção",
        opcao1: "Instituto Céu No Sertão",
        opcao2: "Instituto Vida Videira"
    }; 

    return(
    <div>
        <div>
            <Title title='Crie seu desafio'/>
        </div>
        <div>
            <section>
                <form>
                    <Input label='Nome do Grupo' type='text' name='inGroupName' id='inGroupName' placeholder='Nome do Grupo' required onChange={(e) => setGroupname(e.target.value)} />
                    <Input label='Descrição' type='text' name='inDescription' id='inDescription' placeholder='Descrição (Opcional)' onChange={(e) => setDescription(e.target.value)} />
                    <Input label='Data de Início' type='date' name='inStartDate' id='inStartDate' required onChange={(e) => setStartdate(e.target.value)} /> 
                    <Input label='Data Final' type='date' name='inEndDate' id='inEndDate' required onChange={(e) => setEnddate(e.target.value)} />   
                    <Input label='Valor por participante' type='number' min='1' step='0.01' name='inValue' id='inValue' placeholder='Valor por participante' onChange={(e) => setValue(e.target.value)} />
                    <Select name="inLivro" id="inLivro" text="Escolha um livro a ser lido" options={listLivros} required onChange={(e) => setBook(e.target.value)} />
                    <Select name="inScoreMode" id="inScoreModes" text="Escolha um modelo de pontuação" options={listScoreMode} required onChange={(e) => setScoremode(e.target.value)} />
                    <Input type='submit' onClick={createChallenge} value='Registrar' link="/" />  
                </form>
            </section>
            <div>
                <Button text= "Voltar para página inicial" link="/"/>
            </div>
        </div>
    </div>)
}