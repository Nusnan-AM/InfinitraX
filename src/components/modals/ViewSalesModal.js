import React from "react";
import { Modal, Button } from "react-bootstrap";

function ViewInventoryModal({ show, onHide, salesDetails }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Header>
        <Modal.Title className="Modal-Title">View Sales</Modal.Title>
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
                value={salesDetails && salesDetails.product}
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
                value={salesDetails && salesDetails.attribute}
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
                value={salesDetails && salesDetails.value}
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
                value={salesDetails && salesDetails.inventory}
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
                value={salesDetails && salesDetails.price}
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
                value={salesDetails && salesDetails.taxrate}
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
                  salesDetails &&
                  (salesDetails.price * (1 + salesDetails.taxrate / 100)).toFixed(2)
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
