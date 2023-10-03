'use client'

import Link from "next/link";
import {  useState } from "react";
import axios from "axios";
import styles from "./page.module.css"

export default function Envios() {
    
    const [challenges, setChallenges] = useState([])
    const [username, setUsername] = useState('')

    async function getEnvios() {
        try {
            const response0 = await axios.get('http://localhost:8081/users?username=' + username);
            if(response0.data.length < 1) {
                alert('Usuário não encontrado')
            } else {
                    const response = await axios.get('http://localhost:8081/challenge?username=' + username);   
                    setChallenges(response.data)
                    console.log(challenges.length > 0)
                        if(response.data.length < 1) {
                            alert('Usuário não enviou nada')
                        }    
                    }
        } catch (error) {
            alert('Usuário não cadastrado')
            console.error(error);
        }
    }

    return(
        <div>
            <div>
                <h1>Envios</h1>
            </div>
            <div>
                    <p>
                        Nome de usuário: <br/>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} required/>
                    </p>
                    <input type="submit"  value="Consultar Envios" onClick={getEnvios} />
            </div>

            {challenges.map((challenge => 
                <ul>
                    <li>O usuário {challenge.username}</li>
                    <li>No dia {challenge.date}</li>
                    <li>Treinou <strong>{challenge.workout}</strong></li>
                    <li>Leu {challenge.book}</li>
                </ul>
            ))}
  

            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}
