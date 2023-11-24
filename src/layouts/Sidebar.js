import React ,{useEffect,useState} from "react";
import "../App.css";
import FeatherIcon from "feather-icons-react";
import logo from "../assets/logo.png";
import logos from "../assets/logo-small.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../redux/actions";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import profilepic from "../assets/powsi.jpeg";


function Sidebar({ children }) {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    
  }, []);

  const dispatch = useDispatch();
  const open = useSelector((state) => {
    return state.setting.toggle;
  });

  function toggleDrawer() {
    dispatch(changeToggle(windowSize[0]));
  }
  return (
    <div className="row">
      <div className={"col-2"}>
        <div className="sidebaar" style={{width: windowSize[0]*0.155}}>
          <div className="">
            {/* {windowSize[0] >=800 ? (
            <div className="close-btn-container" onClick={toggleDrawer}>
              <MenuOpenIcon
                className={windowSize[0] && "rotate-180"}
                style={{ color: "white" }}
              />
            </div>
            ) : ""} */}
            {windowSize[0] >=800 ? (
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
                  style={{ width: "40px", height: "40px", }}
                />
              </div>
            )}
          </div>
          <div className="w-100 border-bottom-d1d1d1 mb-2" />
          {windowSize[0] >= 800 ? (
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
                    <p className="txt m-0">powsi@gmail.com</p>
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
                width="50px"
                height="50px"
              />
               <h5 className="m-0">{windowSize[0]}</h5>
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
                to={"/"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="layout"
                    className={windowSize[0] ? "me-2" : "ms-1"}
                  />
                 {windowSize[0] >= 800 ? <div className={"trans-1"}>Logout</div> : ""}
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
                  <FeatherIcon
                    icon="hard-drive"
                    className={windowSize[0] ? "me-2" : "ms-1"}
                  />
                  {windowSize[0] >= 800 ? <div className={""}>Logout</div> : ""}
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
                  <FeatherIcon
                    icon="shopping-cart"
                    className={windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                 {windowSize[0] >= 800 ? <div className={""}>Logout</div> : ""}
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
                  <FeatherIcon
                    icon="activity"
                    className={windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                 {windowSize[0] >= 800 ? <div className={""}>Logout</div> : ""}
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
                  <FeatherIcon
                    icon="airplay"
                    className={windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                 {windowSize[0] >= 800 ? <div className={""}>Logout</div> : ""}
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
                  <FeatherIcon
                    icon="codepen"
                    className={windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                 {windowSize[0] >= 800 ? <div className={""}>Logout</div> : ""}
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
                  <FeatherIcon
                    icon="settings"
                    className={windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                 {windowSize[0] >= 800 ? <div className={""}>Logout</div> : ""}
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
                to={"/logout"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="log-out"
                    className={windowSize[0] >= 800 ? "me-2" : "ms-1"}
                  />
                  {windowSize[0] >= 800 ? <div className={""}>Logout</div> : ""}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={ "col-10" }>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;
