

function Select({text, id, name, options, value}) {
    return(
        
        <div>
            <div>
            <label>{text}</label>
            <select name={name} id={id}>
                {Object.keys(options).map(key => (
                <option key={key}>{options[key]}</option>
                ))}
            </select>
            </div> 
        </div>
    )
}

export default Select