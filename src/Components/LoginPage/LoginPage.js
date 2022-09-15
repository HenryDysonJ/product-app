import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    Password: "",
    showPassword: false,
  });

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleClickShowPassword = () => {
    setData({
      ...data,
      showPassword: !data.showPassword,
    });
  };
  const handleSubmit = () => {
    setData(data);
    navigate("/home");
  };
  console.log("data", data);

  return (
    <div className="row login-body">
      <div className="col-1"></div>
      <div className="col">
        <div className="">
          <img src="/Assets/Login.png" className="login-img" alt="login" />
        </div>
      </div>
      <div className="col">
        <div className="form">
          <div className="form-title">
            <h3>Welcome to google store!</h3>
            <h5>Register your account</h5>
          </div>
          <form>
            <div className="mb-3">
              <label for="recipient-name" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                value={data?.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="recipient-name" className="form-label">
                EmaiID
              </label>
              <input
                type="numer"
                className="form-control"
                value={data?.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <label for="recipient-name" className="form-label">
              New password
            </label>
            <Input
              id="standard-adornment-password"
              className="form-control"
              type={data.showPassword ? "text" : "Password"}
              value={data.Password}
              onChange={(e) => handleChange("Password", e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle showPassword visibility"
                    onClick={handleClickShowPassword}
                  >
                    {data.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <label for="recipient-name" className="form-label">
              Conform password
            </label>

            <Input
              id="standard-adornment-password"
              className="form-control"
              type={data.showPassword ? "text" : "Password"}
              value={data.Password}
              onChange={(e) => handleChange("Password", e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle showPassword visibility"
                    onClick={handleClickShowPassword}
                  >
                    {data.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div className="create-btn">
              <button
                type="button"
                className="btn "
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default LoginPage;
