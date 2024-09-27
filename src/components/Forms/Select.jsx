import styles from './Select.module.css';

const Select = ({name, text, categorias}) => {

    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma categoria</option>
                {
                    categorias.map((categoria) =>{
                        return <option key={categoria.cod_categoria}>{categoria.nome_categoria}</option>
                        }
                    )
                }
            </select>
        </div>
    )
}

export default Select;