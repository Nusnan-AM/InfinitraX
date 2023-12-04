import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export default function PrivateRoute () {
    const token = Cookies.get('token', { path: '/' });

    axios.post("http://127.0.0.1:8000/check/", "", {
        headers: {
            'authorization': `Token ${token}`,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.status !== 200) {
                Cookies.remove('token', { path: '/' });
                window.location.href = "/";
            }
        })
        .catch((error) => {
            Cookies.remove('token', { path: '/' });
            window.location.href = "/";
        });

    return token ? <Outlet /> : <Navigate to="/" replace />;
}