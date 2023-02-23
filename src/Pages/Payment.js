import React from "react";

const Payment = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md mt-5">
          <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666616500/logo.png" />
          <p>
            <span className='text-success'> Cart </span>
            <i className="bi bi-chevron-right mx-3"></i>
            <span className='text-success'> Details </span>
            <i className="bi bi-chevron-right mx-3 "></i>
            <span> Shipping </span>
            <i className="bi bi-chevron-right mx-3"></i>
            <span> Payment </span>
          </p>
          <article className="d-flex ">
            <p className="">Contact</p>
            <p className="mx-auto">
              Do you have an account?
              <span className="text-success"> Login</span>
            </p>
          </article>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email or mobile phone number"
            aria-describedby="emailHelp"
          />
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className=" form-check-label text-primary" for="flexCheckDefault">
              Add me to Candleaf newsletter for a 10% discount
            </label>
          </div>
        </div>

        <div className="col-md"></div>

        <article className="container">
          <p className="my-3 text-bold fw-bold text-primary"> Shipping Address</p>
          <div className="row">
            <div className="mb-3 col-md-3">
              <input
                type="name"
                className="form-control"
                id="exampleInputFirstName"
                placeholder="Name"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3 col-md-3">
              <input
                type="second-name"
                className="form-control"
                id="exampleInputSecondName"
                placeholder="Second Name"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="mb-3 col-md-6">
            <input
              type="second-name"
              className="form-control"
              id="exampleInputSecondName"
              placeholder="Address and number"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3 col-md-6">
            <input
              type="second-name"
              className="form-control"
              id="exampleInputSecondName"
              placeholder="Shipping note (optional)"
              aria-describedby="emailHelp"
            />
          </div>

          <div className=" row ">
            <div className="mb-3 col-md-2">
              <input
                type="second-name"
                className="form-control p-auto h-100"
                id="exampleInputSecondName"
                placeholder="City"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3 col-md-2 ">
              <input
                type="second-name"
                className="form-control p-auto h-100 mb-3"
                id="exampleInputSecondName"
                placeholder="Postal Code"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-floating col-md-2">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Province</option>
                <option value="1">Nigeria</option>
                <option value="2">USA</option>
                <option value="3">Ghana</option>
              </select>
              <label
                className="fw-extra-small align-baseline"
                for="floatingSelect"
              >
                Province
              </label>
            </div>
          </div>

          <div className="form-floating col-md-6">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Italy</option>
              <option value="1">Nigeria</option>
              <option value="2">USA</option>
              <option value="3">Ghana</option>
            </select>
            <label className="fw-extra-small" for="floatingSelect">
              Country/Region
            </label>
          </div>

          <div class="form-check mt-2 text-primary">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label class="form-check-label" for="defaultCheck1">
                Save number to get 10% discount in future checkout
            </label>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Payment;