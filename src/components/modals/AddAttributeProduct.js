import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddAttributeProduct(props) {
  const { show, onHide } = props;
  const [id, setId] = useState("");
  const [attributes, setAttributes] = useState("");
  const [value, setValue] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [attribute, setAttribute] = useState([]);
  const [attributeList, setAttributeList] = useState([]);
  const [attributeValues, setAttributeValues] = useState([]);

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
        await axios.post("http://127.0.0.1:8000/", {
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

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  async function fetchData() {
    const result = await axios.get("http://127.0.0.1:8000/attribute");
    setAttribute(result.data);
    setAttributeList(result.data);
  }

  const handleAttributeChange = (selectedAttribute) => {
    const filteredValues = attributeList
      .filter((item) => item.attribute === selectedAttribute)
      .map((item) => item.value);

    setAttributeValues(filteredValues);
    setAttributes(selectedAttribute);
    setValue(""); // Reset the value when the attribute changes
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="Modal-Title">Add attributes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-body">
              <div className="row mb-2">
                <div className="col-6">
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
                      onChange={(e) => {
                        setAttributes(e.target.value);
                        handleAttributeChange(e.target.value);
                      }}
                      value={attributes}
                    >
                      <option>--Select an Attribute--</option>
                      <option value={"Color"}>Color</option>
                      <option value={"Storage"}>Storage</option>
                      <option value={"Display"}>Display</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-outline mb-4">
                    <label
                      className="form-label"
                      htmlFor="inputAddAttribute-value"
                    >
                      Value
                    </label>
                    <select
                      id="selectAddAttribute-attribute"
                      className="form-select"
                      onChange={(e) => setValue(e.target.value)}
                      value={value}
                    >
                      <option>--Select an Value--</option>
                      {attributeValues.map((attrValue, index) => (
                        <option key={index} value={attrValue}>
                          {attrValue}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4">
                  <div className="form-outline mb-2">
                    <label
                      className="form-label"
                      htmlFor="inputAddAttribute-value"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      id="inputAddAttribute-value"
                      className="form-control"
                      //   onChange={(e) => setValue(e.target.value)}
                      //   value={value}
                      required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-outline mb-2">
                    <label
                      className="form-label"
                      htmlFor="inputAddAttribute-value"
                    >
                      Inventory
                    </label>
                    <input
                      type="text"
                      id="inputAddAttribute-value"
                      className="form-control"
                      //   onChange={(e) => setValue(e.target.value)}
                      //   value={value}
                      required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-outline mb-2">
                    <label
                      className="form-label"
                      htmlFor="inputAddAttribute-value"
                    >
                      Taxrate
                    </label>
                    <input
                      type="text"
                      id="inputAddAttribute-value"
                      className="form-control"
                      //   onChange={(e) => setValue(e.target.value)}
                      //   value={value}
                      required
                    />
                  </div>
                </div>
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
