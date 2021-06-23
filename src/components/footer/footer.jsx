import React from "react";

function Footer() {
  return (
    <section className="bg-dark p-5 text-center text-white position-relative">
      <div className="container">
        <p className="lead">Copyright &copy; 2021 Frontend Bootcamp</p>
        <a href="/#" className="p-5 position-absolute end-0 bottom-0">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </section>
  );
}

export default Footer;
