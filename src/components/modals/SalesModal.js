import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UpdateConfirmationModal from "./confirmationmodal/UpdateConfirmationModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SalesModal({ show, onHide, salesDetails }) {
  const [showUpdateConfirmModal, setShowUpdateConfirmModal] = useState(false);
  const [stock, setStock] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const handleUpdate = (e) => {
    setShowUpdateConfirmModal(true);
  };

  const id=salesDetails && salesDetails.id;

  const updatestock = parseInt(salesDetails && salesDetails.inventory) - parseInt(stock) ;

  async function handleUpdateConfirmed(e) {
    e.preventDefault();
    try {
      const updatedProduct = {
        product_id: id,
        inventory: updatestock,
      };
      await axios
        .put(`http://127.0.0.1:8000/inventorydata/${id}`, updatedProduct)
        .then((response) => {
          toast.success("Stock Sales successfully");
          setStock("");
          onHide();
          setUpdateTrigger(!updateTrigger);
        });
    } catch (error) {
      toast.error("Stock Update Failed");
      console.error(error);
    }
    setShowUpdateConfirmModal(false);
  }
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header>
        <Modal.Title className="Modal-Title">
          Sales Stock Update
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex row">
          <div className="col-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                SerialNo
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={salesDetails && salesDetails.product}
                readOnly
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Inventory
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={salesDetails && salesDetails.inventory}
                readOnly
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Enter the Stock amount to sale
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
                onChange={(e) => setStock(e.target.value)}
                value={stock}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleUpdate}>Update Sales</Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <UpdateConfirmationModal
            show={showUpdateConfirmModal}
            onHide={() => setShowUpdateConfirmModal(false)}
            onConfirm={handleUpdateConfirmed}
          />
      </Modal.Footer>
    </Modal>
  );
}

export default SalesModal;
