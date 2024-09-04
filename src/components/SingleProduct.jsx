import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SingleProduct({item,i}) {
    const [element] = useState(item);    
    const navigate= useNavigate();
  return (
    <>
    <div
                    onClick={() => navigate(`/product/${element.id}`)}
                    className=" itemCard col-lg-5 col-md-5 m-2 p-2 card "
                    style={{ cursor: "pointer" }}
                >
                    <img src={element.image} alt="item" className="itemImg" />
                    <p className="fw-bold titleText">{element.title}</p>
                    <p className="descriptionText">{element.description}</p>
                    <p className="fw-bold text-dark">₹{element.price}</p>
                    <div className="">
                        <div className="btn btn-primary">Show Item</div>
                    </div>
                </div>
    </>
  )
}

export default SingleProduct;