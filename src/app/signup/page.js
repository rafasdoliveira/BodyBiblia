'use client'

import Link from "next/link"
import api from "@/src/services/api"
import styles from "./page.module.css"
import { useState } from "react"

export default function SignUp() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [church, setChurch] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [gender, setGender] = useState('')
    const [goal, setGoal] = useState('')
    const [terms, setTerms] = useState('')
    const [password, setPassword] = useState('')
    
    function register(){
        axios.post('https://keztncwqdiwmjhvxyczy.supabase.co/rest/v1/usuarios',{
            name: name,
            username: username,
            church: church,
            birthday: birthday,
            phone: phone,
            email: email,
            weight: weight,
            height: height,
            gender: gender,
            goal: goal,
            terms: terms,
            password: password
        }, {headers:{

            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRuY3dxZGl3bWpodnh5Y3p5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjYzOTk3NywiZXhwIjoxOTk4MjE1OTc3fQ.7-urr08m7_KARrZ0_FuuJEDopAdzw1MIeOZSDmSvEyQ'
        }}).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <div>
            <div>
                <h1>Inscreva-se</h1>
            </div>
            <div>
                <form>
                    <p>
                        Nome: <br/>
                        <input type="text" id="inName" placeholder="Nome e Sobrenome" required/>
                    </p>
                    <p>
                        Nome de usuário: <br/>
                        <input type="text" id="inUser" placeholder="Nome de Usuário" required/>
                    </p>
                    <p>
                        Igreja: <br/>
                        <select id="inChurch" required>
                            <option></option>
                            <option>Comunidade Cristã Videira</option>
                            <option>Comunidade das Nações</option>
                            <option>Paz Church</option>
                        </select>
                        
                    </p>
                    <p>
                        Data de Nascimento: <br/>
                        <input type="date" id="inBirthday" required/>
                    </p>
                    <p>
                        Telefone: <br/>
                        <input type="tel" id="inPhone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" max="12" required/>
                    </p>
                    <p>
                        E-mail: <br/>
                        <input type="email" id="inEmail" required/>
                    </p>
                    <p>
                        Peso atual (kg): <br/>
                        <input type="number" id="inWeight" min="1" step="0.1" required/>
                    </p>
                    <p>
                        Altura (mt): <br/>
                        <input type="number" id="inHeight" min="1" step="0.01" required/>
                    </p>
                    <p>
                        Sexo:<br/>
                        <input type="radio" id="inMale" name="sexo" required></input><label>Masculino</label><br/>
                        <input type="radio" id="inFemale" name="sexo" required></input><label>Feminino</label>
                    </p>
                    <p>
                        Objetivo Principal: <br/>
                        <select id="objetivo" required>
                            <option></option>
                            <option value="inConstancia">Constância na leitura</option>
                            <option value="inEmagrecimento">Emagrecimento</option>
                            <option value="inHipertrofia">Hipertrofia</option>
                            <option value="inRelacionamento">Relacionamento com Deus</option>
                            <option value="inSaude">Saúde e Bem Estar</option>
                        </select>
                    </p>
                    <p>
                        Senha: <br/>
                        <input type="password" id="inPassword" minLength="8" required/>
                    </p>                 
                    <input type="checkbox" required/> Ao enviar confirmo e aceito os <Link href="/rules">Termos e condições</Link><br/>
                    <input type="submit" value="Inscrever" required/>
                </form>

            </div>
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}