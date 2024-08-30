import styles from './Home.module.css';
import { Book } from 'react-ionicons';

function Home() {
  return (  
    <>
      <section className={styles.homeContainer}>
        <h1>Bem vindo ao<span>Libri</span><Book color={'#fff'} height="1em" width="1em" style={{marginBottom: 0, paddingBottom: 0}}></Book></h1>
        <p>Sua plataforma web de Gestão de Livros!</p>
        <img src="book_home.jpg" alt="Livro" />
      </section>
    </>
  )
}

export default Home;