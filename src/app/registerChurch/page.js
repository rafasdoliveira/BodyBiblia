'use client'

import Title from "../components/title/title"
import Input from "../components/form/input/input"
import Select from "../components/form/select/select"
import styles from './page.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterChurch() {

     //Constantes para capturar os valores de input
    
     const router = useRouter()
     const [username, setUsername] = useState('')
     const [vinculo, setVinculo] = useState('')
     const [cnpj, setCNPJ] = useState('')
     const [razaoSocial, setRazaoSocial] = useState('')
     const [nomeFantasia, setNomeFantasia] = useState('')
     const [cnpjInst, setCNPJInst] = useState('')
     const [razaoSInst, setRazaoSInst] = useState('')
     const [nomeFInst, setNomeFInst] = useState('')
     const [nomeRep, setNomeRep] = useState('')
     const [telefoneInst, setTelefoneRepresentante] = ('')
     const [cep, setCEP] = useState('')
     const [logradouro, setLogradouro] = useState('')
     const [bairro, setBairro] = useState('')
     const [cidade, setCidade] = useState('')
     const [uf, setUF] = useState('')

     function registerChurch(){
    
        axios.post('http://localhost:8081/registerchurch',{
            username: username,
            vinculo: vinculo,
            cnpj: cnpj,
            razaoSocial: razaoSocial,
            nomeFantasia: nomeFantasia,
            cnpjInst: cnpjInst,
            razaoSInst: razaoSInst,
            nomeFInst: nomeFInst,
            nomeRep: nomeRep,
            telefoneInst: telefoneInst, 
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            cidade: cidade,
            uf: uf
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
    const listVinculo = {
        option: "Selecione uma opção",
        option1: "Pastor Sênior",
        option2: "Pastor de Campus",
        option3: "Coordenador",
        option4: "Supervisor",
        option5: "Líder",
        option6: "Auxiliar",
        option7: "Membro",
        option8: "Visitante"
    }
    
    return(
        <div>   
            <div>
                <Title title='Cadastre sua Igreja!' />
            </div>
            <div>
                <form className={styles.form}>
                    <section className={styles.section}>
                        <p>É importante que o responsável pelo cadastro já esteja cadastrado no sistema! </p>
                        <div className={styles.data}>
                            <Input label='Usúario:' type='text' id='inUser' placeholder='Usuário de acordo com o cadastrado' onChange={(e) => setUsername(e.target.value)} />
                            <Select name='inVinculo' id='inVinculo' text='Qual seu vínculo com a igreja?' options={listVinculo} onChange={(e) => setVinculo(e.target.value)} />    
                        </div>
                        
                    </section>

                    <section className={styles.section}>
                        <p>Dados da Igreja</p>
                        <div className={styles.data}> 
                            <Input label='CNPJ:' type='number' id='inCNPJ' placeholder='CNPJ' onChange={(e) => setCNPJ(e.target.value)} />
                            <Input label='Razão Social:' type='text' id='inRazaoSocial' placeholder='Razão conforme cartão CNPJ' onChange={(e) => setRazaoSocial(e.target.value)} />
                            <Input label='Nome Fantasia:' type='text' id='inNomeFantasia' placeholder='Nome conforme cartão CNPJ' onChange={(e) => setNomeFantasia(e.target.value)} />
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.data}>   
                            <p>Dados da Instituição Social apoiada pela igreja</p>
                            <Input label='CNPJ:' type='number' id='inCNPJInst' placeholder='CNPJ' onChange={(e) => setCNPJInst(e.target.value)} />
                            <Input label='Razão Social:' type='text' id='inRazaoSInst' placeholder='Razão conforme cartão CNPJ' onChange={(e) => setRazaoSInst(e.target.value)} />
                            <Input label='Nome Fantasia:' type='text' id='innomeFInst' placeholder='Nome conforme cartão CNPJ' onChange={(e) => setNomeFInst(e.target.value)} />
                            <Input label='Nome do Responsável:' type='text' id='inNomeRepresentanteInstituicao' placeholder='Nome do Representante da Instituição' onChange={(e) => setNomeRepresentanteInstituicao(e.target.value)} />
                            <Input label='Telefone do Responsável:' type='number' id='inTelefoneRepresentante'  onChange={(e) => setTelefoneRepresentante(e.target.value)} /> 
                        </div> 
                    </section>
                    
                    {/* Endereço */}
                    <section className={styles.section}>
                        <div className={styles.data}>
                            <p>Endereço</p>
                            <Input label='CEP:' type='number' id='inCEP' placeholder='CEP' onChange={(e) => setCEP(e.target.value)} />
                            <Input label='Logradouro:' type='text' id='inLogradouro' placeholder='Logradouro' onChange={(e) => setLogradouro(e.target.value)} />
                            <Input label='Bairro:' type='text' id='inBairro' placeholder='Bairro' onChange={(e) => setBairro(e.target.value)} />
                            <Input label='Cidade:' type='text' id='inCidade' placeholder='Cidade' onChange={(e) => setCidade(e.target.value)} />
                            <Input label='UF:' type='text' id='inUF' placeholder='UF' onChange={(e) => setUF(e.target.value)} />
                        </div>
                       
                    </section>
                    <Input type='submit' onClick={registerChurch} value='Registrar' />    
                </form>
            </div>
        </div>
    )
}