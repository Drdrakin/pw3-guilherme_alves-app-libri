import styles from './createBooks.module.css'
import Input from '../../components/Forms/Input';
import Select from '../../components/Forms/Select';
import Button from '../../components/Forms/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {

  const [book, setBook] = useState({})
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/listagemCateorias', {
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
        setCategorias(res.data)
      }
    )
  }, []);

  function createBook(book) {    
    try {
      fetch('http://localhost:5000/inserirLivro', {
        method:'POST',
        mode:'cors',
        headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*'
        },
        body: JSON.stringify(book)
      })
      .then(
        (resp)=>resp.json()
      )
      .then(
        (data)=>{
        console.log(data);
          if(data.errorStatus == false){
            navigate('/listBook', {state: 'Livro Inserido com sucesso!'})
          }
        }
      )

      
    } catch (error) {
      console.log(error)
    } 

  }

  function submit(event) {
    event.preventDefault();
    createBook(book);

    console.log(book)
  }

  //Como a handler forma o json com o 'name' do campo html, é necessário que o 'name' do campo seja o mesmo do banco
  function handlerChangeBook(event) {
    setBook({...book, [event.target.name] : event.target.value});
    console.log(book)
  }

  return (
    <section className={styles.createBookContainer}>
        <h1>Cadastrar novos livros</h1>
        <form onSubmit={submit} className={styles.createBookContainer}>
          <Input 
            type= 'text'
            name= 'nome_livro'
            placeholder= 'Digite o nome de seu livro aqui'
            text= 'Título de Livro'
            handler={handlerChangeBook}
          />
          <Input 
            type= 'text'
            name= 'autor_livro'
            placeholder= 'Digite o nome do autor aqui'
            text= 'Nome do autor'
            handler={handlerChangeBook}
          />
          <Input 
            type= 'textarea'
            name= 'descricao_livro'
            placeholder= 'Digite a descrição de seu livro aqui'
            text= 'Descrição do Livro'
            handler={handlerChangeBook}
          />
          <Select className={styles.leftAlign}
            name= 'cod_categoria'
            text= 'Insira a Categoria do Livro'
            categorias= {categorias}
            handler={handlerChangeBook}
          />
          <Button
            rotulo= 'Cadastrar'
          />
        </form>
    </section>
  )
}

export default CreateBooks;