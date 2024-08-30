import './App.css'
import NavBar from './components/layout/Navbar';
import Container from './components/layout/Container';
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
              <Route path='/listBook' element={<CreateBooks />}/>
              <Route path='/createBook' element={<ListBooks />}/>
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App;
