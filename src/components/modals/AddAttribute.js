import React from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";

export default function AddAttribute(props) {
  const { show, onHide } = props;

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add attributes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-body">
              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  htmlFor="inputAddAttribute-attribute"
                >
                  Attribute
                </label>
                <select
                  id="selectAddAttribute-attribute"
                  className="form-select"
                >
                  <option>--Select an Attribute--</option>
                  <option value={"Color"}>Color</option>
                  <option value={"Storage"}>Storage</option>
                  <option value={"Display"}>Display</option>
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Value
                </label>
                <input
                  type="text"
                  id="inputAddAttribute-value"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="success">Add Attribute</Button>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
