import React from 'react'
import { Link } from 'react-router'
import { CartProvider,useCart } from 'react-use-cart'

function Navbar() {
  const {totalUniqueItems}=useCart();
  return (
    <div>
          {/* <!-- navbar --> */}
      <nav className="nav-content">
        <h1>Feane</h1>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/book">BOOK TABLE</Link></li>
        </ul>
        <ul className="nav-ul">
          <i className="fa-solid fa-user"></i>
          <Link className='cart-i' to="/cart">
          
          <i className="fa-solid fa-cart-shopping">  </i>({totalUniqueItems})
         
          </Link>
          <i style={{Color:"#fff"}} className="fa-solid fa-magnifying-glass"></i>
          <button>Order Online</button>
        </ul>
       
      </nav>
    </div>
  )
}

export default Navbar