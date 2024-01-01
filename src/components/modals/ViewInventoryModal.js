import React from "react";
import { Modal, Button } from "react-bootstrap";

function ViewInventoryModal({ show, onHide, inventoryDetails }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Header>
        <Modal.Title className="Modal-Title">View Inventory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex row">
          <div className="col-12">
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
        </div>
        <div className="d-flex row">
          <div className="col-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Attribute
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={inventoryDetails && inventoryDetails.attribute}
                readOnly
              />
            </div>
          </div>
          <div className="col-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Value
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={inventoryDetails && inventoryDetails.value}
                readOnly
              />
            </div>
          </div>
          <div className="col-4">
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
        <div className="d-flex row">
          <div className="col-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Price ($)
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={inventoryDetails && inventoryDetails.price}
                readOnly
              />
            </div>
          </div>
          <div className="col-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Taxrate 
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={inventoryDetails && inventoryDetails.taxrate}
                readOnly
              />
            </div>
          </div>
          <div className="col-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Selling Price ($)
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={
                  inventoryDetails &&
                  (inventoryDetails.price * (1 + inventoryDetails.taxrate / 100)).toFixed(2)
                }
                readOnly
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewInventoryModal;
