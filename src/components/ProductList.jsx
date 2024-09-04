/** @format */

import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [category,setCategory] = useState('All');
    const [inpSearch,setInpSearch] = useState('');
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const filteredProducts = products.filter((product) => {
      const categoryMatch =
          category === "All" ||
          (category === "Mens" && product.category === "men's clothing") ||
          (category === "women" && product.category === "women's clothing") ||
          (category === "jewelery" && product.category === "jewelery") ||
          (category === "electronics" && product.category === "electronics");
      const searchMatch = product.title
          .toLowerCase()
          .includes(inpSearch.toLowerCase());
      return categoryMatch && searchMatch;
  });


    return (
        <div className="row justify-content-center mt-5 pt-5 mx-0 px-0">
            <div className="col-lg-2 col-12 m-0 p-0" style={{ position: "sticky" }}>
              <div className="row px-4 mt-2">
              
              <p className=" col-lg-12 col-md-12 col-sm-12 btn btn-info px-2 py-0 my-2 fw-medium" >
                    {" "}
                    Sort By:-
                 </p>

                 <p className={category ==='All' ? 'col-lg-12 col-md-6 col-sm-12 btn btn-success px-2 py-0 my-2 fw-medium' : 'col-lg-12 col-md-6 col-sm-12 btn btn-warning px-2 py-0 my-2 fw-medium' } onClick={()=>setCategory("All")}>
                    {" "}
                   All{" "}
                 </p>

                 <p className={category ==='Mens' ? 'col-lg-12 col-md-6 col-sm-12 btn btn-success px-2 py-0 my-2 fw-medium' : 'col-lg-12 col-md-6 col-sm-12 btn btn-warning px-2 py-0 my-2 fw-medium' } onClick={()=>setCategory("Mens")}>
                    {" "}
                    Mens Clothings{" "}
                 </p>
                <p className={category ==='women' ? 'col-lg-12 col-md-6 col-sm-12 btn btn-success px-2 py-0 my-2 fw-medium' : 'col-lg-12 col-md-6 col-sm-12 btn btn-warning px-2 py-0 my-2 fw-medium' } onClick={()=>setCategory("women")}>
                    {" "}
                    Womens Clothings{" "}
                 </p>
                <p className={category ==='electronics' ? 'col-lg-12 col-md-6 col-sm-12 btn btn-success px-2 py-0 my-2 fw-medium' : 'col-lg-12 col-md-6 col-sm-12 btn btn-warning px-2 py-0 my-2 fw-medium' } onClick={()=>setCategory("electronics")}>
                    {" "}
                    Electronics{" "}
                 </p>
                <p className={category ==='jewelery' ? 'col-lg-12 col-md-6 col-sm-12 btn btn-success px-2 py-0 my-2 fw-medium' : 'col-lg-12 col-md-6 col-sm-12 btn btn-warning px-2 py-0 my-2 fw-medium' } onClick={()=>setCategory("jewelery")}>
                    {" "}
                    Jewelery{" "}
                </p> 
              </div>
              
            </div>
            <div className="col-lg-10 m-0 p-2 row mainSec justify-content-start" >
            <div className="col-lg-10 m-0 p-2">
            <input type="search" className='searchInp' placeholder='search here' name="searchInp" onChange={(e)=>setInpSearch(e.target.value)} id="" />
            </div>
            {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <SingleProduct item={item} key={item.id} />
                    ))
                ) : (
                    <h4 className="text-center">No products found</h4>
                )}
            </div>
        </div>
    );
}

export default ProductList;
