import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "./contact.scss";

function Contact() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> 50 Main st
                Boston MA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> (555)
                555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <div className="col-md">
            <ReactMapGL
              className="map"
              {...viewport}
              mapboxApiAccessToken={
                "pk.eyJ1IjoiZ2FscGFsYXMyNjUiLCJhIjoiY2txOThlYWh6MGFldjJwam94dTlldjh0eSJ9.yC0mBcPnSJQTe6sSsfbIVQ"
              }
            ></ReactMapGL>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
