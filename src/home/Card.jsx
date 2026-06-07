import React from 'react'

function Card() {
  return (
    <div>
            {/* <!-- card --> */}
    <div class="card">
      <div class="card-small col-sm-4 col-md-5">
        <img src="images/o1.jpg" alt='images/01' />
        <div class="card-content">
          <h4>Tasty Thursdays</h4>
          <h6>20% <span>off</span></h6>
          <button>
            order now

            <span> <i class="fa-solid fa-cart-shopping"></i></span>
          </button>
        </div>
      </div>
      <div class="card-small col-sm-4 col-md-5">
        <img src="images/o2.jpg" alt='images/02'/>
        <div class="card-content">
          <h4>Pizza Days</h4>
          <h6>15% <span>off</span></h6>
          <button>
            order now

            <span> <i class="fa-solid fa-cart-shopping"></i></span>
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Card