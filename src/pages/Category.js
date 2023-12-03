import React, { useState,useEffect } from "react";
import "../App.css";
import "../styles/Category.css";
import Sidebar from "../layouts/Sidebar";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCategory from "../components/modals/AddCategory";
import AddBrand from "../components/modals/AddBrand";
import CategoryView from "../components/modals/CategoryView";
import BrandView from "../components/modals/BrandView";
import EditCategory from "../components/modals/EditCategory";
import EditBrand from "../components/modals/EditBrand";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import axios from 'axios';

function Category() {
  const datas = [
    { category: "laptops", status: "Active" },
    { category: "Monitors", status: "Active" },
    { category: "Processors", status: "Active" },
    { category: "Motherboards", status: "Active" },
    { category: "RAM", status: "InActive" },
    { category: "Mouse", status: "Active" },
    { category: "Keyboard", status: "Active" },
    { category: "Mousepad", status: "Active" },
    { category: "laptops", status: "InActive" },
    { category: "laptops", status: "Active" },
    { category: "laptops", status: "Active" },
    { category: "laptops", status: "Active" },
    { category: "laptops", status: "Active" },
  ];

  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [Category, setCategory] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleChange3 = (event) => {
    setSearchTerm3(event.target.value);
  };
  const handleChange4 = (event) => {
    setSearchTerm4(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const addCategoryModal = () => {
    setShowModal(!showModal);
    fetchData();
  };
  const addBrandModal = () => {
    setShowModal2(!showModal2);
  };
  const categoryViewModal = () => {
    setShowModal3(true);
  };

  const brandViewModal = () => {
    setShowModal4(true);
  };
  const categoryEditModal = () => {
    setShowModal5(true);
  };
  const brandEditModal = () => {
    setShowModal6(true);
  };


  useEffect(() => {
    (async () => await fetchData())();
    }, []);
    
    
    async function  fetchData()
    {
       const result = await axios.get(
           "http://127.0.0.1:8000/category");
           setCategory(result.data);
           console.log(result.data);
    }

    
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
        <div className="mb-3 Category-FilterSection d-flex">
          <h5 className="col-1">FilterList</h5>
          <div className="col-3">
            <div className="search-input-container mt-4">
              <form>
                <input
                  className="SearchBox"
                  type="text"
                  placeholder="Filter by Category"
                  value={searchTerm3}
                  onChange={handleChange3}
                />
                <div
                  className="search-icon"
                  // onClick={handleSearchByDrugID}
                >
                  <SearchIcon />
                </div>
                {searchTerm3 && (
                  <div
                    className="search-icon si2"
                    style={{
                      zIndex: "100",
                      backgroundColor: "white",
                      right: "15px",
                    }}
                    onClick={() => setSearchTerm3("")}
                  >
                    <ClearIcon />
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div className="search-input-container mt-4 m-5">
              <select
                className="SearchBox"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option value={""}>Filter by Category</option>
                <option value={"Active"}>Active</option>
                <option value={"InActive"}>InActive</option>
              </select>

              {selectedStatus && (
                <div
                  className="search-icon"
                  style={{
                    zIndex: "100",
                    backgroundColor: "white",
                    right: "18px",
                  }}
                  onClick={() => setSelectedStatus("")}
                >
                  <ClearIcon />
                </div>
              )}
            </div>
          </div>
          <div className="col-3">
            {" "}
            <div className="search-input-container mt-4">
              <form>
                <input
                  className="SearchBox"
                  type="text"
                  placeholder="Filter by Brand"
                  value={searchTerm4}
                  onChange={handleChange4}
                />
                <div
                  className="search-icon"
                  // onClick={handleSearchByDrugID}
                >
                  <SearchIcon />
                </div>
                {searchTerm4 && (
                  <div
                    className="search-icon si2"
                    style={{
                      zIndex: "100",
                      backgroundColor: "white",
                      right: "15px",
                    }}
                    onClick={() => setSearchTerm4("")}
                  >
                    <ClearIcon />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="d-flex row mb-4">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
              <div className="d-flex mb-2 Category-AddedSection">
                <h5 className="col-6">CategoryList</h5>
                <div className="col-6">
                  <button
                    className="d-flex gap-1 btn btn-success mt-3"
                    onClick={addCategoryModal}
                  >
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
                        Categories
                      </th>
                      <th scope="col" className="col-1">
                        Status
                      </th>
                      <th scope="col" className="col-1">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Category.map((data, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.categories}</td>
                        <td>
                          <div
                            className={
                              data.status === "Active"
                                ? "Category-ActiveField"
                                : "Category-InActiveField"
                            }
                          >
                            {data.status}
                          </div>
                        </td>
                        <td className="col-2">
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => categoryViewModal()}
                          >
                            <VisibilityIcon className="text-" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => categoryEditModal()}
                          >
                            <EditIcon className="text-success" />
                          </IconButton>
                          <IconButton aria-label="delete" className="viewbutt">
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
                  <button
                    className="d-flex gap-1 btn btn-success mt-3"
                    onClick={addBrandModal}
                  >
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
                    {datas.map((data, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.category}</td>
                        <td>
                          <div
                            className={
                              data.status === "Active"
                                ? "Category-ActiveField"
                                : "Category-InActiveField"
                            }
                          >
                            {data.status}
                          </div>
                        </td>
                        <td className="col-2">
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => brandViewModal()}
                          >
                            <VisibilityIcon className="text-" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => brandEditModal()}
                          >
                            <EditIcon className="text-success" />
                          </IconButton>
                          <IconButton aria-label="delete" className="viewbutt">
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
      <CategoryView show={showModal3} onHide={() => setShowModal3(false)} />
      <BrandView show={showModal4} onHide={() => setShowModal4(false)} />
      <EditCategory show={showModal5} onHide={() => setShowModal5(false)} />
      <EditBrand show={showModal6} onHide={() => setShowModal6(false)} />
      <AddCategory show={showModal} onHide={addCategoryModal} />
      <AddBrand show={showModal2} onHide={addBrandModal} />
    </Sidebar>
  );
}

export default Category;
