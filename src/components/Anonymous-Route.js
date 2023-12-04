import {Navigate, Outlet} from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";

export default function AnonymousRoute () {
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
            }
        })
        .catch((error) => {
            Cookies.remove('token', { path: '/' });
        });

    return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
}