import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateConfirmationModal from "./confirmationmodal/UpdateConfirmationModal";
import DeleteConfirmationModal from "./confirmationmodal/DeleteConfirmDouble";

function EditProduct(props) {
  const { show, onHide, productDetails } = props;
  const [products, setProduct] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateConfirmModal, setShowUpdateConfirmModal] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails.products);
      setStatus(productDetails.status);
      setId(productDetails.id);
    }
  }, [productDetails]);

  const handleUpdate = (e) => {
    setShowUpdateConfirmModal(true);
  };

  async function handleUpdateConfirmed(e) {
    e.preventDefault();
    if (
      products === productDetails.products &&
      status === productDetails.status
    ) {
      toast.info("No data to update");
      setShowUpdateConfirmModal(false);
      return;
    }
    try {
      const updatedProduct = {
        id: id,
        products: products,
        status: status,
      };
      await axios
        .put(`http://127.0.0.1:8000/category/${id}`, updatedProduct)
        .then((response) => {
          toast.success("Product Updated successfully");
          onHide();
          setUpdateTrigger(!updateTrigger);
        });
    } catch (error) {
      alert("Product Update Failed");
      console.error(error);
    }
    setShowUpdateConfirmModal(false);
  }
  const handleDelete = (e) => {
    setShowConfirmModal(true);
  };

  async function handleConfirmed(e) {
    e.preventDefault();
    try {
      await axios
        .delete(`http://127.0.0.1:8000/category/${id}`)
        .then((response) => {
          toast.success("Product deleted successfully");
          onHide();
        });
    } catch (error) {
      alert("Product Delete Failed");
      console.error(error);
    }
    setShowConfirmModal(false);
  }

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="Modal-Title">Product Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
              Product
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="laptops..."
                value={products}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Status
              </label>
              <div className="d-flex gap-5">
                <div className="form-check">
                  <input
                    className="form-check-input ratio-button-active"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={status === "Active"}
                    onChange={() => setStatus("Active")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Active
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input ratio-button-inactive"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked={status === "InActive"}
                    onChange={() => setStatus("InActive")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    InActive
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <ToastContainer />
          <UpdateConfirmationModal
            show={showUpdateConfirmModal}
            onHide={() => setShowUpdateConfirmModal(false)}
            onConfirm={handleUpdateConfirmed}
          />
          <DeleteConfirmationModal
            show={showConfirmModal}
            onHide={() => setShowConfirmModal(false)}
            onConfirm={handleConfirmed}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
