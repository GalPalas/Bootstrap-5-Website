import React from "react";

function Showcase() {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Become a <span class="text-warning"> Web Developer </span>
            </h1>
            <p class="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button className="btn btn-primary btn-lg">
              Start The Enrollment
            </button>
          </div>
          <img
            className="image-fluid w-50 d-none d-sm-block"
            src="/images/showcase.svg"
            alt=""
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Showcase;