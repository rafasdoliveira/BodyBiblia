'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css"

export default function Envios() {
    
    const[envios, setEnvios] = useState('')
    
    const getEnvios = async () => {
        const res = await axios.get('http://localhost:8081/challenge')
        setEnvios(res.data)
        
        console.log(envios)
    }
    
        useEffect(() => {
            getEnvios()
        }, [])
    

    return(
        <div>
            <div>
                <h1>Envios</h1>
            </div>
            <div>
                <form>
                    <p>
                        Nome de usuário: <br/>
                        <input type="text" required/>
                    </p>
                    <input type="submit"  value="Consultar Envios"/>
                </form>
            </div>
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}
