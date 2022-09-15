import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.scss";
import { Card } from "../card/Card";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [product, setProduct] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3007/product")
      .then((res) => {
        console.log("product", res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleCreate = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="navs ">
        <div className="row">
          <div className="col-sm">
            <img
              src="/Assets/logo.png"
              width="35"
              height="35"
              className="logo"
              alt=""
            />{" "}
          </div>
          <div className="col-sm">
            <div className="tittle">
              <li>Home</li>
              <li className="product">Product</li>
              <li>Service</li>
              <li>About us</li>
            </div>
          </div>
          <div className="col-sm">
            <button
              type="button"
              className="btn btn-outline-info btn-sm cbtn"
              onClick={handleCreate}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 col-md-4 filter">
          <h6>Filters</h6>
          <div className="form-check product">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
            />
            <label className="form-check-label " for="defaultCheck2">
              Phone
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
              disabled
            />
            <label className="form-check-label" for="defaultCheck2">
              HeadPhone
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
              disabled
            />
            <label className="form-check-label" for="defaultCheck2">
              Accessories{" "}
            </label>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="container">
            <div className="row">
              {product?.map((item) => {
                return (
                  <>
                    <Card item={item} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
