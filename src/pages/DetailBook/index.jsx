import styles from './DetailBook.module.css'

const DetailBook = ({cod_book}) => {
  return (
    <div>
        
        <h1>Detalhes de livro</h1>
        <h2>{cod_book}</h2>
    </div>
  )
}

export default DetailBook