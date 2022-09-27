import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "../HomePage/HomePage.scss";
export const Card = ({ item = {} }) => {
  let navigate = useNavigate();
  const [show, setSow] = useState(false);
  const handleClose = () => {
    setSow(!show);
  };
  const handleSubmit = () => {
    navigate("/buy", {
      state: {
        item: item,
      },
    });
  };
  return (
    <div
      className="col-sm phone-card"
      onMouseEnter={handleClose}
      onMouseLeave={handleClose}
    >
      <div className="background-a" style={{ backgroundColor: item?.color }}>
        <div className="img">
          <img src={item.image} className="phone" alt="" />{" "}
        </div>
      </div>
      <div className="phone-bottom">
        <div className="hide">
          <div className="bottom">
            <p className="name col">{item.name}</p>
            <p className="price col">{item.dollar}</p>
          </div>
          <div className="bottom top">
            <p className="text col">{item.title}</p>
            <div className="star col">
              <span className="start">
                <IoMdStar />
              </span>
              <span className="start">
                <IoMdStar />
              </span>
              <span className="start">
                <IoMdStar />
              </span>
              <span className="start">
                <IoMdStarHalf />
              </span>
              <span className="rate">{item.views}</span>
            </div>
          </div>
        </div>

        {show && (
          <div className="show">
            <div className="bottom">
              <p className="name col">{item.name}</p>
              <button
                type="button"
                className="btn-buynow "
                onClick={(e) => handleSubmit(item.id)}
              >
                Buy Now
              </button>
            </div>
            <div className="col">
              {item.type === "landscape" ? (
                <Link className="vew-prodect" to="/phone" state={{ id: item }}>
                  {item.product}
                </Link>
              ) : (
                <Link className="vew-prodect" to="/land" state={{ id: item }}>
                  {item.product}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
