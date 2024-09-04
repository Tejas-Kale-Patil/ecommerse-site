import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart,removeSingleFromCart } from '../Redux/cartSlice';

function Cart() {
  const item = useSelector(state => state.cart.items);
  const[items,setItems] = useState(item || [])
useEffect(()=>{
  setItems(item)
},[item])
  const dispatch = useDispatch();
  
  const totalPrice = items && items.length > 0 ? items.reduce((total, item) => total + (item.price*item.count), 0): [];

  function removeAllItem(product) {
    dispatch(removeItemFromCart(product));
  }
  function removeSingle(product){
    dispatch(removeSingleFromCart(product))
  }
  function addItem(product){
    dispatch(addItemToCart(product))
  }

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4 text-center">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div className="card mb-3 shadow-sm" key={index}>
            <div className="row g-0 align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-12 text-center p-3">
                <img src={item.image} className="img-fluid rounded cartImg" alt={item.title} />
              </div>
              <div className="col-lg-6 col-md-5 col-sm-12 p-3">
                <h5 className="fw-bold titleText">{item.title}</h5>
                <p className="text-muted descriptionText">{item.description}</p>
                <p className="fw-bold text-dark">₹{item.price}</p>
                <p className="fw-bold text-dark">
                  <button className='btn btn-primary' 
                disabled = {item.count > 1 ? false : true}  onClick={()=>removeSingle(item)}>-</button>
                <button className='btn btn-primary mx-3'>{item.count}</button>
                <button className='btn btn-primary'onClick={()=>addItem(item)}>+</button></p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 text-lg-end text-md-end text-center p-3">
                <button className="btn btn-danger" onClick={() => removeAllItem(item.id)}>Remove All</button>
              </div>
            </div>
          </div>
        ))
      )}
      {items.length > 0 && (
        <div className="text-end">
          <h3 className="mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
          <button className="btn btn-success mt-3">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
