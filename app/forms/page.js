import Link from "next/link";
import styles from "./page.module.css"

export default function Forms() {
    return(
        <div>
            <div>
                <h1>Forms</h1>
            </div>
            
            <div className={styles.links}>
                <Link href="/">Voltar para página principal</Link>
            </div>
        </div>
    )
}