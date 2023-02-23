import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import truck from '../images/delivery-truck.png'

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
        <div className="m-5 mb-5 d-flex justify-content-between ">
          <div className='d-flex flex-column flex-grow-1'>
            <div className='text-center'>
              <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image1_.png" alt='product'  className='text-bg-light w-100 h-100'/>
            </div>
            <div className='fs-5 text-center'>
              <h5>All hand-made with natural soy wax. Candleaf is <br /> made for your pleasure moments </h5>
              <div className='d-flex justify-content-center'>
                <img src={truck} alt="free-shipping"/>
                <h6> <span className='text-success'>FREE SHIPPING</span> </h6>
              </div>
            </div>
          </div>


          <div className='right flex-grow-1 text-black m-3'>
            <h2>Spiced Mint Candleaf®</h2>
            <div className='d-flex justify-content-between align-items-center mb-5'>
              <div>
                <h4 > $ 9.99</h4>
                <div>
                  <p>Quantity</p>
                  <div className='border mb-5 fs-6 px-0 text-center'>
                    <span>+</span><span>1</span><span>-</span>
                  </div>
                </div>
              </div>


              <div className='p-5'>
                <p className='px-3'><span> <input type="radio" className="" id="" /> </span>One time purchase <span className='border px-3'>4 weeks</span></p>

                <div className=''>
                  <p className='border px-3 '>  <span> <input type="radio" className='checked' id="" checked='success'/> </span>
                    Subscribe now and ger 10% discount <br /> on every recurring Order. The discount will <br /> be applied at check out. <span className='text-success'>See details</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button type="button" className='bg-success px-5'><img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666619060/Cart.png" alt="" />+Add to cart</button>
            </div>

            <div className='border p-2 mt-5 w-75'>
              <p> Wax: <span className='text-muted'> Top grade soy wax that delivers a smoke less, consistent burn.</span></p>
             
              <p> Frangrance:  <span> Premium quality ingredients with natural essential oils.</span></p>

              <p className=''> Burning Time: <span>70-75hours</span> <span>Dimension: 10cm x 5cm</span> <span>Weight: 400g</span></p>
              
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ProductDetails