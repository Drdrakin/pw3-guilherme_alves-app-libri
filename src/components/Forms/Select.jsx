import styles from './Select.module.css';

const Select = ({name, text, categorias, handler, value}) => {

    //Ordena alfabeticamente
    categorias.sort((a, b) => (a.nome_categoria > b.nome_categoria ? 1 : -1));

    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select 
                name={name} 
                id={name}
                onChange={handler}
                value={value}
            >
                <option>Selecione uma categoria</option>

                {
                    categorias.map((categoria) =>{
                        return <option value={categoria.cod_categoria} key={categoria.cod_categoria}> {categoria.nome_categoria} </option>
                        }
                    )
                }
                
            </select>
        </div>
    )
}

export default Select;