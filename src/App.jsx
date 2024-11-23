import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import navbar from './components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts([...data.products])
      });
  }

  console.log(products);

  if (products.length == 0) {
    return <h1>loading...</h1>

  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={navbar}/>
    </Routes>
    </BrowserRouter>
      <div className='container'>

        {
          products.map(product => (
            <div className='card' key={product.id}>
              <img src={product.thumbnail} alt={product.title} className='card-img' />
              
              <div className='detail'>
                <div className='tile'>{product.title}</div>
                <div className='descript'>{product.description}</div>
                <div className='price'>${product.price}</div>
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default App
