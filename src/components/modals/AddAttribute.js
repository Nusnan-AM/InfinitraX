import React from "react";
import { useState } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddAttribute(props) {
  const { show, onHide } = props;
  const [id, setId] = useState("");
  const [attributes, setAttributes] = useState("");
  const [value, setValue] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const resetForm = () => {
    setId("");
    setAttributes("");
    setValue("");
  };

  async function addAttribute(event) {
    event.preventDefault();
    if (attributes.length === 0) {
      toast.warning("Fill the attributes Field");
    } else if (value.length === 0) {
      toast.warning("Fill the Status Field");
    } else {
      try {
        await axios.post("http://127.0.0.1:8000/attribute", {
          attribute: attributes,
          value: value,
        });
        toast.success("Attributes added Succesfully");
        resetForm();
        setUpdateTrigger(!updateTrigger);
      } catch (err) {
        toast.error("Attributes added Failed");
      }
    }
  }

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="Modal-Title">Add attributes</Modal.Title>
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
                  onChange={(e) => setAttributes(e.target.value)}
                  value={attributes}
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
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  required
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={addAttribute}>
            Add Attribute
          </Button>
          <Button variant="secondary" onClick={resetForm}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
