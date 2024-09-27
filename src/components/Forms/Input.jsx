import styles from "./Input.module.css"

const Input = ({type, text, placeholder, name, handler}) => {

    if(type == 'textarea'){
        return(
            <div className={styles.form_control}>
                <label htmlFor={name}>{text}</label>
                <textarea
                    rows='4'
                    className={styles.textArea}
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handler}
                />
            </div>
        )
    }
    else {
        return(
            <div className={styles.form_control}>
                <label htmlFor={name}>{text}</label>
                <input 
                    className={styles.textInput}
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handler}
                />
            </div>
        )
    }
}

export default Input;