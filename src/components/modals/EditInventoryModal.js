import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditInventoryModal({ show, onHide, inventoryDetails }) {
  if (!inventoryDetails) {
    return null; 
  }
  
  const handleSaveChanges = () => {
    onHide();
    
  };

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Inventory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formProduct">
            <Form.Label>Inventory</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product"
              value={inventoryDetails.inventory}
              
            />
          </Form.Group>

         
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSaveChanges}>
          Update
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditInventoryModal;
