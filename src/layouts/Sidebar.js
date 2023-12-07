import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import "../styles/sidebar.css";
import logo from "../assets/logo.png";
import logos from "../assets/logo-small.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../redux/actions";
import profilepic from "../assets/anonymous-user.png";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PieChartIcon from "@mui/icons-material/PieChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorageIcon from "@mui/icons-material/Storage";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import axios from "axios";
import Cookies from "js-cookie";
import {toast} from "react-toastify";
import PrivateRoute from "../components/Private-Route";

function Sidebar({ children }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const token = Cookies.get('token', { path: '/' });
  
  if(!token){
    window.location.href = "/";
  }

  const open = useSelector((state) => {
    return state.setting.toggle;
  });

  function toggleDrawer() {
    dispatch(changeToggle(!open));
  }
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const signout = () => {

    axios.post("http://127.0.0.1:8000/logout/", "", {
      headers: {
        'authorization': `Token ${token}`,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    })
        .then(response => {
          Cookies.remove('token', { path: '/' });
          window.location.href = "/";
        })
        .catch((error) => {
          toast.error('' + error, {
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

  const getUserDetails = useCallback(() => {
        axios
            .post(`http://127.0.0.1:8000/user/`, "", {
                headers: {
        'authorization': `Token ${token}`,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
            })
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data);
                }
            })
            .catch(() => {
                toast.error('Error loading data!', {
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
    }, [])

    useEffect(() => {
        getUserDetails()
    }, [getUserDetails])

  return (
    <>
    <PrivateRoute />
    <div className="row">
      <div className={"col-2"}>
        <div
          className="sidebaar"
          style={{ width: !open && windowSize[0] * 0.155 }}
        >
          <div className="">
            <div className="close-btn-container cursor-pointer" onClick={toggleDrawer}>
              <MenuOpenIcon className={!!open && "rotate-180"} sx={{fontSize:'30px'}}/>
            </div>
            {!open && windowSize[0] >= 800 ? (
              <div className="row align-items-center justify-content-center">
                <img
                  src={logo}
                  alt={""}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
              </div>
            ) : (
              <div className="logodashboard ms-4">
                <img
                  src={logos}
                  alt={""}
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            )}
          </div>
          <div className="w-100 border-bottom-d1d1d1 mb-2" />
          {!open && windowSize[0] >= 800 ? (
            <div className="ms-2">
              <div className="d-flex align-items-center justify-content-center mb-2">
                <div className="d-flex align-items-center justify-content-center ms-1">
                  <img
                    src={profilepic}
                    alt="avatar"
                    className="rounded-circle me-2"
                    width="80px"
                    height="80px"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="DashbaordProfile">
                    <h5 className="m-0">{user?.username}</h5>
                    <p className="txt m-0">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center ms-1">
              <img
                src={profilepic}
                alt="avatar"
                className="rounded-circle my-1"
                width="60px"
                height="60px"
              />
            </div>
          )}
          <div className={"w-100 border-bottom-d1d1d1 mb-2"} />
          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white">
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active "
                    : "side-menu-item "
                }
                to={"/dashboard"}
              >
                <div className={"d-flex"}>
                  <SpaceDashboardIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Dashboard</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>
          </div>
          <div className={"w-100 border-bottom-d1d1d1 mb-2"} />
          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white">
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/category"}
              >
                <div className={"d-flex"}>
                  <PieChartIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Category</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/attributes"}
              >
                <div className={"d-flex"}>
                  <StorageIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Attributes</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/product"}
              >
                <div className={"d-flex"}>
                  <WebStoriesIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Product</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/sales"}
              >
                <div className={"d-flex"}>
                  <ShoppingCartIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Sales</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/inventory"}
              >
                <div className={"d-flex"}>
                  <InventoryIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Inventory</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 border-bottom-d1d1d1 mb-2"} />
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/settings"}
              >
                <div className={"d-flex"}>
                  <SettingsIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Settings</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/"}
                onClick={()=>signout()}
              >
                <div className={"d-flex"}>
                  <LogoutIcon
                    className={!open && windowSize[0] >= 800 ? "me-2" : "ms-1"}

                  />
                  {!open && windowSize[0] >= 800 ? (
                    <div className={"trans-1"}>Logout</div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {!open ? (
        <div className={"col-10"}>
          <div>{children}</div>
        </div>
      ) : (
        <div className={"col-12"}>
          <div>{children}</div>
        </div>
      )}
    </div>
    </>
  );
}

export default Sidebar;
