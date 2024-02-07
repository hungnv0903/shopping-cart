import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { rootState } from "../redux/types/model";
import { resultProdcutAddtoCart } from "../component/checkout/CheckOut";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [listProductCart, setListProductCart] = useState<any[]>([]);
  useEffect(() => {
    navigate("/products");
  }, []);

  const productAddtoCart = useSelector(
    (state: rootState) => state.AddtoCartreducer
  );

  useEffect(() => {
    setListProductCart(resultProdcutAddtoCart(productAddtoCart));
  }, [productAddtoCart]);

  const navlink = [
    { path: "/", title: "Home" },
    { path: "/products", title: "Products" },
    { path: "/review", title: "Review" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navlink.map((item: any, index: number) => (
                <li key={index} className="nav-item">
                  <NavLink
                    to={item.path}
                    className="nav-link active"
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "",
                      display: "block",
                    })}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to="/" className="me-4 col-6 fs-5 fw-bold ps-4">
              Beauty.bd
            </NavLink>
            <NavLink to="/checkout" className="me-4">
              <i
                className="fa-solid fa-cart-shopping fs-3"
                style={{ position: "relative" }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  {listProductCart.length}
                </span>
              </i>
            </NavLink>
          </div>
        </div>
      </nav>
      {
        location.pathname==='/'?(
          <div className="m-auto col-10 d-flex justify-content-center">
          <img
            src="https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?b=1&s=170667a&w=0&k=20&c=Ec_T3ZKM9I6O_7-3_ZhV2b1Xm9FAYWD3i7sp-SnfF4Y="
            alt=""
          />
        </div>
        ):''
      }
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
