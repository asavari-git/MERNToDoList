import React from "react";
import "./Navbar.css";
import { FcTodoList } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  //console.log(isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <FcTodoList />
            MyTODO
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/AboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/todo"
                >
                  AddTodo
                </Link>
              </li>
              <>
                {!isLoggedIn && (
                  <>
                    <li className="nav-item mx-2">
                      <Link
                        className="nav-link active btn-nav"
                        aria-current="page"
                        to="/SignUp"
                      >
                        SignUp
                      </Link>
                    </li>

                    <li className="nav-item mx-2">
                      <Link
                        className="nav-link active btn-nav"
                        aria-current="page"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}

                {isLoggedIn && (
                  <li className="nav-item mx-2" onClick={logout}>
                    <Link
                      className="nav-link active btn-nav"
                      aria-current="page"
                      to="#"
                    >
                      LogOut
                    </Link>
                  </li>
                )}
              </>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
