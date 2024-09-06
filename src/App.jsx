import './App.css'
import NavBar from './layout/Navbar';
import Container from './layout/Container';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ListBooks from './pages/ListBooks';

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
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App;
