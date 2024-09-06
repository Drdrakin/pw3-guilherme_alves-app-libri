import React from 'react';
import styles from './createBooks.module.css'
import Input from '../../components/Forms/Input';
import Select from '../../components/Forms/Select';
import Button from '../../components/Forms/Button';

const CreateBooks = () => {
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
        <Select
          name='categoria'
          text='Qual o gênero'
        />
        <Button
          rotulo='Cadastrar'
        />
    </section>
  )
}

export default CreateBooks;