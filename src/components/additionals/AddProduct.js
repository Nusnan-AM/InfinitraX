import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function AddProduct(props) {
  const datas = [
    { categories: "hgdsd", status: "dshud" },
    { categories: "hgdsd", status: "dshud" },
    { categories: "hgdsd", status: "dshud" },
  ];
  return (
    <>
      <div>
        <div className="d-flex mb-4 Category-AddedSection">
          <div className="col-6">
            <h5>Add Product</h5>
          </div>
          <div className="col-6 d-flex">
            <button
              className="d-flex gap-1 btn btn-success"
              onClick={props.handleClose}
            >
              View Product
            </button>
          </div>
        </div>
        <div className="container mb-2 AddProduct-Form-section">
          <div className="row mb-2">
            <div className="col-6">
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Product SerialNo
                </label>
                <input
                  type="text"
                  id="inputAddAttribute-value"
                  className="form-control"
                  //   onChange={(e) => setValue(e.target.value)}
                  //   value={value}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Product Image
                </label>
                <input
                  type="file"
                  id="inputAddAttribute-value"
                  className="form-control"
                  //   onChange={(e) => handleFileUpload(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Product Name
                </label>
                <input
                  type="text"
                  id="inputAddAttribute-value"
                  className="form-control"
                  //   onChange={(e) => setValue(e.target.value)}
                  //   value={value}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Product Category
                </label>
                <select
                  id="selectAddAttribute-attribute"
                  className="form-select"
                  //   onChange={(e) => setAttributes(e.target.value)}
                  //   value={attributes}
                >
                  <option>--Select an Attribute--</option>
                  <option value={"Color"}>Color</option>
                  <option value={"Storage"}>Storage</option>
                  <option value={"Display"}>Display</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Product Brand
                </label>
                <select
                  id="selectAddAttribute-attribute"
                  className="form-select"
                  //   onChange={(e) => setAttributes(e.target.value)}
                  //   value={attributes}
                >
                  <option>--Select an Attribute--</option>
                  <option value={"Color"}>Color</option>
                  <option value={"Storage"}>Storage</option>
                  <option value={"Display"}>Display</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12">
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Product Description
                </label>
                <textarea
                  type="text"
                  id="inputAddAttribute-value"
                  className="form-control"
                  //   onChange={(e) => setValue(e.target.value)}
                  //   value={value}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-2 Category-AddedSection">
          <div className="col-6">
            <h5>AttributeList</h5>
          </div>
          <div className="col-6 d-flex">
            <button
              className="d-flex gap-1 btn btn-success"
              //   onClick={handleOpen}
            >
              AddAttribute
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
                  Price
                </th>
                <th scope="col" className="col-1">
                  Inventory
                </th>
                <th scope="col" className="col-1">
                  Taxrate
                </th>
                <th scope="col" className="col-1">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.categories}</td>
                  <td>{data.categories}</td>
                  <td>{data.categories}</td>
                  <td>{data.categories}</td>
                  <td>{data.categories}</td>
                  <td className="col-2">
                    <IconButton
                      aria-label="delete"
                      className="viewbutt"
                      // onClick={() => categoryViewModal(data)}
                    >
                      <VisibilityIcon className="text-" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      className="viewbutt"
                      // onClick={() => categoryEditModal(data)}
                    >
                      <EditIcon className="text-success" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      className="viewbutt"
                      // onClick={() => handleDelete(data.id)}
                    >
                      <DeleteIcon className="text-danger" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr/>
        <div className="d-flex gap-3 mb-5 align-items-end justify-content-end">
          <button
            className="d-flex gap-1 btn btn-success"
            //   onClick={handleOpen}
          >
            Add Product
          </button>
          <button
            className="d-flex gap-1 btn btn-secondary"
            //   onClick={handleOpen}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
