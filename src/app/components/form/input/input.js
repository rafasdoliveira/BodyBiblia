import styles from './input.module.css'

export default function Input({label, type, name, id, placeholder, min, max, step, value, onChange, onClick}) {
    return(
        <div className={styles.inputComponent}>
            <div className={styles.label}>
                {label}
            </div>  
            <div>       
                <input className={styles.input}
                type={type} 
                name={name}
                id={id} 
                min={min}
                max={max}
                step={step}
                placeholder={placeholder} 
                value={value}
                onChange={onChange} 
                onClick={onClick}
                required
                />
            </div>
        </div>
    )
}

