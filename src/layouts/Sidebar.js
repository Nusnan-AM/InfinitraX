import React from "react";
import "../App.css";
import FeatherIcon from "feather-icons-react";
import logo from "../assets/logo.png";
import logos from "../assets/logo-small.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../redux/actions";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import profilepic from "../assets/powsi.jpeg";

function Sidebar() {
  const dispatch = useDispatch();
  const open = useSelector((state) => {
    return state.setting.toggle;
  });

  function toggleDrawer() {
    dispatch(changeToggle(!open));
  }
  return (
    <div className="row flex-nowrap">
      <div
        className={
          (!open ? " sidebaar col-xl-2" : " w-100px") +
          " col-auto col-md-1 px-0 border-right min-vh-100 trans sidebaar"
        }
      >
        <div className="dashboardlogocontainer">
          <div className="close-btn-container" onClick={toggleDrawer}>
            <MenuOpenIcon
              className={!!open && "rotate-180"}
              style={{ color: "white" }}
            />
          </div>
          {!open ? (
            <div className="logodashboard ms-5">
              <img
                src={logo}
                alt={""}
                style={{
                  width: "100px",
                  height: "100px",
                  marginLeft: "30px",
                  marginTop: "-50px",
                }}
              />
            </div>
          ) : (
            <div className="logodashboard ms-4">
              <img
                src={logos}
                alt={""}
                style={{ width: "40px", height: "40px", marginTop: "-50px" }}
              />
            </div>
          )}
        </div>
        <div className="w-100 border-bottom-d1d1d1 mb-2" />
        {!open ? (
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
                <div className="text-light">
                  <h5 className="m-0">Powsi</h5>
                  <p className="txt m-0">powsi07@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-100px shadow sidebarrt px-3">
            <img
              src={profilepic}
              alt="avatar"
              className="rounded-circle my-1"
              width="80px"
              height="80px"
            />
          </div>
        )}
        <div className={"w-100 border-bottom-d1d1d1 mb-2"} />
        <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white">
          <div className={"w-100 px-sm-2 px-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "side-menu-item side-menu-active "
                  : "side-menu-item "
              }
              to={"/inventory-interface/dashboard"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="layout"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={"trans-1"}>Dashboard</div>}
              </div>
            </NavLink>
          </div>
        </div>
        <div className={"w-100 border-bottom-d1d1d1 mb-2"} />
        <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white">
          <div className={"w-100 px-sm-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "side-menu-item side-menu-active" : "side-menu-item"
              }
              to={"/inventory-interface/inventory"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="hard-drive"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={""}>Category</div>}
              </div>
            </NavLink>
          </div>

          <div className={"w-100 px-sm-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "side-menu-item side-menu-active" : "side-menu-item"
              }
              to={"/inventory-interface/supply"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="shopping-cart"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={""}>Attributes</div>}
              </div>
            </NavLink>
          </div>

          <div className={"w-100 px-sm-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "side-menu-item side-menu-active" : "side-menu-item"
              }
              to={"/inventory-interface/summary"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="activity"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={""}>Product</div>}
              </div>
            </NavLink>
          </div>
          <div className={"w-100 px-sm-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "side-menu-item side-menu-active" : "side-menu-item"
              }
              to={"/inventory-interface/settings"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="airplay"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={""}>Sales</div>}
              </div>
            </NavLink>
          </div>
          <div className={"w-100 px-sm-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "side-menu-item side-menu-active" : "side-menu-item"
              }
              to={"/inventory-interface/settings"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="codepen"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={""}>Inventory</div>}
              </div>
            </NavLink>
          </div>
          <div className={"w-100 border-bottom-d1d1d1 mb-2"} />
          <div className={"w-100 px-sm-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "side-menu-item side-menu-active" : "side-menu-item"
              }
              to={"/inventory-interface/settings"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="settings"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={""}>Settings</div>}
              </div>
            </NavLink>
          </div>
          <div className={"w-100 px-sm-2"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "side-menu-item side-menu-active" : "side-menu-item"
              }
              to={"/"}
            >
              <div className={"d-flex"}>
                <FeatherIcon
                  icon="log-out"
                  className={!open ? "me-2" : "ms-1"}
                />
                {!open && <div className={""}>Logout</div>}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
