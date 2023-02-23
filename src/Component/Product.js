import React from 'react'


const Product = ({imgUrl, name, price}) => {
  return (
    <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
        <img src={imgUrl} className="card-img-top"/>
        <div className="card-body bg-white border-top">
          <h5 className="card-title">{name}</h5>
          <p className="card-text offset-9 text-success">{price}</p>
        </div>
    </div>
  )
}

export default Product




// <div className="row p-3 container mx-auto ms-6 mt-5" >
    //     {/* <div className="col"> */}
    //         <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png"        className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Sweet Strawberry</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>

    //         <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image1_.png" className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Spiced Mint</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>

    //         <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image11.png" className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Juicy Lemon</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>

    //         <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666775072/image_1.png" className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Fresh Orange</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>
    //     {/* </div> */}

    //     <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1669891362/image_1.png" className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Sweet Strawberry</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>

    //         <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image11.png" className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Sweet Strawberry</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>

    //         <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image1_.png" className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Sweet Strawberry</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>

    //         <div class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem"}}>
    //             <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666775072/image_1.png" className="card-img-top"/>
    //             <div className="card-body bg-white border-top">
    //                 <h5 className="card-title">Sweet Strawberry</h5>
    //                 <p className="card-text offset-9">$9.99</p>
    //             </div>
    //         </div>
    // </div>