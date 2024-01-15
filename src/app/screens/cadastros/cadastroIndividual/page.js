'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import Title from "@/src/app/components/title/title"
import Input from "@/src/app/components/form/input/input"
import Select from "@/src/app/components/form/select/select"
import Button from '@/src/app/components/button/button'

import styles from './page.module.css'

export default function CadastroIndividual() {
    
    //Constantes para capturar os valores de input
    
    const router = useRouter()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [church, setChurch] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [goal, setGoal] = useState('')
    const [password, setPassword] = useState('')

    //Função utilizada para registrar os dados no banco
    function cadastroIndividual(){
    
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

    //Constantes para os selects
    const listGoal = {
        opcao: "Selecione uma  opção",
        opcao1: "Bem-estar físico",
        opcao2: "Conexão com a comunidade",
        opcao3: "Desenvolvimento espiritual",
        opcao4: "Estímulo físico", 
        opcao5: "Incentivo para a prática regular",
        opcao6: "Melhoria mental",
        opcao7: "Promoção da paz e da tranquilidade"
    };
    
    const listChurch = {
        opcao: "Selecione uma  opção",
        opcao1: "Comunidade Cristã Videira",
        opcao2: "Comunidade Católica Kadosh",
        opcao3: "Comunidade Mais Amor",
        opcao4: "Comunidade das Nações", 
        opcao5: "Igreja Batista Central",
        opcao6: "Igreja da Paz",
        opcao7: "Estou à procura de uma igreja",
        opcao8: "Minha igreja não está cadastrada"
    };

    const listGender = {
        opcao: "Selecione uma  opção",
        opcao1: "Feminino",
        opcao2: "Masculino"
    };

    return(
        <div>
            <div>
                <Title title='Cadastre-se!' />
            </div>
            <div>
                <form>
                    <Input label='Nome:' type='text' id='inName' placeholder='Nome e Sobrenome' onChange={(e) => setName(e.target.value)} />
                    <Input label='Nome de Usuário:' type='text' id='inUser' placeholder='Nome de Usuário' onChange={(e) => setUsername(e.target.value)} />
                    <Input label='Data de Nascimento:' type='date' id='inBirthday'onChange={(e) => setBirthday(e.target.value)} />
                    <Input label='Telefone:' type='tel' id='inPhone' placeholder='O mesmo do WhatsApp' onChange={(e) => setPhone(e.target.value)} />
                    <Input label='E-mail:' type='email' id='inMail' placeholder='E-mail mais utlizado' onChange={(e) => setEmail(e.target.value)} />
                    <Select name='inGoal' id='inGoal' text='Objetivo Principal' options={listGoal} onChange={(e) => setGoal(e.target.value)} />
                    <Select name='inGender' id='inGender' text='Gênero' options={listGender} onChange={(e) => setGender(e.target.value)} />
                    <Select name='inChurch' id='inChurch' text='Qual sua igreja?' options={listChurch} onChange={(e) => setChurch(e.target.value)} />
                    <Input label='Defina uma senha:' type='password' id='inPassword' onChange={(e) => setPassword(e.target.value)} /> 
                    <Input type='submit' onClick={cadastroIndividual} value='Registrar' />   
                </form>
            </div>
            <div>
                <Button text= "Voltar para página inicial" link="/"/>
            </div>
        </div>
    )
}