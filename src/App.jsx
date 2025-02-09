
import './App.css'
import Productos from './components/Productos'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'

function App() {

  const productos = [
    {
      nombre: 'Pantalla táctil',
      precio: 34.7,
      fecha: new Date()
    },
    {
      nombre: 'Ratón inalámbrico',
      precio: 34.8,
      fecha: new Date()
    },
    {
      nombre: 'Teclado',
      precio: 22.6,
      fecha: new Date()
    }
  ]

  return (
    <>
      <Header />
      <Productos productos={productos} />
      <Footer />
    </>
  )
}

export default App
