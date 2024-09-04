import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';
import '../App.css'

function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchData(){
   await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>setProduct(data)
    ).catch(err=>console.log(err)
    )
    }

  useEffect(() => {
  fetchData();
  }, []);

  const addToCart = (product) => {  
     dispatch(addItemToCart(product));
     
    navigate('/cart')
  };
  return (
    <div className="container mt-5 pt-5">
        {
          product && product !== null ?
          <div className="card row flex-row" style={{height:'min-content'}}>
            <div className="col-lg-6 border text-center imgContainer">
              <img src={product.image} className='p-2 itemImgDetail'  alt="" />
            </div>
            <div className="col-lg-6 m-0 p-2" style={{maxHeight:'max-content'}}>
              <div className='p-2'>
              <h5 className='fw-bold py-2 text-muted'>{product.category}</h5>
              <h4 className='fw-bold py-2 text-muted'>{product.title}</h4>
              <p>{product.description}</p>
              <h2>₹ {product.price}</h2>
              <div className='d-flex align-items-center'>
                <p className='text-white bg-success rounded-pill px-3 py-1 fw-bold'>{product.rating.rate} stars</p> 
                <p className='px-3 fw-bold text-muted'>{product.rating.count} reviews and ratings</p> 
              </div>
              <button type="button" className="btn btn-primary" onClick={()=>addToCart(product)}>Add To Cart</button>  
              </div>
            </div>
          </div>
      :''
        }
    </div>
  );
}

export default ProductDetails;
