'use client'

import Title from '../components/title/title'
import Input from '../components/form/input/input'
import Select from '../components/form/select/select'
import Radio from '../components/form/radio/radio'
import Button from '../components/button/button'
// import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'


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

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

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
                <Title text='Inscreva-se' />
            </div>
            <div>
                <Input label='Nome:' type='text' id='inName' placeholder='Nome e Sobrenome'
                onChange={(e) => setName(e.target.value)} />
                
                <Input label='Nome de Usuário:' type='text' id='inUser' placeholder='Nome de Usuário'
                onChange={(e) => setUsername(e.target.value)} />
                {/* <Select text='Objetivo Principal' /> */}
                
                <Input label='Data de Nascimento:' type='date' id='inBirthday'
                onChange={(e) => setBirthday(e.target.value)} />
                
                <Input label='Telefone:' type='tel' id='inPhone' 
                onChange={(e) => setPhone(e.target.value)} />
                
                <Input label='E-mail:' type='email' id='inMail' 
                onChange={(e) => setEmail(e.target.value)} />
                
                <Input label='Gênero' type='radio' name='gender' id='inGender' 
                onChange={(e) => setEmail(e.target.value)} />

                {/* <div>
                    <p>
                        Sexo:<br/>
                        <input type="radio" id="inMale" name="gender" onChange={(e) => setGender('m')} required></input><label>Masculino</label><br/>
                        <input type="radio" id="inFemale" name="gender" onChange={(e) => setGender('f')} required></input><label>Feminino</label>
                    </p>
                </div> */}
               
                <Input label='Peso atual (kg):' type='number' id='inWeight' min="1" step="0.1"  
                onChange={(e) => setWeight(e.target.value)} />
                <Input label='Altura (mt):' type='number' id='inHeight' min="1" step="0.1"  
                onChange={(e) => setHeight(e.target.value)} />
                {/* <Select /> */}
                <Input label='Senha:' type='password' id='inPassword'  
                onChange={(e) => setPassword(e.target.value)} />
                {/* <Input type='checkbox' label=' Ao enviar confirmo e aceito os Termos e condições'  
                onChange={(e) => setPassword(e.target.value)} /> */}
                <Input type='submit' onClick={register} value='Registrar'  
                onChange={(e) => setPassword(e.target.value)} />   
            </div>
            <div>
                <Button text= "Voltar para página inicial" link="/"/>
            </div>
        </div>
    )
}