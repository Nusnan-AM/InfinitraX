import React, { useState, useEffect } from "react";
import "../App.css";
import "../styles/Product.css";
import Sidebar from "../layouts/Sidebar";
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
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";
import AddProduct from "../components/additionals/AddProduct";
import ProductViewModal from "../components/modals/ProductViewModal";
import EditProduct from "../components/additionals/EditProduct";

function Product() {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [productData, setProductData] = useState({
    products: [],
    inventory: [],
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [searchTerm3, setSearchTerm3] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredproductList, setFilteredproductList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);

  const productViewModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  useEffect(() => {
    (async () => await fetchCategory())();
  }, []);

  useEffect(() => {
    (async () => await fetchBrand())();
  }, []);

  useEffect(() => {
    fetchData();
  }, [updateTrigger]);

  async function fetchData() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/product");
      setProductData(result.data);
    } catch (error) {
      // Handle error
      console.error("Error fetching product data:", error);
    }
  }


  async function fetchCategory() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/category");
      const activeCategories = response.data.filter(category => category.status === "Active");
      setcategoryList(activeCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function fetchBrand() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/brand");
      const activeBrand = response.data.filter(brand => brand.status === "Active");
      setbrandList(activeBrand);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  const [addCategoryModal, setAddCategoryModal] = useState(false);

  const handleOpen = () => {
    setAddCategoryModal(!addCategoryModal);
  };

  const handleChange3 = (event) => {
    setSearchTerm3(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchedProduct = productData.products.find(
      (product) => product.serialno === searchTerm3
    );
    if (searchedProduct) {
      setSelectedProduct(searchedProduct);
      setShowModal(true);
      setSearchTerm3("");
    } else {
      toast.error("Product not Found");
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  useEffect(() => {
    const filteredData = productData.products.filter(
      (product) =>
        product.serialno.toLowerCase().includes(searchTerm3.toLowerCase()) &&
        (selectedCategory === "" || product.categories === selectedCategory) &&
        (selectedBrand === "" || product.brand === selectedBrand)
    );
    setFilteredproductList(filteredData);
  }, [searchTerm3,selectedCategory,selectedBrand,productData]);


  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [selectedProductIdToDelete, setSelectedProductIdToDelete] = useState(null);

  const handleDelete = (productId) => {
    setSelectedProductIdToDelete(productId);
    setShowDeleteConfirmationModal(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/product/${selectedProductIdToDelete}`);
      toast.success("Product deleted successfully");
      setShowDeleteConfirmationModal(false);
      setUpdateTrigger(!updateTrigger);
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product");
      setShowDeleteConfirmationModal(false);
    }
  };

  const handleDeleteCanceled = () => {
    setShowDeleteConfirmationModal(false);
  };


  const productEditModal = (product) => {
    setSelectedProduct(product);
    setShowModal2(true);
    fetchData();
  };
  
  return (
    <Sidebar>
      <div className="container">
        <nav className="navbar mt-3 py-1 mb-3 rounded">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <span className="navbar-brand mb-0 h1 text-white">
              Product Section
            </span>
          </div>
        </nav>
        {addCategoryModal ? (
          <div className="Product-Main-Section p-2">
            <AddProduct handleClose={handleOpen} />
          </div>
        ) : (
          <div className="Product-Main-Section p-2">
            <div className="container mb-3 Category-FilterSection d-flex">
              <h5 className="col-1">FilterList</h5>
              <div className="col-3">
                <div className="search-input-container mt-4">
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      className="SearchBox"
                      type="text"
                      placeholder="Filter by Serial Number"
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
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value={""}>--Select the Category--</option>
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.categories}>
                      {category.categories}
                    </option>
                  ))}
                  </select>

                  {selectedCategory && (
                <div
                  className="search-icon"
                  style={{
                    zIndex: "100",
                    backgroundColor: "white",
                    right: "8px",
                  }}
                  onClick={() => setSelectedCategory("")}
                >
                  <ClearIcon />
                </div>
              )}
                </div>
              </div>
              <div className="col-3">
                {" "}
                <div className="search-input-container mt-4">
                  <select
                    className="SearchBox"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                  >
                    <option value={""}>--Select the Category--</option>
                  {brandList.map((brand) => (
                    <option key={brand.id} value={brand.brand}>
                      {brand.brand}
                    </option>
                  ))}
                  </select>
                  {selectedBrand && (
                  <div
                    className="search-icon si2"
                    style={{
                      zIndex: "100",
                      backgroundColor: "white",
                      right: "5px",
                    }}
                    onClick={() => setSelectedBrand("")}
                  >
                    <ClearIcon />
                  </div>
                )}
                </div>
              </div>
            </div>
            <div className="d-flex mb-2 Product-AddedSection">
              <div className="col-6">
                <h5>ProductList</h5>
              </div>
              <div className="col-6 d-flex AddAttribute-Button-Section p-4">
                <button
                  className="d-flex gap-1 btn btn-success"
                  onClick={handleOpen}
                >
                  AddProduct
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
                      SerialNo
                    </th>
                    <th scope="col" className="col-1">
                      Name
                    </th>
                    <th scope="col" className="col-1">
                      Category
                    </th>
                    <th scope="col" className="col-1">
                      Brand
                    </th>
                    <th scope="col" className="col-1">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredproductList.length > 0 ? (
                    filteredproductList.map((product, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.serialno}</td>
                        <td>{product.name}</td>
                        <td>{product.categories}</td>
                        <td>{product.brand}</td>
                        <td className="col-2">
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => productViewModal(product)}
                          >
                            <VisibilityIcon className="text-" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => productEditModal(product)}
                          >
                            <EditIcon className="text-success" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => handleDelete(product.id)}
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
        )}
      </div>
      <DeleteConfirmationModal
        show={showDeleteConfirmationModal}
        onHide={handleDeleteCanceled}
        onConfirm={handleDeleteConfirmed}
      />
      <ProductViewModal
        show={showModal}
        onHide={() => setShowModal(false)}
        productDetails={selectedProduct}
      />
       <EditProduct
        show={showModal2}
        onHide={() => {
          setShowModal2(false);
          setUpdateTrigger(!updateTrigger);
        }}
        productDetails={selectedProduct}
      />
      <ToastContainer/>
    </Sidebar>
  );
}

export default Product;
