import style from './CardBooks.module.css'
import Button from '../CardButton';

const CardBooks = ({title, author, cod_livro, image}) => {
  return (
    <div className={style.bookCard}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.author}>{author}</p>
        <img src={image} alt={title} title={title}/>
        <Button
          label="Detalhes"
          router="/detailBook/"
          cod_livro={cod_livro}
        />
    </div>
  )
}
/*A diferença de alt e title é a seguinte: alt="Descrição para deficientes visuais" title="descrição visual quando se da hover na imagem com o mouse"*/
export default CardBooks;
