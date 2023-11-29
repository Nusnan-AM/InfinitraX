import React from "react";
import "../App.css";
import "../styles/Category.css";
import Sidebar from "../layouts/Sidebar";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Category() {
  const datas = [
    { no: 1, attribute: "Color", Value: "Grey" },
    { no: 2, attribute: "Color", Value: "Grey" },
    { no: 3, attribute: "Color", Value: "Grey" },
    { no: 4, attribute: "Color", Value: "Grey" },
    { no: 5, attribute: "Color", Value: "Grey" },
    { no: 6, attribute: "Color", Value: "Grey" },
    { no: 7, attribute: "Color", Value: "Grey" },
    { no: 2, attribute: "Color", Value: "Grey" },
    { no: 3, attribute: "Color", Value: "Grey" },
    { no: 4, attribute: "Color", Value: "Grey" },
    { no: 5, attribute: "Color", Value: "Grey" },
    { no: 6, attribute: "Color", Value: "Grey" },
    { no: 7, attribute: "Color", Value: "Grey" },
  ];
  return (
    <Sidebar>
      <div className="container">
        <nav className="navbar mt-3 py-1 mb-3 rounded">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <span className="navbar-brand mb-0 h1 text-white">
              Category Section
            </span>
          </div>
        </nav>
        <div className="container mb-3 Category-FilterSection">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container mb-3">
          <div className="d-flex row mb-4">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
              <div className="d-flex mb-2 Category-AddedSection">
                <h5 className="col-6">CategoryList</h5>
                <div className="col-6">
                  <button className="d-flex gap-1 btn btn-success mt-3">
                    AddCategory
                    <AddCircleIcon />
                  </button>
                </div>
              </div>
              <div className="Category-TableSection">
                <table className="table table-striped table-hover">
                  <thead className="top-0 position-sticky z-1">
                    <tr>
                      <th scope="col" className="col-1">
                        No
                      </th>
                      <th scope="col" className="col-1">
                        Attribute
                      </th>
                      <th scope="col" className="col-1">
                        Value
                      </th>
                      <th scope="col" className="col-1">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datas.map((data) => (
                      <tr>
                        <th scope="row">{data.no}</th>
                        <td>{data.attribute}</td>
                        <td>{data.Value}</td>
                        <td>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <EditIcon className="text-success" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <DeleteIcon className="text-danger" />
                            </IconButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
              <div className="d-flex mb-2 Category-AddedSection">
                <h5 className="col-6">BrandList</h5>
                <div className="col-6">
                  <button className="d-flex gap-1 btn btn-success mt-3">
                    AddBrand
                    <AddCircleIcon />
                  </button>
                </div>
              </div>
              <div className="Category-TableSection">
              <table className="table table-striped table-hover">
                  <thead className="top-0 position-sticky z-1">
                    <tr>
                      <th scope="col" className="col-1">
                        No
                      </th>
                      <th scope="col" className="col-1">
                        Attribute
                      </th>
                      <th scope="col" className="col-1">
                        Value
                      </th>
                      <th scope="col" className="col-1">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datas.map((data) => (
                      <tr>
                        <th scope="row">{data.no}</th>
                        <td>{data.attribute}</td>
                        <td>{data.Value}</td>
                        <td>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <EditIcon className="text-success" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <DeleteIcon className="text-danger" />
                            </IconButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Category;
