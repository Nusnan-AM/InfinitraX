import React from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";

export default function DeleteAttribute(props) {
  const { show, onHide } = props;

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete Attribute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-body">
              <p>Are you sure you want to delete this item?</p>
              <p>This action is not reversable.</p>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
