import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../BuyPixcel/BuyPixcel.scss";

const Address = ({ setOpen = () => false }) => {
  let navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (key, value) => {
    setdata({ ...data, [key]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("address", JSON.stringify(data));
    setOpen(false);
  };
  const handleAddress = () => {
    navigate("/home");
  };

  return (
    <div className="address">
      <div className="row button">
        <div className="col">
          <button className="add-btn" onClick={() => handleAddress()}>
            ADD ADDRESS
          </button>
        </div>
        <div className="col">
          <button className="save-btn" onClick={(e) => handleSubmit(e)}>
            SAVE ADDRESS
          </button>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col input-group-sm">
            <label for="recipient-name" className="col-label">
              name
            </label>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              aria-label="Small"
              value={data.name}
              aria-describedby="inputGroup-sizing-x-sm"
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div className="col input-group-sm">
            <label for="recipient-name" className="col-label">
              mobile
            </label>
            <input
              type="text"
              placeholder="mobile"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-x-sm"
              value={data.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col input-group-sm">
            <label for="recipient-name" className="col-label">
              Address
            </label>
            <input
              type="text"
              placeholder="Adress"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-x-sm"
              value={data.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col input-group-sm">
            <label for="recipient-name" className="col-label">
              City
            </label>
            <select
              className="custom-select input-group-sm"
              id="inputGroupSelect01"
              value={data.city}
              onChange={(e) => handleChange("city", e.target.value)}
            >
              <option selected>Select city</option>
              <option value="Chennai">Chennai</option>
              <option value="Thanjavur">Thanjavur</option>
              <option value="Cuddalore">Cuddalore</option>
            </select>
          </div>
          <div className="col input-group-sm">
            <label for="recipient-name" className="col-label">
              Country
            </label>
            <select
              className="custom-select input-group-sm"
              id="inputGroupSelect01"
              value={data.country}
              onChange={(e) => handleChange("country", e.target.value)}
            >
              <option selected>Select country</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;
