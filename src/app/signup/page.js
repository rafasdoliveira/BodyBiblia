'use client'

import Link from "next/link"
import axios from "axios"
import styles from "./page.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function SignUp() {
    
    const router = useRouter()
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
        axios.post('http://localhost:8081/users',{
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

    return(
        <div>
            <div>
                <h1>Inscreva-se</h1>
            </div>
            <div>
                <form>
                    <p>
                        Nome: <br/>
                        <input type="text" id="inName" onChange={(e) => setName(e.target.value)} placeholder="Nome e Sobrenome" required/>
                    </p>
                    <p>
                        Nome de usuário: <br/>
                        <input type="text" id="inUser" onChange={(e) => setUsername(e.target.value)} placeholder="Nome de Usuário" required/>
                    </p>
                    <p>
                        Igreja: <br/>
                        <select id="inChurch" onChange={(e) => setChurch(e.target.value)} required>
                            <option disabled selected>Escolha sua igreja</option>
                            <option>Comunidade Cristã Videira</option>
                            <option>Comunidade das Nações</option>
                            <option>Paz Church</option>
                        </select>
                        
                    </p>
                    <p>
                        Data de Nascimento: <br/>
                        <input type="date" id="inBirthday" onChange={(e) => setBirthday(e.target.value)} required/>
                    </p>
                    <p>
                        Telefone: <br/>
                        <input type="tel" id="inPhone"  max="12" onChange={(e) => setPhone(e.target.value)} required/>
                    </p>
                    <p>
                        E-mail: <br/>
                        <input 
                        type="email" 
                        id="inEmail"
                        onChange={(e) => setEmail(e.target.value)} 
                        required/>
                    </p>
                    <p>
                        Peso atual (kg): <br/>
                        <input type="number" id="inWeight" min="1" step="0.1" onChange={(e) => setWeight(e.target.value)} required/>
                    </p>
                    <p>
                        Altura (mt): <br/>
                        <input type="number" id="inHeight" min="1" step="0.01" onChange={(e) => setHeight(e.target.value)} required/>
                    </p>
                    <p>
                        Sexo:<br/>
                        <input type="radio" id="inMale" name="gender" onChange={(e) => setGender('m')} required></input><label>Masculino</label><br/>
                        <input type="radio" id="inFemale" name="gender" onChange={(e) => setGender('f')} required></input><label>Feminino</label>
                    </p>
                    <p>
                        Objetivo Principal: <br/>
                        <select id="objetivo" onChange={(e) => setGoal(e.target.value)} required>
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
                        <input 
                        type="password" 
                        id="inPassword" 
                        minLength="8" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required/>
                    </p>                 
                    <input type="checkbox" onChange={(e) => setTerms(e.target.value)} required/> Ao enviar confirmo e aceito os <Link href="/rules">Termos e condições</Link><br/>
                    <input type="submit" onClick={register} value="Registrar" required />
                </form>

            </div>
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}