import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import "./Pixcel.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import HomePage from "../HomePage/HomePage";

const PixcelLandscape = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  let navigate = useNavigate();
  let location = useLocation();
  let data = location.state;
  console.log("first", data);
  const handleCLosed = () => {
    navigate("/home");
  };
  return (
    <>
      <HomePage />
      <Modal
        show={show}
        onHide={handleClose}
        onClick={handleShow}
        centered
        size="md"
        closeButton
        className="Modal"
      >
        <div className="row">
          <div className="head col-9">
            <span>{data.id.name}</span>
          </div>
          <div className="col-2">
            <button className="close" onClick={handleCLosed}>
              <IoIosCloseCircleOutline />
            </button>
          </div>
        </div>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="arrows col-2">
                  <AiOutlineLeftCircle />
                </div>
                <div className="img col-8">
                  <img src={data.id.image} className="phones" alltr="" />
                </div>
                <div className="arrows col-2">
                  <AiOutlineRightCircle />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col heads">
                  <h6>{data.id.name}</h6>
                  <p>{data.id.dollar}</p>
                  <p>
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
                  </p>
                </div>
                <div className="col">
                  <button
                    className="btn btn-sm btn-buynow"
                    onClick={handleCLosed}
                  >
                    {data.id.button}
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                {data.id.detail.map((color) => {
                  console.log("color", color);
                  return (
                    <>
                      <div className="col product-details">
                        <div className="priceRow">
                          {color.color.map((item) => {
                            return (
                              <>
                                <td className="key">Color</td>
                                <td className="value">
                                  <td className="black">
                                    <BsCircleFill />
                                  </td>
                                  <td className="color">{item.black}</td>
                                  <td className="white">
                                    <BsCircle />
                                  </td>
                                  <td className="color">{item.white}</td>
                                  <td className="blue">
                                    <BsCircleFill />
                                  </td>
                                  <td className="color">{item.blue}</td>
                                </td>
                              </>
                            );
                          })}
                        </div>
                        <div className="col">
                          <div className="priceRow">
                            <p className="key">Display</p>
                            <p className="value">{color.display}</p>
                          </div>{" "}
                          <div className="priceRow">
                            <p className="key">Dimention & weight</p>
                            <p className="value">{color.Demention}</p>
                          </div>{" "}
                          <div className="priceRow">
                            <p className="key">Batery & Charging</p>
                            <p className="value">{color.Battery}</p>
                          </div>{" "}
                          <div className="priceRow">
                            <p className="key">Memory</p>
                            <p className="value">{color.Memory}</p>
                          </div>{" "}
                          <div className="priceRow">
                            <p className="key">Storage</p>
                            <p className="value">{color.Storage}</p>
                          </div>{" "}
                          <div className="priceRow">
                            <p className="key">Processor</p>
                            <p className="value">{color.processor}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PixcelLandscape;
