import React from 'react'
import Navbar from './Navbar'
// import { Link } from 'react-router'

function Header() {
  return (
    <div>
         {/* <!-- header --> */}
    <header className="header-home col-12">
      {/* <!-- navbar --> */}
    <Navbar/>
      <div className="text">
        <h2>Faot Foot Restaurant</h2>
        <p>
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus
          sapiente<br />
          ad mollitia laborum quam quisquam esse error unde. Tempora ex<br />
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <button>Order Now</button>
      </div>
    </header>
    </div>
  )
}

export default Header