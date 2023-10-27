function Input({label, type, name, id, placeholder, min, max, step, value, onChange, onClick}) {
    return(
        <div>
            <div>
                {label}
            </div>
            <div>
                <input 
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

export default Input