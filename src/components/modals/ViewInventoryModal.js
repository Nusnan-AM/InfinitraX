import React from "react";
import { Modal, Button } from "react-bootstrap";

function ViewInventoryModal({ show, onHide, inventoryDetails }) {

  if (!inventoryDetails) {
    return null; 
  }

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>View Inventory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Product:</strong> {inventoryDetails.product}</p>
        <p><strong>Attribute:</strong> {inventoryDetails.attribute}</p>
        <p><strong>Price:</strong> {inventoryDetails.price}</p>
        <p><strong>Selling Price:</strong> {inventoryDetails.sellingprice}</p>
        <p><strong>Inventory:</strong> {inventoryDetails.inventory}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewInventoryModal;
