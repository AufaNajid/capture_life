"use client";
import { useState, useEffect } from "react";
interface NavBarProps {
  brandName: string;
  imageSrcPath: any;
  navItems: string[];
}
function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="
        navbar-collapse
        align-items-start
        flex-column
        flex-md-row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((items, index) => (
              <li
                key={items}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <a
                  className={`nav-link px-3 py-2 mx-1 transition-colors hover:!text-black hover:!bg-[#f0f0f0] !rounded-md ${
                    selectedIndex === index 
                      ? "active fw-bold !text-black !bg-[#f0f0f0]" 
                      : "!text-gray-600"
                  }`}
                  href="#"
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
