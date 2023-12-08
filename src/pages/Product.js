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

function Product() {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [productData, setProductData] = useState({
    products: [],
    inventory: [],
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const productViewModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  useEffect(() => {
    (async () => await fetchData())();
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

  const [addCategoryModal, setAddCategoryModal] = useState(false);

  const handleOpen = () => {
    setAddCategoryModal(!addCategoryModal);
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
                  <form>
                    <input
                      className="SearchBox"
                      type="text"
                      placeholder="Filter by Serial Number"
                      // value={searchTerm3}
                      // onChange={handleChange3}
                    />
                    <div className="search-icon">
                      <SearchIcon />
                    </div>
                    {/* {searchTerm3 && (
                  <div
                    className="search-icon si2"
                    style={{
                      zIndex: "100",
                      backgroundColor: "white",
                      right: "15px",
                    }}
                    // onClick={() => setSearchTerm3("")}
                  >
                    <ClearIcon />
                  </div>
                )} */}
                  </form>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div className="search-input-container mt-4 m-5">
                  <select
                    className="SearchBox"
                    // value={selectedStatus}
                    // onChange={handleStatusChange}
                  >
                    <option value={""}>Filter by Category</option>
                    <option value={"Active"}>Active</option>
                    <option value={"InActive"}>InActive</option>
                  </select>

                  {/* {selectedStatus && (
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
              )} */}
                </div>
              </div>
              <div className="col-3">
                {" "}
                <div className="search-input-container mt-4">
                  <select
                    className="SearchBox"
                    // value={selectedStatus}
                    // onChange={handleStatusChange}
                  >
                    <option value={""}>Filter by Brand</option>
                    <option value={"Active"}>Active</option>
                    <option value={"InActive"}>InActive</option>
                  </select>
                  {/* {searchTerm4 && (
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
                )} */}
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
                    {/* <th scope="col" className="col-1">
                      Attribute
                    </th>
                    <th scope="col" className="col-1">
                      Value
                    </th>
                    <th scope="col" className="col-1">
                      Inventory
                    </th> */}
                    <th scope="col" className="col-1">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {productData.products && */}
                   {productData.products.map((product, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{product.serialno}</td>
                          <td>{product.name}</td>
                          <td>{product.categories}</td>
                          <td>{product.brand}</td>
                          {/* <td>{inventoryItem.attribute}</td>
                          <td>{inventoryItem.value}</td>
                          <td>{inventoryItem.inventory}</td> */}
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
                              // onClick={() => categoryEditModal(product)}
                            >
                              <EditIcon className="text-success" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              // onClick={() => handleDelete(product.id)}
                            >
                              <DeleteIcon className="text-danger" />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <ProductViewModal
        show={showModal}
        onHide={() => setShowModal(false)}
        productDetails={selectedProduct}
      />
    </Sidebar>
  );
}

export default Product;
