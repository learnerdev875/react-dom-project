import React from 'react'
import {Routes, Route,NavLink} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <>
    <nav className='navbar'>
      <NavLink to='/'
      className={({isActive})=>(isActive? 'link active':'link')}
      end>Home</NavLink>
      <NavLink to='products'
      className={({isActive})=>(isActive? 'link active':'link')}>Products</NavLink>
      <NavLink to='about'
      className={({isActive})=>(isActive? 'link active':'link')}>About</NavLink>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<SingleProduct/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App