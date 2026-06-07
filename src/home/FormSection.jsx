import React from 'react'

function FormSection() {
  return (
    <div>
         {/* <!-- form section --> */}
    <div className="form-section" id="location">
      <div className="container">
        <div className="row">
          <form className="col-md-5">
            <legend className="mt-5">Book A Table</legend>
            <input
              className="form-control mb-3 py-4"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="form-control my-4 py-4"
              type="text"
              name="name"
              placeholder="Phone Number"
            />
            <input
              className="form-control my-4 py-4"
              type="email"
              name="name"
              placeholder="Your Email"
            />
            <input
              className="form-control my-4 py-4"
              type="number"
              name="name"
              placeholder="How Many person"
            />
            <input
              className="form-control my-4 py-4"
              type="date"
              name="name"
              placeholder="mm/dd/yyy"
            />
            <input type="submit" value="BOOK NOW" />
          </form>
          {/* <!-- iframe section --> */}
          <div className="col-md-5">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27542.673030045324!2d31.359695283074835!3d30.35566363514015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458090d0501bfb3%3A0x6dc36ceddb15a916!2sMashtul%20as%20Suq%2C%20Mashtoul%20as%20Souq%2C%20Mashtol%20Al%20Souq%2C%20Al-Sharqia%20Governorate!5e0!3m2!1sen!2seg!4v1772301072104!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{style:"border: 0" }}
              // style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title=" Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FormSection