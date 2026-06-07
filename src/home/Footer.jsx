import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <div>
        {/* <!-- footer section  --> */}
    <div className="footer ">
      <div className="main-footer ">
        <div className="mini-footer row">
          <ul>
            <li><h4>Contact Us</h4></li>
            <li>
              <Link to="#location"> <i className="fa-solid fa-location-pin"></i> Location</Link>
            </li>
            <li>
              <Link to="#"> <i className="fa-solid fa-phone"></i> call +1066250647</Link>
            </li>
            <li>
              <Link to="#"> <i className="fa-solid fa-envelope"></i> demo@gmail.com</Link>
            </li>
          </ul>
          <ul>
            <li><h4>
              <Link>Feane</Link>
            </h4></li>
            <span
              >Necessary, making this the first true generator<br />
              on the Internet. It uses Link dictionary of over 200<br />
              Latin words, combined with</span
            >
            <ul>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-square-instagram"></i>
            </ul>
          </ul>
          <ul>
            <li>  <h4>  Opening Hours </h4> </li>
            <li>Everyday</li>
            <li>10.00 Am -10.00 Pm</li>
          </ul>
        </div>
        <div className="small-footer">
          <h4>© 2026 All Rights Reserved By Free <Link to="https://abdulrhim.lovable.app/">ENG ABDULRAHIM ELSAYED</Link></h4>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Footer