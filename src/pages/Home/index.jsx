import styles from './Home.module.css';
import { BiSolidBookOpen } from 'react-icons/bi';

function Home() {
  return (  
    <>
      <section className={styles.homeContainer}>
        <h1>Bem vindo ao<span>Libri</span><BiSolidBookOpen/></h1>
        <p>Sua plataforma web de Gestão de Livros!</p>
        <img src="book_home.jpg" alt="Livro" />
      </section>
    </>
  ) 
}

export default Home;