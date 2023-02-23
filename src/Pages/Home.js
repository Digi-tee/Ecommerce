import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <ProductList />
        
        <Footer />
    </div>
  )
}

export default Home