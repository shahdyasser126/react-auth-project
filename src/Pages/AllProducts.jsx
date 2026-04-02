import React from "react";
import Img4 from "../images/Dev4.png";
import Img7 from "../images/7.png";
import Img6 from "../images/6.png";
import Img5 from "../images/5.png";
import Img8 from "../images/Frame 608 (1).png";
import Img9 from "../images/Frame 605.png";
import Img10 from "../images/Frame 606.png";
import Img11 from "../images/Frame 608.png";

export default function AllProduct() {

    const staticProducts = [
        { id: 1, img: Img7, name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, rating: 5, reviews: 88, discount: "-40%" },
        { id: 2, img: Img6, name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, rating: 4, reviews: 75, discount: "-35%" },
        { id: 3, img: Img5, name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, rating: 5, reviews: 99, discount: "-30%" },
        { id: 4, img: Img4, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, rating: 4, reviews: 65, discount: "-25%" },
        { id: 5, img: Img8, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, rating: 4, reviews: 65, discount: "-25%" },
        { id: 6, img: Img9, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, rating: 4, reviews: 65, discount: "-25%" },
        { id: 7, img: Img10, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, rating: 4, reviews: 65, discount: "-25%" },
        { id: 8, img: Img11, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, rating: 4, reviews: 65, discount: "-25%" },
    ];

    return (
        <div className="container my-5">
            <h3 className="mb-3">All Products</h3>
            <div className="row g-4">
                {staticProducts.map((p) => (
                    <div key={p.id} className="col-6 col-md-4 col-lg-3">
                        <div className="border rounded overflow-hidden position-relative bg-white h-100">
                            
                            {p.discount && (
                                <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 small">
                                    {p.discount}
                                </span>
                            )}

                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-100 bg-light p-3"
                                style={{ height: 160, objectFit: "contain" }}
                            />

                            <div className="p-3 text-center">
                                <div className="mb-1" style={{ fontSize: 13 }}>
                                    {p.name}
                                </div>
                                <div className="mb-1">
                                    <span className="fw-bold text-danger me-2">${p.price}</span>
                                    {p.oldPrice && (
                                        <span className="text-muted text-decoration-line-through">
                                            ${p.oldPrice}
                                        </span>
                                    )}
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