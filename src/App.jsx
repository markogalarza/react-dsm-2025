
import './App.css'
import Productos from './components/Productos/Productos'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import NuevoProducto from './components/Productos/NuevoProducto'
import { useState } from 'react'
import AutContext from './store/AutContext'
import ProductosContext from './store/ProductosContext'

function App() {

  const [login, setLogin] = useState(false)
  const [language, setLanguage] = useState('es-ES')

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Pantalla táctil',
        precio: 34.7,
        fecha: new Date(2025, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón inalámbrico',
        precio: 34.8,
        fecha: new Date(2026, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Teclado',
        precio: 22.6,
        fecha: new Date(2026, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Auriculares',
        precio: 56.6,
        fecha: new Date(2025, 2, 2)
      },
    ])

  const addProducto = (producto) => {
    //productos.push(producto)
    setProductos((prevProductos) => {
      return [producto, ...prevProductos]
    })
  }

  const borraProducto = (id) => {
    //alert(id)
    // let productosAux = [...productos]
    // productosAux = productosAux.filter((elemento) => {
    //   return elemento.id != id
    // })
    // setProductos(productosAux)
    setProductos((prevProductos) => {
      return prevProductos = prevProductos.filter((elemento) => {
        return elemento.id != id
      })
    })
  }

  return (
    <>
      <AutContext.Provider value={{ login: login, language: language }}>
        <Header />
        <NuevoProducto addProducto={addProducto} />
        <ProductosContext.Provider value={{borrar: borraProducto}}>
          <Productos productos={productos} borraProducto={borraProducto} />
        </ProductosContext.Provider>
        <Footer />
      </AutContext.Provider>
    </>
  )
}

export default App
