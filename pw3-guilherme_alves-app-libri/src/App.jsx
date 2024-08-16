import './App.css'
import CardBooks from './components/CardBook/CardBooks'
import bookCover1 from './assets/livros/rapido-e-devagar.jpg'
import bookCover2 from './/assets/livros/ordem_vermelha.jpg'
import bookCover3 from './assets/livros/pompeia-viva.jpg'

function App() {
  return (
    <>
      <view>
        <CardBooks
          title = "Rápido e Devagar: Duas Formas de Pensar"
          author = "Daniel Kahneman"
          image= {bookCover1}
        />
        <CardBooks
          title = "Filhos da Degradação"
          author = "Felipe Castilho"
          image= {bookCover2}
        />
        <CardBooks
          title = "Pompéia a Cidade Viva"
          author = "Alex Butterworth"
          image= {bookCover3}
        />
      </view>
    </>
  )
}

export default App;
