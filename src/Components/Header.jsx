import React from "react";
import main_logo from "../Images/mainLogo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lh-base ">
      <aside className="d-flex justify-content-around py-3 text-reset">
        <header className="fs-5 text-primary logo">
          <strong>
            Self <i class="bi bi-car-front"></i> Drive
          </strong>
        </header>
        <span className="d-flex gap-5 align-items-center text-primary">
          <Link className="text-decoration-none " to="/">Home</Link>
          <Link className="text-decoration-none ">About Us</Link>
          <Link className="text-decoration-none " to="cars/add">
            Add Cars </Link>
          <Link className="text-decoration-none ">Modify Bookings</Link>
          <Link className="text-decoration-none ">FAQ</Link>
          <Link className="text-decoration-none ">Contact Us</Link>
        </span>
      </aside>
    </div>
  );
};

export default Header;
