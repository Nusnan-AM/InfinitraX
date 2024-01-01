import React, { useState, useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";


function Category() {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [brandToDelete, setbrandToDelete] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [confirmModalVisible2, setConfirmModalVisible2] = useState(false);
  const [Category, setCategory] = useState([]);
  const [Brand, setBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [filteredcategoryList, setFilteredcategoryList] = useState([]);
  const [filteredbrandList, setFilteredbrandList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);

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
    fetchData2();
  };
  const categoryViewModal = (categories) => {
    setSelectedCategory(categories);
    setShowModal3(true);
  };

  const brandViewModal = (brand) => {
    setSelectedBrand(brand);
    setShowModal4(true);
  };
  const categoryEditModal = (categories) => {
    setSelectedCategory(categories);
    setShowModal5(true);
    fetchData();
  };

  const brandEditModal = (brand) => {
    setSelectedBrand(brand);
    setShowModal6(true);
    fetchData();
  };

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

  const handleDelete = async (id) => {
    setConfirmModalVisible(true);
    setCategoryToDelete(id);
  };

  async function DeleteCategory(id) {
    setConfirmModalVisible(false);
    await axios.delete("http://127.0.0.1:8000/category/" + id);
    toast.success("Category deleted successfully");
    fetchData();
  }

  const handleDelete2 = async (id) => {
    setConfirmModalVisible2(true);
    setbrandToDelete(id);
  };

  async function DeleteBrand(id) {
    setConfirmModalVisible2(false);
    await axios.delete("http://127.0.0.1:8000/brand/" + id);
    toast.success("Brand deleted successfully");
    fetchData2();
  }

  useEffect(() => {
    fetchData();
  }, [updateTrigger]);

  useEffect(() => {
    fetchData2();
  }, [updateTrigger]);

  useEffect(() => {
    const filteredData = categoryList.filter(
      (category) =>
        category.categories.toLowerCase().includes(searchTerm3.toLowerCase()) &&
        (selectedStatus === "" || category.status === selectedStatus)
    );
    setFilteredcategoryList(filteredData);
  }, [searchTerm3, selectedStatus, categoryList]);

  useEffect(() => {
    const filteredData2 = brandList.filter(
      (brand) =>
        brand.brand.toLowerCase().includes(searchTerm4.toLowerCase()) &&
        (selectedStatus === "" || brand.status === selectedStatus)
    );
    setFilteredbrandList(filteredData2);
  }, [searchTerm4, selectedStatus, brandList]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchedCategory = categoryList.find(
      (category) => category.categories === searchTerm3
    );
    if (searchedCategory) {
      setSelectedCategory(searchedCategory);
      setShowModal3(true);
      setSearchTerm3("");
    } else {
      toast.error("Category not Found");
    }
  };

  const handleSearchSubmit2 = (event) => {
    event.preventDefault();
    const searchedBrand = brandList.find(
      (brand) => brand.brand === searchTerm4
    );
    if (searchedBrand) {
      setSelectedBrand(searchedBrand);
      setShowModal4(true);
      setSearchTerm3("");
    } else {
      toast.error("Brand not Found");
    }
  };

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
              <form onSubmit={handleSearchSubmit}>
                <input
                  className="SearchBox"
                  type="text"
                  placeholder="Filter by Category"
                  value={searchTerm3}
                  onChange={handleChange3}
                />
                <div className="search-icon" onClick={handleSearchSubmit}>
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
                <option value={""}>Filter by Status</option>
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
              <form onSubmit={handleSearchSubmit2}>
                <input
                  className="SearchBox"
                  type="text"
                  placeholder="Filter by Brand"
                  value={searchTerm4}
                  onChange={handleChange4}
                />
                <div className="search-icon" onClick={handleSearchSubmit2}>
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
                    {filteredcategoryList.length > 0 ? (
                      filteredcategoryList.map((data, index) => (
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
                              onClick={() => categoryViewModal(data)}
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => categoryEditModal(data)}
                            >
                              <EditIcon className="text-success" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => handleDelete(data.id)}
                            >
                              <DeleteIcon className="text-danger" />
                            </IconButton>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No results found</td>
                      </tr>
                    )}
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
                    {filteredbrandList.length > 0 ? (
                      filteredbrandList.map((data, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{data.brand}</td>
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
                              onClick={() => brandViewModal(data)}
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => brandEditModal(data)}
                            >
                              <EditIcon className="text-success" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => handleDelete2(data.id)}
                            >
                              <DeleteIcon className="text-danger" />
                            </IconButton>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No results found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
      <CategoryView
        show={showModal3}
        onHide={() => setShowModal3(false)}
        categoryDetails={selectedCategory}
      />
      <BrandView
        show={showModal4}
        onHide={() => setShowModal4(false)}
        brandDetails={selectedBrand}
      />
      <EditCategory
        show={showModal5}
        onHide={() => {
          setShowModal5(false);
          setUpdateTrigger(!updateTrigger);
        }}
        categoryDetails={selectedCategory}
      />
      <EditBrand
        show={showModal6}
        onHide={() => {
          setShowModal6(false);
          setUpdateTrigger(!updateTrigger);
        }}
        brandDetails={selectedBrand}
      />
      <AddCategory show={showModal} onHide={addCategoryModal} />
      <AddBrand show={showModal2} onHide={addBrandModal} />

      <DeleteConfirmationModal
        show={confirmModalVisible}
        onHide={() => setConfirmModalVisible(false)}
        onConfirm={() => DeleteCategory(categoryToDelete)}
      />
      <DeleteConfirmationModal
        show={confirmModalVisible2}
        onHide={() => setConfirmModalVisible2(false)}
        onConfirm={() => DeleteBrand(brandToDelete)}
      />
    </Sidebar>
  );
}

export default Category;
