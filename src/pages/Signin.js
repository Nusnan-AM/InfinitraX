import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../assets/css/signin.css";

export default function Signin() {

    function submitForm(e){

        const data = new FormData();

        if(data.usernmae === "" || data.password === ""){
            e.preventDefault();
        }
    }

    return (
        <>
            <div className="main">
                <nav className="navbar fixed-top shadow-5-strong">
                    <div className="container">
                        <Link class="navbar-brand" to="/">
                            <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                            <span className="px-3 fw-bold">Infinitrax</span>
                        </Link>
                    </div>
                </nav>
                <section class="vh-100">
                    <div class="container py-5">
                        <div className="text-center p-3">
                            <h2>Welcome to Infinitrax</h2>
                        </div>
                        <div class="row d-flex align-items-center justify-content-center h-100">
                            <div class="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    class="img-fluid" alt="Phone image" />
                            </div>
                            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-5 bg-light rounded">
                                <form onSubmit={(e)=>submitForm(e)}>
                                    <div class="form-outline mb-4">
                                        <input type="text" id="username" class="form-control form-control-md" required/>
                                        <label class="form-label" for="username">Username</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="password" class="form-control form-control-md" required/>
                                        <label class="form-label" for="password">Password</label>
                                    </div>

                                    <div class="d-flex mb-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="rememberMe" checked />
                                            <label class="form-check-label" for="rememberMe"> Remember me </label>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-success btn-lg btn-block">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}