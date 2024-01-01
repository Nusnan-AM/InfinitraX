import React from "react";
import { Modal, Button } from "react-bootstrap";

function InventoryStockUpdateModal({ show, onHide, inventoryDetails }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header>
        <Modal.Title className="Modal-Title">
          Inventory Stock Update
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
                value={inventoryDetails && inventoryDetails.product}
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
                value={inventoryDetails && inventoryDetails.inventory}
                readOnly
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Enter the Stock
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              //   onChange={(e) => setcategories(e.target.value)}
              //   value={categories}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Update Stock</Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InventoryStockUpdateModal;
