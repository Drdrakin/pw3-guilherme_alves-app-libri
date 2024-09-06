import styles from "./Input.module.css"

const Input = ({type, text, placeholder, name}) => {

    if(type == 'textarea'){
        return(
            <div className={styles.form_control}>
                <label htmlFor={name}>{text}</label>
                <textarea 
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                />
            </div>
        )
    }
    else {
        return(
            <div className={styles.form_control}>
                <label htmlFor={name}>{text}</label>
                <input 
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                />
            </div>
        )
    }
}

export default Input;