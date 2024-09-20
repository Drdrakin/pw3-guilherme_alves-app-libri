import React from 'react';
import styles from './createBooks.module.css'
import Input from '../../components/Forms/Input';
import Select from '../../components/Forms/Select';
import Button from '../../components/Forms/Button';
import { useState, useEffect } from 'react';

const CreateBooks = () => {

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
      (data) => {
        console.log('data: ' + data.data[0].nome_categoria)
      }
    )
    .catch(
      (error) =>{
        console.log(error)
      }
    )
  }, []);

  return (
    <section className={styles.createBookContainer}>
        <h1>Cadastrar novos livros</h1>
        <Input 
          type= 'text'
          name= 'txt_livro'
          placeholder= 'Digite o nome de seu livro aqui'
          text= 'Título de Livro'
        />
        <Input 
          type= 'text'
          name= 'txt_livro'
          placeholder= 'Digite o nome do autor aqui'
          text= 'Nome do autor'
        />
        <Input 
          type= 'textarea'
          name= 'txt_livro'
          placeholder= 'Digite a descrição de seu livro aqui'
          text= 'Descrição do Livro'
        />
        <Select className={styles.leftAlign}
          name='categoria'
          text='Insira o gênero do livro'
        />
        <Button
          rotulo='Cadastrar'
        />
    </section>
  )
}

export default CreateBooks;