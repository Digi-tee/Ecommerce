import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Cart = () => {
  return (
    <div>
        <Navbar />
            <div className='text-center mt-5'>
                <h3 className='fs-4'>Your cart items</h3>
                <p className='text-success'><a href="#">Back to shopping </a></p>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <div className='row'>
                           
                            <img className="col-md-3" src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image1_.png" alt="" />

                            <div className="col-md-5 pt-3" >
                            <h3>Spiced Mint Candleaf®</h3>
                            <br></br>
                            <p className='text-success'><a href=''>Remove</a></p>
                            </div>
                         
                        </div>
                        <td className='pt-5'>$9.99</td>
                        <td className='pt-5'><span>+</span><span>1</span><span>-</span></td>
                        <td className='pt-5'>$9.99</td>
                    </tr>
                </tbody>
            </table>
        <Footer />
    </div>
  )
}

export default Cart