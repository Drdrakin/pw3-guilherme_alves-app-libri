import React from 'react'
import styles from './ViewBook.module.css'
import CardBooks from '../CardBook/CardBooks'
import bookCover1 from '../../assets/livros/rapido-e-devagar.jpg'
import bookCover2 from '../../assets/livros/ordem_vermelha.jpg'
import bookCover3 from '../../assets/livros/pompeia-viva.jpg'

const ViewBook = () => {
    return (
        <section className={styles.bookView}>
            <article className={styles.cardContainer}>
                <CardBooks
                    title = "Rápido e Devagar: Duas Formas de Pensar"
                    author = "Daniel Kahneman"
                    image = {bookCover1}
                />
                <CardBooks
                    title = "Filhos da Degradação"
                    author = "Felipe Castilho"
                    image = {bookCover2}
                />
                <CardBooks
                    title = "Pompéia a Cidade Viva"
                    author = "Alex Butterworth"
                    image = {bookCover3}
                />
            </article>
        </section>
    )
}

export default ViewBook;