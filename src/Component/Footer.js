import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-dark d-flex m-6 justify-content-between px-5">

        <div className="pt-5 px-5">
            <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666784614/footer.png" />
            <p class="text-light">Your natural candle made for <br /> your home and for your wellness</p>
        </div>
        

        <div className="d-flex mb-3">
            <section className=" p-2 pb-4 fs-9 fw-1 m-5">
                <p className="text-success">Discovery</p>
                <p className="text-light">New Season</p>
                <p className="text-light">Most Searched</p>
                <p className="text-light">Most Sold</p>
                
            </section>

            <section className=" p-2 pb-4 fs-9 fw-1 m-5">
                <p className="text-success">About</p>
                <p className="text-light">Help</p>
                <p className="text-light">Shipping</p>
                <p className="text-light">Affiliate</p>
                
            </section>

            <section className=" p-2 pb-4 fs-9 fw-1 m-5">
                <p className="text-success">Info</p>
                <p className="text-light">Contact Us</p>
                <p className="text-light">Privacy Popcies</p>
                <p className="text-light">Terms & Conditions</p>
                
            </section>
        </div>
    </div>
  )
}

export default Footer