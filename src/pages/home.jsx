import styles from './home.module.css'
import NavBar from '../components/layout/Navbar/NavBar'
import ViewBook from '../components/ViewBook/ViewBook';

function Home() {
  return (
    <>
      <NavBar />
      <ViewBook />
    </>
  )
}

export default Home;