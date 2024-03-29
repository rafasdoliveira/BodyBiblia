import styles from './select.module.css'

export default function Select({text, id, name, options, value, onChange}) {
    return(
        
        <div className={styles.selectComponent}>
            <div className={styles.label}>  
                <label>{text}</label>
            </div>
            <div>
                <select onChange={onChange} className={styles.select} name={name} id={id}>
                    {Object.keys(options).map(key => (
                    <option className={styles.option} key={key}>{options[key]}</option>
                    ))}
                </select>
            </div>
        </div> 
        
    )
}

