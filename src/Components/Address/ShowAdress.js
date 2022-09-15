import React from "react";
import { useNavigate } from "react-router-dom";
import "../BuyPixcel/BuyPixcel.scss";

const ShowAdress = ({setOpen=()=>false}) => {
  let navigate = useNavigate();
  var addr = JSON.parse(localStorage.getItem("address"));
  const handleAddress=()=>{
    setOpen(false)
  }
  return (
    <div className="show-add col">
      <div className="row">
        <div className="col-2 ">
          <div className="add">
            <h5>{addr.name}</h5>
            <p>{addr.mobile}</p>
          </div>
        </div>
        <div className="col-5">
          <span className="crd-add">
            {addr.name},{addr.address}{addr.city},{addr.country}
          </span>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-edit "
            onClick={(e) => handleAddress()}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAdress;
