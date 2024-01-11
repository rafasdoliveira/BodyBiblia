import styles from './select.module.css'

function Select({text, id, name, options, value}) {
    return(
        
        <div className={styles.selectComponent}>
            <div className={styles.label}>  
                <label>{text}</label>
            </div>
            <div>
                <select className={styles.select} name={name} id={id}>
                    {Object.keys(options).map(key => (
                    <option className={styles.option} key={key}>{options[key]}</option>
                    ))}
                </select>
            </div>
        </div> 
        
    )
}

export default Select