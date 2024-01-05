'use client'
import Input from '../components/form/input/input'
import Select from '../components/form/select/select'
import styles from './page.module.css'


export default function createChallenge() {
    return(
    <div>
        <div>
            Crie um desafio
        </div>
        <div>
            <section>
                <form>
                    <Input label='Nome do grupo' type='text' name='gender' id='inGender'/> 
                    // onChange={(e) => setEmail(e.target.value)} 
                    <Input label='Descriçáo' type='text' name='gender' id='inGender' placeholder='Descrição'/>
                    <Input label='Data de Início' type='date' name='gender' id='inGender' placeholder='Descrição'/>                    
                    <Input label='Data Final' type='date' name='gender' id='inGender' placeholder='Descrição'/>
                    <div>
                        <label>Escolha um modelo de pontuação</label>
                    </div>            
                    <select>
                        <option>Atividade</option>
                        <option>Pontos por movimentação</option>
                        <option>Duração</option>
                        <option>Distância</option>
                        <option>Passos</option>
                        <option>Calorias</option>
                    </select>
                    <Input label='Data Final' type='submit' name='gender' id='inGender' placeholder='Descrição' value='Cadastrar'/>
                    {/* <Select /> */}
                </form>
            </section>
        </div>
    </div>)
}