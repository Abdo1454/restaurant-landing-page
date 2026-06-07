import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router";

function Cart() {
  const {
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
    totalUniqueItems,
    emptyCart,
    isEmpty,
  } = useCart();
  if (isEmpty) {
    return (
      <div className="  text-center col-md-10">
        <img src="/images/cart.jpg" alt="Cart" style={{width:"300px"}}/>
        <h3>Your Cart is Empty</h3>
        <h4>
          <Link to="/menu">
            <button className="btn btn-primary mt-2 "> Shoping</button>
          </Link>
        </h4>
      </div>
    );
  }
  return (
    <div className=" col-md-10 m-auto ">
       <h3 className="text-center my-4">
              Daitails Of Products{" "}
              <span className="badge badge-primary">({totalUniqueItems})</span>
              <button
                onClick={() => {
                  emptyCart();
                }}
                className="btn btn-danger mx-2"
              >
                Empty Cart
              </button>
            </h3>
      <table className="table table-dark w-75 text-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Opreation</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
             
                <tr  key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-75"
                      style={{ height: "250px" }}
                    ></img>
                  </td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                    <button onClick={()=>{updateItemQuantity(item.id ,item.quantity+1)}} className="btn btn-warning mx-3">+</button>
                    <button onClick={()=>{updateItemQuantity(item.id ,item.quantity-1)}} className="btn btn-success">-</button>
                    <button onClick={()=>{removeItem(item.id)}} className="btn btn-danger mx-2">&times;</button>
                </td>
                </tr>
             
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
function AllCart() {
  return (
    <div>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
}

export default AllCart;
