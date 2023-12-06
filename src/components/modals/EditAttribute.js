import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditAttribute(props) {
  const { show, onHide, attributeDetails } = props;
  const [attributes, setAttributes] = useState("");
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    if (attributeDetails) {
      setAttributes(attributeDetails.attribute);
      setValue(attributeDetails.value);
      setId(attributeDetails.id);
    }
  }, [attributeDetails]);

  async function update(e) {
    e.preventDefault();
    try {
      const updatedAttribute = {
        id: id,
        attribute: attributes,
        value: value,
      };
      await axios
        .put(`http://127.0.0.1:8000/attribute/${id}`, updatedAttribute)
        .then((response) => {
          toast.success("Attribute updated successfully");
          onHide();
          setUpdateTrigger(!updateTrigger);
        });
    } catch (err) {
      alert("Attribute Update Failed");
    }
  }

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Attribute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-body">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="attribute">
                  Attribute
                </label>
                <select
                  id="selectEditAttribute-attribute"
                  className="form-select"
                  value={attributes}
                  onChange={(e) => setAttributes(e.target.value)}
                >
                  <option value={""}>--Select an Attribute--</option>
                  <option value={"Color"}>Color</option>
                  <option value={"Storage"}>Storage</option>
                  <option value={"Display"}>Display</option>
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="value">
                  Value
                </label>
                <input
                  type="text"
                  id="inputEditAttribute-value"
                  className="form-control"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={update}>
            Update
          </Button>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
