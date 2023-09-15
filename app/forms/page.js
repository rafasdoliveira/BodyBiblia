import Link from "next/link";
import styles from "./page.module.css"

export default function Forms() {
    return(
        <div>
            <div>
                <h1>Forms</h1>
            </div>
            <div>
                <form>
                    <p>
                        Usuário: <br/>
                        <input type="text" id="inUser" required/>
                    </p>
                    <p>
                        Atividade: <br/>
                        <select required>
                            <option></option>
                            <option>Descanso</option>
                            <option>Leitura</option>
                            <option>Treino</option>
                        </select>
                    </p>    
                    <p>
                        Envie sua foto!<br/>
                        <input type="file" required/>
                    </p>
                    <input type="submit" value="Enviar Atividade"/>
                </form>
            </div>
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}