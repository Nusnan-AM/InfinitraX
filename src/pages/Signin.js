import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import "../styles/signin.css";

export default function Signin() {
    const [fieldError, setFieldError] = useState(null);

    function submitForm(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if (data.username === "" && data.password === "") {
            setFieldError("Please fill all fields!");
        } else {
            window.location.href = "/dashboard";
        }
        console.log(data);
    }

    return (
        <>
            <div className="Signin">
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
                    <div className="container py-5">
                        <div className="text-center p-3 pt-5">
                            <h2 className="heading">Welcome to InfinitraX</h2>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid"
                                    alt="main image"
                                />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-5 bg-light rounded">
                                <form onSubmit={(e) => submitForm(e)}>
                                    <h6 className="text-center text-danger">{fieldError}</h6>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="form-control form-control-md"
                                        />
                                        <label className="form-label" htmlFor="username">
                                            Username
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control form-control-md"
                                        />
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                    </div>

                                    <div className="d-flex mb-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="rememberMe"
                                                defaultChecked
                                            />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                {" "}
                                                Remember me{" "}
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg btn-block"
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
