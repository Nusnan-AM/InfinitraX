import React from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";

export default function ViewSalesModel(props) {
  const { show, onHide, salesDetails } = props;

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>View Sales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="inputAddSales-value">
              Product
              </label>
              <input
                type="text"
                id="inputAddSales-value"
                className="form-control"
                value={salesDetails && salesDetails.product}
                readOnly
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="inputAddSales-value">
              Quantity
              </label>
              <input
                type="text"
                id="inputAddSales-value"
                className="form-control"
                value={salesDetails && salesDetails.quantity}
                readOnly
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="inputAddSales-value">
                Value
              </label>
              <input
                type="text"
                id="inputAddSales-value"
                className="form-control"
                value={salesDetails && salesDetails.value}
                readOnly
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="inputAddSales-value">
                Price
              </label>
              <input
                type="text"
                id="inputAddSales-value"
                className="form-control"
                value={salesDetails && salesDetails.price}
                readOnly
              />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
