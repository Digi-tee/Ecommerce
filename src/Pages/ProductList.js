import React, {useState, useEffect } from 'react'
import Product from '../Component/Product';
import axios from "axios"

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts();
    }, []);

    const getProducts = () =>{
        axios.get("http://localhost:3000/products")
        .then(response => {
            setProducts(response.data)
        })
    }

  return (
    <div>
        <article className='mt-5 text-center'>
            <h1>Products</h1>
            <p>Order it for you or for your beloved ones</p>
        </article>
        <div className="row">
            {products.map((product) => {
                return  (
                    <div key={product.id} className="col-md-3 my-3">
                        <div className="card shadow border-0" style={{ backgroundColor: "#F7F8FA" }}>
                            <img src={product.img} className="card-img-top img-fluid" />
                            <div className="card-body bg-white">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text text-success">{product.price}</p>
                            </div>
                        </div>
                    </div>
                )})
            }
        </div>
    </div>
  )
}

export default ProductList;