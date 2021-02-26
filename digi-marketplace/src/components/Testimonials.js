import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials__component">
        <h3>What Clients Say</h3>
        <div className="testimonails__content">
          <div className="testimony">
            <img src="/qout.png" alt="quot" />
            <p>
              I have worked with ROZZ on Software development projects and the
              experience has been satisfactory both in the customer-supplier
              relationship and in the delivery times and quality of technical
              solutions. I hope to continue collaborating with them on WordPress
              Support in the future.
            </p>
            <h3>Ebrahim Sani</h3>
            <h5>Director at Google</h5>
          </div>
          <div className="testimony">
            <img src="/qout.png" alt="quot" />
            <p>
              I have worked with ROZZ on Software development projects and the
              experience has been satisfactory both in the customer-supplier
              relationship and in the delivery times and quality of technical
              solutions. I hope to continue collaborating with them on WordPress
              Support in the future.
            </p>
            <h3>Muh'd H.</h3>
            <h5>Director at Facebook</h5>
          </div>
          <div className="testimony">
            <img src="/qout.png" alt="quot" />
            <p>
              I have worked with ROZZ on Mobile App development projects and the
              experience has been satisfactory both in the customer-supplier
              relationship and in the delivery times and quality of technical
              solutions. I hope to continue collaborating with them on WordPress
              Support in the future.
            </p>
            <h3>Willian Jay</h3>
            <h5>Director at Uber</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
