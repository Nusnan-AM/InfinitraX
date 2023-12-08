import React from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";

export default function ViewAttribute(props) {
  const { show, onHide, attributeDetails } = props;

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>View Attribute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-outline mb-4">
              <label
                className="form-label"
                htmlFor="inputAddAttribute-attribute"
              >
                Attribute
              </label>
              <input
                type="text"
                id="inputViewAttribute-attribute"
                className="form-control"
                value={attributeDetails && attributeDetails.attribute}
                readOnly
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="inputAddAttribute-value">
                Value
              </label>
              <input
                type="text"
                id="inputViewAttribute-value"
                className="form-control"
                value={attributeDetails && attributeDetails.value}
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
