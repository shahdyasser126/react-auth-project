import React, { useState } from "react";
import mainImg from "../images/main.png";
 
import Img1 from "../images/1.png";
import Img2 from "../images/2.png";
import Img3 from "../images/3.png";
import Img4 from "../images/4.png";
import Img7 from "../images/7.png";
import Img6 from "../images/6.png";
import Img5 from "../images/5.png";
import Img42 from "../images/4-2.png";

export default function SingleProduct() {
  const [count, setCount] = useState(1);
  const [mainImage, setMainImage] = useState(mainImg);

 
 

  const products = [
    {
      img: Img7,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
      discount: "-40%",
    },
    {
      img: Img6,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 4,
      reviews: 75,
      discount: "-35%",
    },
    {
      img: Img5,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 5,
      reviews: 99,
      discount: "-30%",
    },
    {
      img: Img42,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4,
      reviews: 65,
    },
  ];

return (
    <div className="container  my-5">
      <nav>
        <small className="text-muted">
          Account / Gaming /{" "}
          <strong className="text-dark">Havic HV G-92 Gamepad</strong>
        </small>
      </nav>

      <div className="row mt-4 g-4">
 
<div className="col-1 d-md-flex flex-column gap-2">
  {[Img1, Img2, Img3, Img4].map((img, i) => (
    <div key={i} className="rounded p-1 shadow-sm div_img">
      <img
        src={img}
        className="img-fluid"
        alt="thumb"
        onClick={() => setMainImage(img)}
        style={{ cursor: "pointer" }}
      />
    </div>
  ))}
</div>

   <div class="col-md-5 ">
      <div class=" rounded position-relative   text-center w-100 h-100 div_img">
        <span class="badge bg-danger position-absolute top-25 start-0 m-3 ms-5">-6%</span>
        <button class="btn btn-light btn-sm position-absolute top-25 end-0 m-3 me-5 shadow-sm btn3">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"/>
</svg>
        </button>
        <img src={mainImage} className="object-fit-cover me-4 w-100 h-100 img" width="500"  alt="Apple Watch" id="big-img"/>
      </div>
    </div>

        <div className="col-md-6">
          <h3>Havic HV G-92 Gamepad</h3>

          <div className="mb-2 d-flex align-items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi ${i < 4 ? "bi-star-fill" : "bi-star"} text-warning`}
              ></i>
            ))}
            <small className="text-muted ms-2">(150 Reviews)</small> |{" "}
            <span className="text-success ms-1">In Stock</span>
          </div>

          <h4 className="text-black mt-2">$192.00</h4>

          <p className="text-muted text-black mb-2">
PlayStation 5 Controller Skin High quality vinyl with air <br /> channel adhesive for easy bubble free install & mess <br /> free removal Pressure sensitive.
          </p>
<hr />
          <div className="mb-3 d-flex align-items-center gap-2 mt-3 mb-3">
            <span>Colours:</span>
            <span
              className="bg-primary rounded-circle border border-dark "
              style={{ width: 20, height: 20 }}
            ></span>
            <span
              className="bg-danger rounded-circle border border-dark"
              style={{ width: 20, height: 20 }}
            ></span>
          </div>

          <div className="mb-3">
            <span className="me-2">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`btn btn-sm me-1  ${size === "M" ? "btn-danger" : "btn-outline-secondary"}`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="input-group w-25">
              <button
                onClick={() => setCount(Math.max(1, count - 1))}
                className="btn btn-outline-secondary border-2 fw-bolder"
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={count}
                readOnly
              />
              <button
                onClick={() => setCount(count + 1)}
                className="btn btn-outline-secondary border-2 fw-bolder text-light bg-danger"
              >
                +
              </button>
            </div>
            <button className="btn btn-danger btn-lg px-4 w-25  ">Buy Now</button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-heart  fs-5  "></i>
            </button>
          </div>

          <div className="border rounded p-3 pe-5 mb-4 w-75">
            <div className="d-flex gap-3 mb-3">
              <i className="bi bi-truck fs-3"></i>
              <div>
                <strong>Free Delivery</strong>
                <p className="mb-0 small text-muted">
                  Enter your postal code...
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 border-top pt-3 mt-3">
              <i className="bi bi-arrow-repeat fs-3"></i>
              <div>
                <strong>Return Delivery</strong>
                <p className="mb-0 small text-muted">Free 30 Days Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-5">
        {products.map((p, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div className="border rounded overflow-hidden position-relative bg-white h-100">
              {p.discount && (
                <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 small">
                  {p.discount}
                </span>
              )}

              <div className="position-absolute top-0 end-0 d-flex flex-column gap-1 p-2">
                 <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
              </div>

              <img
                src={p.img}
                alt={p.title}
                className="w-100 bg-light p-3 object-fit-contain"
                style={{ height: 160}}
              />

              <div className="p-3 text-center">
                <div className="mb-1" style={{ fontSize: 13 }}>
                  {p.title}
                </div>
                <div className="mb-1">
                  <span className="fw-bold text-danger me-2">${p.price}</span>
                  <span className="text-muted text-decoration-line-through">
                    ${p.oldPrice}
                  </span>
                </div>
                <div className="text-warning mb-1">
                  {"★".repeat(p.rating)}
                  {"☆".repeat(5 - p.rating)}
                  <span className="text-muted"> ({p.reviews})</span>
                </div>
                <button className="btn btn-dark btn-sm w-100 mt-2">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
