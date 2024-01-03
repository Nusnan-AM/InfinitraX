import React, { useState, useEffect } from "react";
import "../App.css";
import "../styles/Product.css";
import Sidebar from "../layouts/Sidebar";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";
import AddSales from "../components/additionals/AddSales";
import ViewSalesModel from "../components/modals/ViewSalesModel";
import EditSalesModel from "../components/modals/EditSalesModel";

function Sales() {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [productData, setProductData] = useState({
    products: [],
    inventory: [],
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

 
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
              Sales Section
            </span>
          </div>
        </nav>
        {addCategoryModal ? (
          <div className="Product-Main-Section p-2">
            <AddSales handleClose={handleOpen} />
          </div>
        ) : (
          <div className="Product-Main-Section p-2">
            <div className="d-flex mb-2 Product-AddedSection">
              <div className="col-6">
                <h5>Sales List</h5>
              </div>
              <div className="col-6 d-flex AddAttribute-Button-Section p-4">
                <button
                  className="d-flex gap-1 btn btn-success"
                  onClick={handleOpen}
                >
                  Add Sales
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
                      Quantity
                    </th>
                    <th scope="col" className="col-1">
                      Total Price
                    </th>
                    <th scope="col" className="col-1">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productData.products.length > 0 ? (
                    productData.products.map((product, index) => (
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
                            onClick={() => productEditModal(product.id)}
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
                      <td colSpan="6">No results found</td>
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
      <ViewSalesModel
        show={showModal}
        onHide={() => setShowModal(false)}
        productDetails={selectedProduct}
      />
       <EditSalesModel
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

export default Sales;
