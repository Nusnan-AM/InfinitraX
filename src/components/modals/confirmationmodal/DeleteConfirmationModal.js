import React from "react";
import PropTypes from "prop-types";
import { Modal, Button} from "react-bootstrap";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DeleteConfirmationModal = ({ show, onHide, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered backdrop="static">
      <Modal.Header>
        <Modal.Title className="Modal-Title-Confirm" style={{color:'darkred'}}>Conformation to delete !</Modal.Title>
        <IconButton style={{color:'darkred'}}><DeleteForeverIcon sx={{ fontSize: "40px" }}/></IconButton>
        
      </Modal.Header>
      <Modal.Body className="Modal-Body-Confirm">
        <p>Are you sure you want to delete this Data ?</p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="danger" onClick={onConfirm} style={{width:'200px'}}>
          Confirm
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        
      </Modal.Footer>
    </Modal>
  );
};

DeleteConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
