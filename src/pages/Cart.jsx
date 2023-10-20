import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../redux/cartslice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
    const navigate = useNavigate() 
  console.log(cartArray);
  const dispatch = useDispatch()
  const [total,setTotal] =useState(0)
  const totalAmount =()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((a,b)=>a+b))
    }
    else{
      setTotal(0)
    }
  }
 const checkout=()=>{
  dispatch(emptyCart())
  alert("succesfully placed the order")
  navigate("/")
 }
  useEffect(()=>{
    totalAmount()
  },[cartArray])


  return (
    <div style={{ marginTop: "150px" }} className="d-flex mb-5 ">
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0px 1rem",
          marginLeft: "350px",
        }}
      >
        <thead>
          <tr className="border shadow-lg ">
            <th style={{ padding: "20px 40px 20px 40px" }}>#</th>
            <th style={{ padding: "20px 40px 20px 40px" }}>Product Name</th>
            <th style={{ padding: "20px 40px 20px 40px" }}>image</th>
            <th style={{ padding: "20px 40px 20px 40px" }}>Price</th>
            <th style={{ padding: "20px 40px 20px 40px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartArray?.length > 0 ? (
            cartArray?.map((products, index) => {
              return (
                <>
                  <tr key={index} className="shadow-lg">
                    <td style={{ padding: "20px 40px 20px 40px" }}>
                      {index + 1}
                    </td>
                    <td style={{ padding: "20px 40px 20px 40px" }}>
                      {products?.title}
                    </td>
                    <td style={{ padding: "20px 40px 20px 40px" }}>
                      <img
                        width={"100px"}
                        height={"100px"}
                        src={products?.thumbnail}
                      ></img>
                    </td>
                    <td style={{ padding: "20px 40px 20px 40px" }}>
                      ${products?.price}
                    </td>
                    <td style={{ padding: "20px 40px 20px 40px" }}>
                      {" "}
                      <button style={{ border: "none" }} onClick={()=>dispatch(removeFromCart(products.id))}>
                        <i className="fa-solid fa-trash text-primary fs-4 "></i>
                      </button>
                    </td>
                    
                  </tr>
               
                </>
              );
            })
          ) : (
            <p>Your cart is empty</p>
          )}
        </tbody>
      </table>

      {
        cartArray?.length>0 &&
          (
            <div className="border mt-3 w-25 d-flex justify-center flex-column align-items-center ms-5">
            <h3 className="">Cart summary</h3>
            <h5>Total Products <span>{cartArray.length}</span></h5>
            <h4>Total : $ <span>{total}</span></h4>
            <button className="btn bg-success" onClick={checkout}> check out</button>

                  </div>
          )
        
       
      }
    </div>
  );
}

export default Cart;
