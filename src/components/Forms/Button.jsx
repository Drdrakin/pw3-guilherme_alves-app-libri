import styles from './Button.module.css'

const Button = ({rotulo, handler}) => {

    return (
        <div>
            <button className={styles.button} onClick={handler}>
                {rotulo}
            </button>
        </div>
    )
}

export default Button;