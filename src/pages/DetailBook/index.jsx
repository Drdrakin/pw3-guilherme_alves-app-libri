import styles from './DetailBook.module.css'
import { useParams } from 'react-router-dom'
import caverna from '../../assets/livros/cavernas_aco.jpg'
import { useState, useEffect } from 'react'
import Button from '../../components/CardButton'

const DetailBook = () => {

    const {cod_livro} = useParams();
    const[book, setBook] = useState({});

    useEffect(() => {
      fetch(`http://localhost:5000/listagemLivro/${cod_livro}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      })
      .then(
        (res) => res.json()
      )
      .then(
        (res) => {
          setBook(res.data)
        }
      )
    }, []);
    
    return (
        <div className={styles.container}>

            <h1>Detalhes de livro</h1>
            <div className={styles.grid}>
            
            <div className={styles.container_img}>
              <img className={styles.img_book_detail} src={caverna} alt='Capa do livro: As cavernas de aço' />
            </div>

            <div className={styles.info}>

                <span className={styles.titulo}>{book.nome_livro}</span>
                <span className={styles.autor}>{book.autor_livro}</span>

                <span className={styles.descricao}>
                  {book.descricao_livro}
                </span>

                <div className={styles.container_buttons}>
                  <Button 
                    label='EDITAR'
                    router='/editBook/'
                    cod_livro={book.cod_livro}
                  />

                  <Button 
                    label='EXCLUIR'
                    router='/deleteBook/'
                    cod_livro={book.cod_livro}
                  />
                </div>
              </div>
          </div>
        </div>
    )
}

export default DetailBook