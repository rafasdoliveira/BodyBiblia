import Link from "next/link"
import styles from "./page.module.css"

export default function SignUp() {
    return(
        <div>
            <div>
                <h1>Inscreva-se</h1>
            </div>
            <div>
                <form>
                    <p>
                        Nome completo: <br/>
                        <input type="text" id="inName" required/>
                    </p>
                    <p>
                        Nome de usuário: <br/>
                        <input type="text" id="inUser" required/>
                    </p>
                    <p>
                        Telefone: <br/>
                        <input type="number" id="inPhone" required/>
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