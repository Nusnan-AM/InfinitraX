import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AddAttributeProduct from "../modals/AddAttributeProduct";
import EditAttributeTabledata from "../additionals/EditAttributeTableData";

function AddProduct(props) {
  const [datas, setDatas] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [serialno, setSerialno] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  useEffect(() => {
    (async () => await fetchData2())();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/category");
      const activeCategories = response.data.filter(
        (category) => category.status === "Active"
      );
      setcategoryList(activeCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  const resetform = () => {
    setSerialno("");
    setName("");
    setCategory("");
    setBrand("");
    setDescription("");
    setDatas([]);
  };

  async function fetchData2() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/brand");
      const activeBrand = response.data.filter(
        (brand) => brand.status === "Active"
      );
      setbrandList(activeBrand);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
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

  const handleADDProduct = async () => {
    try {
      const productData = {
        serialno: serialno,
        name: name,
        categories: category,
        brand: brand,
        description: description,
        inventory: datas,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/product",
        productData
      );
      if (response.data) {
        toast.success("Product Added Successfully");
        resetform();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        console.log(response.data);
      } else {
        toast.error("Product Already added");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const [showAttributeEditModal, setShowAttributeEditModal] = useState(false);
  const [selectedAttributeIndex, setSelectedAttributeIndex] = useState(null);
  const [editedAttribute, setEditedAttribute] = useState({
    attribute: "",
    value: "",
    price: "",
    inventory: "",
    taxrate: "",
  });

  const handleEdit = (index) => {
    setSelectedAttributeIndex(index);
    setEditedAttribute(datas[index]);
    setShowAttributeEditModal(true);
  };

  const handleAttributeEditConfirmed = () => {
    const updatedDatas = [...datas];
    updatedDatas[selectedAttributeIndex] = editedAttribute;
    setDatas(updatedDatas);
    setShowAttributeEditModal(false);
  };

  return (
    <>
      <div>
        <div className="d-flex mb-4 Category-AddedSection">
          <div className="col-6">
            <h5>Add Product</h5>
          </div>
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
                  onChange={(e) => setSerialno(e.target.value)}
                  value={serialno}
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
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
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
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
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
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
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
                  <td
                    colSpan="7"
                    className="text-center"
                    style={{ fontWeight: "600" }}
                  >
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
                        onClick={() => handleEdit(index)}
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
            onClick={handleADDProduct}
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
      <EditAttributeTabledata
        show={showAttributeEditModal}
        onHide={() => setShowAttributeEditModal(false)}
        editedAttribute={editedAttribute}
        setEditedAttribute={setEditedAttribute}
        onConfirm={handleAttributeEditConfirmed}
      />
      <ToastContainer />
    </>
  );
}

export default AddProduct;
