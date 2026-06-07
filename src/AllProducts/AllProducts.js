import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import AllData from "../AllData/AllData";
import { apiValue } from "../AllData/AllData";
import { CartProvider, useCart } from "react-use-cart";
function Page() {
  const data = useContext(apiValue);
  const { addItem } = useCart();
    const [search, setSearch] = useState("All");
    const [text, setText] = useState("");
  //  fliter
  const filterData=data.filter((item)=>{
    if(search!=="All"&&item.cuisine!==search) return false;
      if (
      text &&
      !item.name.toLowerCase().includes(text.toLowerCase()) &&
      item.id != text
    )
      return false;
    return true;
  })
  const getData=(event)=>{
    setText(event.target.value);
  }
  return  (
    <div>
      <div className="container mt-5">
 <ul className="list">
  <li className="list-li" onClick={() => setSearch("All")}>All</li>
  <li  className="list-li" onClick={() => setSearch("Italian")} >Italian</li>
  <li className="list-li" onClick={() => setSearch("Pakistani")} >Pakistani</li>
</ul> 
         <input
          placeholder="Search"
          className="form-control w-100 my-5"
          onChange={getData}
        ></input>
        <div className="row">
          {filterData.map((item) => {
            return (
              <div key={item.id} className="col-md-4 text-center mb-4">
                <div className="card p-3 w-100 h-100 card-products ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-100  h-50"
                    style={{
                      height: "550px",
                      // objectFit: "cover",
                    }}
                  />
                  <br />
                  <h4>{item.name}</h4>
                  <h4>{item.cuisine}</h4>
                  <h4>{item.id}</h4>
                  {/* <p>${item.price}</p> */}
                  <Link to={`/product/${item.id}`}
                   className="button">Details
                  </Link>
                  <button
  type="button"
  className="button"
  onClick={() =>
    addItem({
      id: item.id,
      name: item.name,
      price: item.price || 0,  // لو مفيش price نحط 0
      image: item.image,
      cuisine: item.cuisine,
      ingredients: item.ingredients,
    })
  }
>
  Add To Cart
</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
function AllProducts() {
  return (
    <div>
      <Page />
    </div>
  );
}

export default AllProducts;
