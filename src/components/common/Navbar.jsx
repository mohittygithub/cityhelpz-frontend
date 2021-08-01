import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import * as images from "../../assets/images/index";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userReducer = useSelector((state) => state.userReducer);
  const { token } = userReducer;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    localStorage.getItem("token") && setIsLoggedIn(true);
  }, [token]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to={PATHS.HOME}>
          <img src={images.brandLogo} alt="brand" width="200px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={PATHS.HOME}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img
                      className={`rounded-circle article-img navbar-user-image`}
                      src={images.testUser}
                      id="img"
                      alt="user"
                    />
                  </Link>
                </li>
              )}
              {isLoggedIn ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={() => logoutHandler()}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to={PATHS.Login}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
