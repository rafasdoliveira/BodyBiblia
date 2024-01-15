'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation"

import Title from "@/src/app/components/title/title"
import Input from "@/src/app/components/form/input/input"
import Select from "@/src/app/components/form/select/select"
import Button from '@/src/app/components/button/button'

import styles from './page.module.css'


export default function entrarDesafio() {

    //Constantes para capturar os valores de input
    const router = useRouter()
    const [entrarDesafio, setEntrarDesafio] = useState('')
    const [codigoGrupo, setCodigoGrupo] = useState('')
    const [linkGrupo, setLinkGrupo] = useState('')

    function solicitarAcessoGrupo() {
        
        axios.post('http://localhost:8081/solicitacaoacessogrupo', {
            entrarDesafio: entrarDesafio,
            codigoGrupo: codigoGrupo,
            linkGrupo: linkGrupo,
            data: new Date().toLocaleString("pt-BR", {timeZone: "America/Fortaleza"})
    },
        )
        .then(function (response) {
            alert("Solicitação Enviada")
            console.log(response);
            router.push("/")
      })
        .catch(function (error) {
            alert("Ops! Algo deu errado.. Fale com o Rafael!")
            console.log(error);
      });
    }
    
    //Constantes para Selects 
    const listEntrarDesafioOpcao = {
        option: "Selecione uma opção",
        option1: "Entrar com código",
        option2: "Entrar com link"
    }
    return(
    <div>
        <div>
            <Title title='Entrar em um desafio'/>
        </div>
        <div>
            <Select name='inEntrarDesafioOpcao' id='inEntrarDesafioOpcao' text='Como você quer entrar em um desafio?' options={listEntrarDesafioOpcao} onChange={(e) => setEntrarDesafio(e.target.value)} />    
            
            {
            entrarDesafio == "Entrar com código" && 
                <Input label='Código do Grupo' type='text' name='inCodigoGrupo' id='inCodigoGrupo' placeholder='Código do Grupo' required onChange={(e) => setCodigoGrupo(e.target.value)} /> 
            } 
            {
             entrarDesafio == "Entrar com código" &&
                <Input label='Solicitar Acesso' type='submit' onClick={solicitarAcessoGrupo} />
            }
            {
            entrarDesafio == "Entrar com link" && 
                <Input label='Link do Grupo' type='text' name='inLinkGrupo' id='inLinkGrupo' placeholder='Link do Grupo' required onChange={(e) => setLinkGrupo(e.target.value)} />
            }
            {
            entrarDesafio == "Entrar com link" &&   
                <Input label='Solicitar Acesso' type='submit' onClick={solicitarAcessoGrupo} />
            }
        </div>
        <div>
            <Button text= "Voltar para página inicial" link="/"/>
        </div>
    </div>)
}