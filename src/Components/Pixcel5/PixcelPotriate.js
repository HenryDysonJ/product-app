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

const PixcelPotriate = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  let navigate = useNavigate();
  let location = useLocation();
  let data = location.state;
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
          <div className="close col-2">
            <button className="close" onClick={handleCLosed}>
              <IoIosCloseCircleOutline />
            </button>
          </div>
        </div>
        <Modal.Body>
          <div className="img row">
            <div className="arrow col-sm">
              <AiOutlineLeftCircle />
            </div>
            <div className="img col-sm">
              <img src={data.id.image} className="phone" alt="" />
            </div>
            <div className="arrow col">
              <AiOutlineRightCircle />
            </div>
          </div>

          {data.id.detail.map((detail) => {
            return (
              <>
                <div className="detail">
                  <table>
                    <thead></thead>
                    <tbody>
                      <tr>
                        {detail.color.map((color) => {
                          return (
                            <>
                              <td className="key">Color</td>
                              <td className="value">
                                <td className="black">
                                  <BsCircleFill />
                                </td>
                                <td className="color">{color.black}</td>
                                <td className="white">
                                  <BsCircle />
                                </td>
                                <td className="color">{color.white}</td>
                                <td className="blue">
                                  <BsCircleFill />
                                </td>
                                <td className="color">{color.blue}</td>
                              </td>
                            </>
                          );
                        })}
                      </tr>
                      <tr>
                        <td className="key">Display</td>
                        <td className="value">{detail.display}</td>
                      </tr>
                      <tr>
                        <td className="key">Dimention & weight</td>
                        <td className="value">{detail.Demention}</td>
                      </tr>
                      <tr>
                        <td className="key">Batery & Charging</td>
                        <td className="value">{detail.Battery}</td>
                      </tr>
                      <tr>
                        <td className="key">Memory</td>
                        <td className="value">{detail.Memory}</td>
                      </tr>
                      <tr>
                        <td className="key">Storage</td>
                        <td className="value">{detail.Storage}</td>
                      </tr>
                      <tr>
                        <td className="key">Processor</td>
                        <td className="value">{detail.processor}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            );
          })}
          <div className="row footer">
            <div className="col-sm-4">
              <div className="star col">
                <h6>{data.id.dollar}</h6>
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
                <span className="rate">{data.id.views}</span>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <button className="btn btn-buynow" onClick={handleClose}>
                {data.id.button}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PixcelPotriate;
