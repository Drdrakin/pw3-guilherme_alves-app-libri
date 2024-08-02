import './App.css'
import CardBooks from './components/cardBooks'

function App() {
  return (
    <>
      <CardBooks
        title = "Rápido e Devagar: Duas formas de pensar"
        author = "Daniel Kahneman "
      />
      <CardBooks
        title = "Filhos da Degradação"
        author = "Felipe Castilho"
      />
      <CardBooks
        title = "Pompéia a Cidade Viva"
        author = "Alex Butterworth"
      />
    </>
  )
}

export default App
