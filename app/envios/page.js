import Link from "next/link";
import styles from "./page.module.css"

export default function Envios() {
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
                    <p>
                        E-mail de cadastro: <br/>
                        <input type="email" required/>
                    </p>
                    <input type="submit" value="Consultar Envios"/>
                </form>
            </div>
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}