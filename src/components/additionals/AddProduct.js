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
import AddAttributeProduct from "../modals/AddAttributeProduct";

function AddProduct(props) {
  const [datas, setDatas] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Brand, setBrand] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  useEffect(() => {
    (async () => await fetchData2())();
  }, []);
  async function fetchData() {
    const response = await axios.get("http://127.0.0.1:8000/category");
    setcategoryList(response.data);
    setCategory(response.data);
  }

  async function fetchData2() {
    const result = await axios.get("http://127.0.0.1:8000/brand");
    setbrandList(result.data);
    setBrand(result.data);
  }

  const addAttributeModal = () => {
    setShowAdd(!showAdd);
    fetchData();
  };

  const addAttribute = (attribute) => {
    setDatas([...datas, attribute]);
  };

  const handleDelete = (index) => {
    const updatedDatas = [...datas];
    updatedDatas.splice(index, 1);
    setDatas(updatedDatas);
  };
  return (
    <>
      <div>
        <div className="d-flex mb-4 Category-AddedSection">
          <div className="col-6">
            <h5>Add Product</h5>
          </div>
          {/* <div className="col-6 d-flex">
            <button
              className="d-flex gap-1 btn btn-success"
              onClick={props.handleClose}
            >
              View Product
            </button>
          </div> */}
        </div>
        <div className="container mb-2 AddProduct-Form-section">
          <div className="row mb-2">
            <div className="col-lg-3 col-md-6 col-sm-12">
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
            <div className="col-lg-3 col-md-6 col-sm-12">
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
            <div className="col-lg-3 col-md-6 col-sm-12">
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
                  <option value={""}>--Select the Category--</option>
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.categories}>
                      {category.categories}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
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
                  <option>--Select the Brand--</option>
                  {brandList.map((brand) => (
                    <option key={brand.id} value={brand.brand}>
                      {brand.brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {/* <div className="row mb-2"> */}

          {/* </div> */}
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
        <div className="d-flex mb-2 Product-AddedSection">
          <div className="col-6">
            <h5>AttributeList</h5>
          </div>
          <div className="col-6 d-flex AddAttribute-Button-Section p-4">
            <button
              className="d-flex gap-1 btn btn-success"
              onClick={addAttributeModal}
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
              {datas.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center" style={{fontWeight:'600'}}>
                    Add Attributes here...
                  </td>
                </tr>
              ) : (
                datas.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.attribute}</td>
                    <td>{data.value}</td>
                    <td>{data.price}</td>
                    <td>{data.inventory}</td>
                    <td>{data.taxrate}</td>
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
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon className="text-danger" />
                      </IconButton>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="d-flex gap-3 mb-5 align-items-end justify-content-end">
          <button
            className="d-flex gap-1 btn btn-success"
            //   onClick={handleOpen}
          >
            Add Product
          </button>
          <button
            className="d-flex gap-1 btn btn-secondary"
            onClick={props.handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
      <AddAttributeProduct
        show={showAdd}
        onHide={() => addAttributeModal(false)}
        addAttribute={addAttribute}
      />
    </>
  );
}

export default AddProduct;
