'use client'

import Link from "next/link";
import styles from "./page.module.css"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Forms() {

    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [task, setTask] = useState('')
    const [book, setBook] = useState('')
    const [workout, setWorkout] = useState('')
    const [photourl, setPhotourl] = useState('')

    function forward() {
        
        axios.post('http://localhost:8081/challenge', {
            username: username,
            task: task,
            book: book,
            workout: workout,
            photourl: photourl,
            date: new Date()
    },
        )
        .then(function (response) {
            alert("Enviado com sucesso")
            console.log(response);
            // router.push("/")
      })
        .catch(function (error) {
            alert("Ops! Algo deu errado.. Fale com o Rafael!")
            console.log(error);
      });
    }

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
        console.log(new Date().toLocaleString("pt-BR", {timeZone: "America/Fortaleza"}))
    },[])

    return(
        <div>
            <div>
                <h1>Formulário</h1>
            </div>
            <div>
                <form>
                    <p>
                        Usuário: <br/>
                        <select onChange={(e) => setUsername(e.target.value)}>
                            {users.map((user) => (
                                <option key={user.id}>{user.username}</option>
                            ))}
                            
                            
                        </select>
                    </p>
                    <p>
                        Atividade: <br/>
                        <select onChange={(e) => setTask(e.target.value)} required>
                            <option></option>
                            <option>Descanso</option>
                            <option>Leitura</option>
                            <option>Treino</option>
                        </select>
                    </p>
                    {task == "Leitura" &&    
                    <p>
                    Selecione o livro vc leu:<br/>    
                    <select onChange={(e) => setBook(e.target.value)}>
                        <option>Gênesis</option>
                        <option>Êxodo</option>
                        <option>Levítico</option>
                        <option>Números</option>
                    </select>
                    </p>
                    }
                    {task == "Treino" &&
                    <p>
                    Selecione sua atividade<br/>
                    <select onChange={(e) => setWorkout(e.target.value)}>
                        <option>Corrida</option>
                        <option>Crossfit</option>
                        <option>Funcional</option>
                        <option>Musculação</option>
                    </select>
                    </p>
                    }
                    <p>
                        Envie sua foto!<br/>
                        <input type="file" onChange={(e) => setPhotourl(e.target.value)} required/>
                    </p>
                 <input type="submit" value="Enviar Atividade" onClick={forward}/>
                </form>
            </div>
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
        
    )
}