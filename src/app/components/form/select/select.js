

function Select({text, id, name, options, value}) {
    return(
        
        <div>
            <div>
                <label>{text}:</label>
                <select name={name} id={id}>
                    <option>Selecione uma opção</option>
                    <option>{options}</option>
                </select>
            </div>
            <div>
                <p>
                    Objetivo Principal: <br/>
                    <select id="objetivo" onChange={(e) => setGoal(e.target.value)} required>
                        <option></option>
                        <option value="inConstancia"></option>
                        <option value="inEmagrecimento">Emagrecimento</option>
                        <option value="inHipertrofia">Hipertrofia</option>
                        <option value="inRelacionamento">Relacionamento com Deus</option>
                        <option value="inSaude">Saúde e Bem Estar</option>
                    </select>
                </p>
            </div>
            <div>
                <p>
                    Igreja: <br/>
                    <select id="inChurch" onChange={(e) => setChurch(e.target.value)} required>
                        <option disabled selected>Escolha sua igreja</option>
                        <option>Comunidade Cristã Videira</option>
                        <option>Comunidade das Nações</option>
                        <option>Paz Church</option>
                    </select>    
                </p>
            </div>
        </div>
    )
}

export default Select