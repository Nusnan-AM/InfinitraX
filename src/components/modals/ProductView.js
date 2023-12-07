import React from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";

function ProductView(props) {
  const { show, onHide, productDetails } = props;

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header>
        <Modal.Title className="Modal-Title">Product View</Modal.Title>
        
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
              value={productDetails && productDetails.products}
              readOnly
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
                  checked={productDetails && productDetails.status === "Active"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input ratio-button-inactive"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  readOnly
                  checked={productDetails && productDetails.status === "InActive"}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  InActive
                </label>
              </div>
              
            </div>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductView;
