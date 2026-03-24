 import React from 'react'
import { Link } from 'react-router-dom';

export default function Wishlist() {
  
   

      return (
        <div className="container my-5 py-5">
          <nav aria-label="breadcrumb" className="mb-5">
            <ol className="breadcrumb bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/home" className="text-decoration-none text-secondary">Home</Link>
              </li>
              <li className="breadcrumb-item active text-dark" aria-current="page">
               Wishlist
              </li>
            </ol>
          </nav>
    
        
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h1 className="display-1 fw-medium mb-4 not-found-title">Do not have wishlist</h1>
              
              <p className="mb-5 text-dark">
            go home page to Add it.
              </p>
    
              <Link to="/home" className="btn btn-danger px-5 py-3 custom-btn">
                Back to home page
              </Link>
            </div>
          </div>
        </div>
      );
    }