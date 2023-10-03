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
            date: new Date().toLocaleString("pt-BR", {timeZone: "America/Fortaleza"})
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
    },[])

    return(
        <div>
            <div>
                <h1>Formulário</h1>
            </div>
            <div>
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
                        <option></option>
                        <option>Gênesis</option>
                        <option>Êxodo</option>
                        <option>Levítico</option>
                        <option>Números</option>
                        <option>Deuteronômio</option>
                        <option>Josué</option>
                        <option>Juízes</option>
                        <option>Rute</option>
                        <option>1 Samuel</option>
                        <option>2 Samuel</option>
                        <option>1 Reis</option>
                        <option>2 Reis</option>
                        <option>1 Crônicas</option>
                        <option>2 Crônicas</option>
                        <option>Esdras</option>
                        <option>Neemias</option>
                        <option>Ester</option>
                        <option>Jó</option>
                        <option>Salmos</option>
                        <option>Provérbios</option>
                        <option>Eclesiastes</option>
                        <option>Cântico dos Cânticos</option>
                        <option>Isaías</option>
                        <option>Jeremias</option> 
                        <option>Lamentações</option> 
                        <option>Ezequiel</option> 
                        <option>Daniel</option> 
                        <option>Oseias</option> 
                        <option>Joel</option> 
                        <option>Amós</option> 
                        <option>Obadias</option> 
                        <option>Jonas</option> 
                        <option>Miqueias</option> 
                        <option>Naum</option> 
                        <option>Habacuque</option> 
                        <option>Sofonias</option> 
                        <option>Ageu</option> 
                        <option>Zacarias</option> 
                        <option>Malaquias</option> 
                        <option>Mateus</option> 
                        <option>Marcos</option> 
                        <option>Lucas</option> 
                        <option>João</option> 
                        <option>Atos dos apóstolos</option> 
                        <option>Romanos</option> 
                        <option>1 Coríntios</option> 
                        <option>2 Coríntios</option> 
                        <option>Gálatas</option> 
                        <option>Efésios</option> 
                        <option>Filipenses</option> 
                        <option>Colossenses</option> 
                        <option>1 Tessalonicenses</option> 
                        <option>2 Tessalonicenses</option> 
                        <option>1 Timóteo</option> 
                        <option>2 Timóteo</option> 
                        <option>Tito</option> 
                        <option>Filemom</option> 
                        <option>Hebreus</option> 
                        <option>Tiago</option> 
                        <option>1 Pedro</option> 
                        <option>2 Pedro</option> 
                        <option>1 João</option> 
                        <option>2 João</option> 
                        <option>3 João</option>
                        <option>Judas</option>
                        <option>Apocalipse</option> 
                    </select>
                    </p>
                    }
                    {task == "Treino" &&
                    <p>
                    Selecione sua atividade<br/>
                    <select onChange={(e) => setWorkout(e.target.value)}>
                        <option></option>
                        <option>Artes Marciais (Lutas)</option>
                        <option>Corrida</option>
                        <option>Crossfit</option>
                        <option>Funcional</option>
                        <option>Futebol</option>
                        <option>Musculação</option>
                        <option>Pedal</option>
                        <option>Surf</option>
                        <option>Vôlei</option>
                    </select>
                    </p>
                    }
                    <p>
                        Envie sua foto!<br/>
                        <input type="file" onChange={(e) => setPhotourl(e.target.value)} required/>
                    </p>
                 <input type="submit" value="Enviar Atividade" onClick={forward}/>
            </div>
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
        
    )
}