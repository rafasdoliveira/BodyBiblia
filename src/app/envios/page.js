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
            const response = await axios.get('http://localhost:8081/challenge?username=' + username);    
            setChallenges(response.data)
            console.log(challenges);
            console.log(username)
        } catch (error) {
            console.error(error);
        }
    }

        // {challenges.map((challenge => 
        //     `O usuário ${challenge.username}`
        //     ))}
  
    return(
        <div>
            <div>
                <h1>Envios</h1>
            </div>
            <div>
                <form>
                    <p>
                        Nome de usuário: <br/>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} required/>
                    </p>
                    <input type="submit"  value="Consultar Envios" onClick={getEnvios} />
                </form>
            </div>

            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}
