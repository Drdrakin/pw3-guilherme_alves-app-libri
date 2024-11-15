import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import styles from './UpdateBooks.module.css'
import Input from '../../components/Forms/Input'
import Select from '../../components/Forms/Select'
import Button from '../../components/Forms/Button'

const EditBook = () => {

    /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
    const [book, setBook] = useState({});

    /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
    const {cod_livro} = useParams();

    /* OBJETO DE NAVEGAÇÃO */
    const navigate = useNavigate();

    /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
    const [categories, setCategories] = useState([]);

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book)
    }

    /* CAPTURA OS DADOS DA SELECT */
    function handleChangeCategory(event) {
        setBook({...book, cod_categoria: event.target.value});
        console.log(book);
    }

    /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
    useEffect(()=>{
        fetch('http://localhost:5000/listagemCateorias', {
            method:'GET',
            headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
            },
        }).then(
            (resp)=>
                    resp.json()
        ).then(
            (data)=>{
            setCategories(data.data);
            // console.log('TESTE-DATA:' + data.data);
            }
        ).catch(
            (error)=>{
            console.log(error);
            }
        )
    }, [])

    /* RECUPERA OS DADOS DO LIVRO DO BACKEND */
    useEffect(()=>{

        fetch(`http://localhost:5000/listagemLivro/${cod_livro}`, {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log('LIVROS: ' + data.data.cod_livro);
            setBook(data.data);
            console.log('STATE: ' + book.nome_livro);
        })
        .catch((err)=>{console.log(err)});

    }, []);

    /* Handler do update */
    function updateBook(book) {
    
        console.log(JSON.stringify(book))

        fetch('http://localhost:5000/alterarLivro', {
            method:'PUT',
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
                navigate('/listBook',{state:'LIVRO ALTERADO COM SUCESSO!'});
            }
        )
        .catch(
            (err)=>{ console.log(err) }
        )
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        updateBook(book);
    }

    return (
    <section className={styles.createBookContainer}>
        <h1>Editar Livro</h1>
        <form onSubmit={submit} className={styles.createBookContainer}>
            <Input 
                type= 'text'
                name= 'nome_livro'
                placeholder= 'Digite o novo nome de seu livro aqui'
                text= 'Título de Livro'
                handler={handlerChangeBook}
                value={book.nome_livro}
            />
            <Input 
                type= 'text'
                name= 'autor_livro'
                placeholder= 'Digite o novo nome do autor aqui'
                text= 'Nome do autor'
                handler={handlerChangeBook}
                value={book.autor_livro}
            />
            <Input 
                type= 'textarea'
                name= 'descricao_livro'
                placeholder= 'Digite a nova descrição de seu livro aqui'
                text= 'Descrição do Livro'
                handler={handlerChangeBook}
                value={book.descricao_livro}
            />
            <Select className={styles.leftAlign}
                name= 'cod_categoria'
                text= 'Insira a nova Categoria do Livro'
                categorias= {categories}
                handler={handlerChangeBook}
            />
            <div className={styles.buttoni}>
                <Button
                    rotulo='Salvar Alterações'
                />
            </div>
        </form>
    </section>
    )
}

export default EditBook
