import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import BackgroundImage from "../assets/SigninBackground.svg";
import "../styles/signin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Circles } from "react-loader-spinner";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Signin() {
  const [isChecked, setIsChecked] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const formData = new FormData(e.target);

    if (data.username === "" || data.password === "") {
      toast.warning("Please fill all fields!");
    } else {
      toast.warning(null);
      axios
        .post("http://127.0.0.1:8000/login/", formData)
        .then((response) => {
          if (response.status === 200) {
            const token = response.data.token;
            if (isChecked) {
              Cookies.set("token", token, { expires: 7, path: "/" });
            } else {
              Cookies.set("token", token, { path: "/" });
            }
            window.location.href = "/dashboard";
          }
        })
        .catch(() => {
          toast.error("Username or Password is incorrect", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    }
  }

  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (
        <div className="d-flex align-items-center justify-content-center Loader-Image">
          <img src={Logo} alt="" />
          <div className="Loader-loader">
            <Circles
              color="white"
              height={500}
              width={500}
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="Home-Content" id="loginhome">
            <div className="container down-arrroww">
              <IconButton
                aria-label="delete"
                className="down-arrroww-hover"
                href="#loginhere"
              >
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: "40px",color:'#0B3333' }} />
              </IconButton>
            </div>
          </div>
          <div className="Signin" id="loginhere">
            <nav className="navbar fixed-top shadow-5-strong">
              <div className="container">
                <Link className="navbar-brand" to="/">
                  <img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                  />
                  <span className="px-3 fw-bold">InfinitraX</span>
                </Link>
              </div>
            </nav>
            <section className="vh-100">
              <div className="container pt-3">
                <div className="text-center p-3 pt-5 mb-5">
                  <h2 className="heading">Welcome to InfinitraX</h2>
                </div>
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <div className="col-md-8 col-lg-7 col-xl-6">
                    <img
                      src={BackgroundImage}
                      className="img-fluid"
                      alt="mainimage"
                    />
                  </div>
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-5 rounded SignIn-Container">
                    <form onSubmit={(e) => submitForm(e)}>
                      <h2 className="d-flex align-items-center justify-content-center mb-4">
                        SignIn Here
                      </h2>
                      <hr />
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          className="form-control form-control-md"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-md"
                        />
                      </div>

                      <div className="d-flex mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <hr />

                      <button
                        type="submit"
                        className="btn btn-success w-100 btn-lg btn-block"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}
