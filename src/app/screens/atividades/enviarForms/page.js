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
    const [livros, setLivros] = useState([])
    const [username, setUsername] = useState('')
    const [atividade, setAtividade] = useState('')
    const [livro, setLivro] = useState('')
    const [comentarioLeitura, setComentarioLeitura] = useState('')
    const [treino, setTreino] = useState('')
    const [recuperarPonto, setRecuperarPonto] = useState('')
    const [recuperarLeitura, setRecuperarLeitura] = useState('')
    const [recuperarTreino, setRecuperarTreino] = useState('')
    const [foto, setFoto] = useState('')

    function enviarForms() {
        
        axios.post('http://localhost:8081/enviodeatividades', {
            username: username,
            atividade: atividade,
            livro: livro,
            comentarioLeitura: comentarioLeitura,
            treino: treino,
            recuperarPonto: recuperarPonto,
            recuperarLeitura: recuperarLeitura,
            recuperarTreino: recuperarTreino,
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
    })


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

    const listLivros = livros.map((livro) => (
        <option key={livro.id}>{livro.name}</option>
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

    const listRecuperarPonto = {
        option: 'Selecione uma opção',
        option1: 'Recuperar Leitura',
        option2: 'Recuperar Treino'
    }    

    const listRecuperarLeitura = {
        option: 'Selecione uma opção',
        option1: 'Postagem Reels',
        option2: 'Outras opções'
    } 
    
    const listRecuperarTreino = {
        option: 'Selecione uma opção',
        option1: 'Treino em grupo',
        option2: 'Outras opções'
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
                            {/* Bloco de Leitura */}
                            {atividade == "Leitura" && 
                                <Select name="inBook" id="inBook" text="Escolha um livro a ser lido" options={listLivros} required onChange={(e) => setLivro(e.target.value)} />
                            }
                            {atividade == "Leitura" && 
                                <Input label='Comentário' type='textarea' name='inComentarioLeitura' id='inComentarioLeitura' placeholder='Deixa um comentário sobre sua leitura' onChange={(e) => setComentarioLeitura(e.target.value)} />
                            }
                            {atividade == "Leitura" && 
                                <Input label='Foto da atividade' type='file' name='inFoto' id='inFoto' onChange={(e) => setFoto(e.target.value)} />
                            }

                            {/* Bloco de Treino */}
                            {atividade == "Treino" && 
                                <Select name="inTreino" id="inTreino" text="Qual atividade você realizou?" options={listTreinos} required onChange={(e) => setTreino(e.target.value)} />
                            }
                            {/* Criar uma "barra de progressão" para intensidade da atividade */}
                            {/* {atividade == "Treino" && 
                                <Select name="inTreino" id="inTreino" text="Quão intenso foi seu treino?" options={listTreinos} required onChange={(e) => setTreino(e.target.value)} />
                            } */}
                            {atividade === "Treino" && 
                                <Input label='Foto da atividade' type='file' name='inFoto' id='inFoto' onChange={(e) => setFoto(e.target.value)} />
                            }
                            
                            {/* Bloco de Recuperação de ponto */}
                            {
                            atividade === "Recuperação de Ponto" && 
                                <Select name="inRecuperarPonto" id="inRecuperarPonto" text="Qual das atividades você deseja recuperar ponto?" options={listRecuperarPonto} required onChange={(e) => setRecuperarPonto(e.target.value)} />
                            }
                            {
                            recuperarPonto === "Recuperar Leitura" && 
                                <Select name="inRecuperarLeitura" id="inRecuperarLeitura" text="Escolha uma das atividades" options={listRecuperarLeitura} required onChange={(e) => setRecuperarLeitura(e.target.value)} />
                            }
                            {
                            recuperarPonto === "Recuperar Treino" && 
                                <Select name="inRecuperarTreino" id="inRecuperarTreino" text="Escolha uma das atividades" options={listRecuperarTreino} required onChange={(e) => setRecuperarTreino(e.target.value)} />
                            }
                            {atividade === "Recuperação de Ponto" && 
                                <Input label='Foto da atividade' type='file' name='inFoto' id='inFoto' onChange={(e) => setFoto(e.target.value)} />
                            }     

                            {atividade === "Descanso" && "Leitura" && "Treino" && "Recuperação de Ponto" &&
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