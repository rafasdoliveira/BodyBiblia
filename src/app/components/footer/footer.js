import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <h2>BodyBiblia</h2>
            <p>
                &copy; 2023 | Desenvolvido por <Link href="">Rafael Oliveira</Link> | Todos os direitos reservados
            </p>     
        </div>
    )
}