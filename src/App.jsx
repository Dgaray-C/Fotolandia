import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {

  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting="¡Hola! Prepárate para descubrir lo que ofrecemos." />
    </>
  )
}

export default App
