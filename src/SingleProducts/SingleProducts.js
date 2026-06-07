import React, { useContext,  } from "react";
import { Link,useParams } from "react-router-dom";
// import AllData from "../AllData/AllData";
import { apiValue } from "../AllData/AllData";
import { CartProvider, useCart } from "react-use-cart";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
function SingleProducts() {
  const data = useContext(apiValue);
  const { addItem } = useCart();
  const {id}=useParams();
    if (!Array.isArray(data)) return <p>Loading...</p>;

const productId = data.find((productId) => productId.id === Number(id));

// 🔥 أهم سطر
if (!productId) return <p>Loading product...</p>;
  return (
    <div>
      <Navbar/>
      <div className="container my-5">
        <div className="row singl-page">
          {/* {data.map((productId) => { */}
            {/* // return productId.id==productId ? ( */}
              {/* <div key={productId.id}> */}
                <div className="col-md-5 ">
                  <img
                    src={productId.image}
                    alt={productId.name}
                    className="w-75  h-50"
                    style={{
                      height: "550px",
                      // objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-5 ">
                  <h4>{productId.name}</h4>
                  <h4>Cuisine: {productId.cuisine}</h4>
                  <h4>Ingredients: {productId.ingredients}</h4>
                  <h4 >{productId.id}</h4>
                  {/* <p>${productId.price}</p> */}
                  <Link to="/menu" className="button">Back To Menu </Link>
                   <button
  type="button"
  className="button"
  onClick={() =>
    addItem({
      id: productId.id,
      name: productId.name,
      price: productId.price || 0,  // لو مفيش price نحط 0
      image: productId.image,
      cuisine: productId.cuisine,
      ingredients: productId.ingredients,
    })
  }
>
  Add To Cart
</button>
                </div>
              </div>
          
      </div>
      <Footer/>
    </div>
  );
}

export default SingleProducts;
