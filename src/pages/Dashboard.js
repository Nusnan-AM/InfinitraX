import React from "react";
import Sidebar from "../layouts/Sidebar";
import DashboardIcon1 from "../assets/DashbaordIcon1.svg";
import DashboardIcon2 from "../assets/DashbaordIcon2.svg";
import DashboardIcon3 from "../assets/DashbaordIcon3.svg";
import DashboardIcon4 from "../assets/DashbaordIcon4.svg";

function Dashboard() {
  return (
    <Sidebar>
      <div className="container">
        <div className="row">
          <div className="col">sad</div>
        </div>
        <div className="d-flex row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#E00000" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Total Sales</h3>
                <p>$31656.65</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#0400E0" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Products</h3>
                <p>145</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#00E009" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Categories</h3>
                <p>15</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex DashboardSummaryCount">
              <div
                className="col-1 SideCardcolor"
                style={{ background: "#9800E0" }}
              ></div>
              <div className="col-7 d-flex flex-column align-items-center justify-content-md-center">
                <h3>Brands</h3>
                <p>30</p>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-md-center">
                <img src={DashboardIcon4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">df</div>
          <div className="col">dfsd</div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Dashboard;
