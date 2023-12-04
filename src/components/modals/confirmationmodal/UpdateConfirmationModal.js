import React from "react";
import PropTypes from "prop-types";
import { Modal, Button} from "react-bootstrap";
import { IconButton } from "@mui/material"; 
import UpdateIcon from '@mui/icons-material/Update';

const UpdateConfirmationModal = ({ show, onHide, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered backdrop="static" className="confirmmodal-Back">
      <Modal.Header>
        <Modal.Title className="Modal-Title-Confirm" style={{color:'Green'}}>Conformation to Update Details !</Modal.Title>
        <IconButton style={{color:'darkgreen'}}><UpdateIcon sx={{ fontSize: "40px" }}/></IconButton>
      </Modal.Header>
      <Modal.Body className="Modal-Body-Confirm" >
        <p>Are you sure you want to Update this Details ?</p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="success" style={{width:'200px'}} onClick={onConfirm}>
          Confirm
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        
      </Modal.Footer>
    </Modal>
  );
};

UpdateConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default UpdateConfirmationModal;
