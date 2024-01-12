'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import Title from '@/src/app/components/title/title'
import Input from '@/src/app/components/form/input/input'
import Select from '@/src/app/components/form/select/select'
import Button from '@/src/app/components/button/button'

import styles from './page.module.css'

export default function Forms() {

    //Constantes para capturar os valores de input
    const router = useRouter()
    const [users, setUsers] = useState([])
    const [books, setBooks] = useState([])
    const [username, setUsername] = useState('')
    const [atividade, setAtividade] = useState('')
    const [livro, setLivro] = useState('')
    const [treino, setTreino] = useState('')
    const [foto, setFoto] = useState('')

    function enviarForms() {
        
        axios.post('http://localhost:8081/enviodeatividades', {
            username: username,
            atividade: atividade,
            livro: livro,
            treino: treino,
            foto: foto,
            data: new Date().toLocaleString("pt-BR", {timeZone: "America/Fortaleza"})
    },
        )
        .then(function (response) {
            alert("Enviado com sucesso")
            console.log(response);
            router.push("/")
      })
        .catch(function (error) {
            alert("Ops! Algo deu errado.. Fale com o Rafael!")
            console.log(error);
      });
    }
    //Consumo de API para buscar usuários cadastrados no sistema
    async function getUsers() {
        try {
            const response = await axios.get('http://localhost:8081/users');
            setUsers(response.data)
            console.log(users);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUsers()
    },[])


    //Consumo de API RESTFul da Bíblia
    async function getBooks() {
        try {
          const response = await axios.get('https://www.abibliadigital.com.br/api/books');
          setBooks(response.data);
          console.log(books)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        getBooks()
      })


    //Constantes para os selects 
    const listUsers = users.map((user) => (
        <option key={user.id}>{user.username}</option>
      ));

    const listAtividades = {
        option: 'Selecione uma opção',
        option1: 'Descanso',
        option2: "Leitura",
        option3: 'Recuperação de Ponto',
        option4: 'Treino'
    }

    const listLivros = books.map((book) => (
        <option key={book.id}>{book.name}</option>
      ));

    const listTreinos = {
        option: 'Selecione uma opção',
        option1: 'Altinha',
        option2: 'Artes Marciais',
        option3: 'Basquetebol',
        option4: 'Ciclismo',
        option5: 'Corrida',
        option5: 'Crossfit',
        option6: 'Funcional',
        option7: 'Futebol',
        option8: 'Futevôlei',
        option9: 'Musculação',
        option10: 'Natação',
        option11: 'Surf',
        option12: 'Vôlei',
    }

    const listRecuperacao = {
        option: 'Selecione uma opção',
        option1: 'Leitura - Compartilhar Reels no Instagram',
        option2: 'Treino - Realizar treino com 2 pessoas do grupo'
    }    
    
    return(
        <div>
            <div>
                <Title title='Formulário' />
            </div>
                <div>
                    <form>
                        <div>     
                            <Input label='Código do Grupo' type='text' name='inCodigoGrupo' id='inCodigoGrupo' placeholder='Código do Grupo' required onChange={(e) => setGroupname(e.target.value)} />
                            <Select name="inUser" id="inUser" text="Nome de Usuário" options={listUsers} required onChange={(e) => setUsername(e.target.value)} />
                            <Select name="inAtividade" id="inAtividade" text="Atividade" options={listAtividades} required onChange={(e) => setAtividade(e.target.value)} />
                            {atividade == "Leitura" && 
                                <Select name="inBook" id="inBook" text="Escolha um livro a ser lido" options={listLivros} required onChange={(e) => setLivro(e.target.value)} />
                            }
                            {atividade == "Treino" && 
                                <Select name="inTreino" id="inTreino" text="Escolha um livro a ser lido" options={listTreinos} required onChange={(e) => setTreino(e.target.value)} />
                            }
                            {atividade == "Recuperação de Ponto" && 
                                <Select name="inRecuperacao" id="inRecuperacao" text="Com qual atividade você deseja recuperar ponto?" options={listRecuperacao} required onChange={(e) => setTreino(e.target.value)} />
                            }
                            {atividade == "Descanso" && "Leitura" && "Treino" && "Recuperação de Ponto" &&
                                <Input label='Foto da atividade' type='file' name='inFoto' id='inFoto' onChange={(e) => setFoto(e.target.value)} />
                            }
                                <Input type='submit' onClick={enviarForms} value='Enviar Atividade' link="/" />  
                            <div>
                                <Button text= "Voltar para página inicial" link="/"/>
                            </div>
                        </div>                
                </form>
            </div>
        </div> 
    )
}