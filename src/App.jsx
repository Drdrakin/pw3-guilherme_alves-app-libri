import './App.css'
import NavBar from './layout/Navbar';
import Container from './layout/Container';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ListBooks from './pages/ListBooks';
import DetailBook from './pages/DetailBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter >
        <Container>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route path='/' element={<Home />}/>
              <Route path='/listBook' element={<ListBooks />}/>
              <Route path='/createBook' element={<CreateBooks />}/>
              <Route path='/detailBook/:cod_livro' element={<DetailBook />}/>
              <Route path='/editBook/:cod_livro' element={< EditBook/>}/>
              <Route path='/deleteBook/:cod_livro' element={<DeleteBook />}/>

            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App;
