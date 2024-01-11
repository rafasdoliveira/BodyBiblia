import Link from 'next/link'
import styles from './button.module.css'

function Button(props) {
    return(
        <div className={styles.buttonComponent}>
            <div className={styles.button} >
                <Link href={props.link}>{props.text}</Link>
            </div>
        </div>
    )
}

export default Button