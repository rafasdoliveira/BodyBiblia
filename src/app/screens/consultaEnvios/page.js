'use client'

import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

import '@/src/app/components/form/input/input'
import Title from '@/src/app/components/title/title'

import styles from './page.module.css'

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
                <div>
                    <Title title='Envios'/>
                </div>
                <div>
                    <Input label='Nome de Usuário' type='text' name='inUsername' id='inUsername' placeholder='Nome de Usuário' required onChange={(e) => setUsername(e.target.value)} />
                    <Input type='submit' onClick={getEnvios} value='Consultar' link="/"/>
                </div>                     
            </div>

            {challenges.map((challenge => 
                <ul key={challenge}>
                    <li key={challenge}>Dia {challenge.date}</li>
                    <li ket={challenge}>Treinou <strong>{challenge.workout}</strong></li>
                    <li ket={challenge}>Leu {challenge.book}</li>
                </ul>
            ))} 
            
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}
