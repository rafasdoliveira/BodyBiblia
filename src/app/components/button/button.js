import Link from 'next/link'
import styles from './button.module.css'

function Button(props) {
    return(
        <Link href={props.link}>
            <div className={styles.buttonComponent}>
                <div className={styles.button} >
                    {props.text}
                </div>
            </div>
        </Link>
    )
}

export default Button