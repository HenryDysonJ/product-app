import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import HomePage from "../HomePage/HomePage";
import "./BuyPixcel.scss";
import Address from "../Address/Address";
import ShowAdress from "../Address/ShowAdress";

const BuyPixcel = () => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();
  let location = useLocation();

  const handleShown = () => {
    setOpen(!open);
  };
  const handleAddress = () => {
    navigate("/home");
  };
  const handleCLosed = () => {
    navigate("/home");
  };
  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <div>
      <HomePage />
      <Modal
        show={show}
        onHide={handleClose}
        onClick={handleShow}
        centered
        size="md"
      >
        <Modal.Body className="Modal">
          <div className="row">
            <div className="col buy">{location.state.item.name}</div>
            <div className="col">
              <button className="close" onClick={handleCLosed}>
                <IoIosCloseCircleOutline />
              </button>
            </div>
          </div>

          <div className="row form">
            <div className="col box-form">
              <div className="row product-detail">
                <div className="col-sm-2">
                  <img
                    src={location.state.item.image}
                    className="image"
                    alter=""
                  />
                </div>
                <div className="col-2">
                  <span>{location.state.item.name}</span>
                  <span>{location.state.item.views}</span>
                </div>
                <div className="col-3">
                  <span>{location.state.item.phone}</span>
                </div>
                <div className="col-2">
                  <span>{location.state.item.pis}</span>
                </div>
                <div className="col-2">
                  <span>{location.state.item.dollar}</span>
                </div>
              </div>
              <div className="row addr">
                {open ? (
                  <ShowAdress setOpen={setOpen} />
                ) : (
                  <Address setOpen={setOpen} />
                )}
              </div>
              <div className="show-addres row"></div>
            </div>
            <div className="col incoice">
              {location.state.item.invoice.map((product) => {
                return (
                  <>
                    <div className="row">
                      <span>INVOICE SUMMARY</span>
                      <div className="priceRow">
                        <p>Actual amount</p>
                        <p className="dollar">{product.actual}</p>
                      </div>
                      <div className="priceRow">
                        <p>Discount</p>
                        <p className="dollar">{product.discount}</p>
                      </div>
                      <div className="priceRow">
                        <p>Billing amount</p>
                        <p className="dollar">{product.billing}</p>
                      </div>
                      <div className="priceRow">
                        <p className="dollar">Total amount</p>
                        <p className="dollar">{product.total}</p>
                      </div>
                      <div className="row">
                        <button
                          type="button"
                          className="btn-buy "
                          onClick={handleSubmit}
                        >
                          {product.pay}
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BuyPixcel;
