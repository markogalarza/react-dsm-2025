
import './App.css'
import Productos from './components/Productos/Productos'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import NuevoProducto from './components/Productos/NuevoProducto'
import { useState } from 'react'

function App() {

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Pantalla táctil',
        precio: 34.7,
        fecha: new Date()
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón inalámbrico',
        precio: 34.8,
        fecha: new Date()
      },
      {
        id: Math.random().toString(),
        nombre: 'Teclado',
        precio: 22.6,
        fecha: new Date()
      },
      {
        id: Math.random().toString(),
        nombre: 'Pantalla 2',
        precio: 56.6,
        fecha: new Date()
      },
    ])

    const addProducto = (producto) => {
      //productos.push(producto)
      setProductos((prevProductos)=>{
        return [producto, ...prevProductos]
      })
    }

  return (
    <>
      <Header />
      <NuevoProducto addProducto={addProducto} />
      <Productos productos={productos} />
      <Footer />
    </>
  )
}

export default App
