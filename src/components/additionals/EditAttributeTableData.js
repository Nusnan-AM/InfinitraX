import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const EditAttributeProduct = ({
  show,
  onHide,
  editedAttribute,
  setEditedAttribute,
  onConfirm,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "taxrate") {
      setEditedAttribute((prev) => ({ ...prev, [name]: value }));
    } else {
      setEditedAttribute((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [attributeList, setAttributeList] = useState([]);
  const [attributeValues, setAttributeValues] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchData();
    if (editedAttribute.attribute) {
      // If there's a selected attribute, set the attribute values and default value
      const filteredValues = attributeList
        .filter((item) => item.attribute === editedAttribute.attribute)
        .map((item) => item.value);

      setAttributeValues(filteredValues);

      // Set the default value based on the editedAttribute.value
      setValue(editedAttribute.value || "");
    }
  }, [editedAttribute.attribute]);

  async function fetchData() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/attribute");
      setAttributeList(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleAttributeChange = (selectedAttribute) => {
    const filteredValues = attributeList
      .filter((item) => item.attribute === selectedAttribute)
      .map((item) => item.value);

    setAttributeValues(filteredValues);
    setValue("");
    handleInputChange({
      target: { name: "attribute", value: selectedAttribute },
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      className="confirmmodal-Back"
      size="lg"
    >
      <Modal.Header>
        <Modal.Title className="Modal-Title">Edit Attribute</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="modal-body">
            <div className="row mb-2">
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label
                    className="form-label"
                    htmlFor="selectAddAttribute-attribute"
                  >
                    Attribute
                  </label>
                  <select
                    id="selectAddAttribute-attribute"
                    className="form-select"
                    onChange={(e) => handleAttributeChange(e.target.value)}
                    value={editedAttribute.attribute || ""}
                  >
                    <option value={""}>Select an Attribute</option>
                    <option value={"Color"}>Color</option>
                    <option value={"Storage"}>Storage</option>
                    <option value={"Display"}>Display</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label
                    htmlFor="selectAddAttribute-value"
                    className="form-label"
                  >
                    Value
                  </label>
                  <select
                    id="selectAddAttribute-value"
                    className="form-select"
                    onChange={(e) => {
                      handleInputChange({
                        target: { name: "value", value: e.target.value },
                      });
                    }}
                    value={editedAttribute.value || ""}
                  >
                    <option value={""}>Select a Value</option>
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
                <div className="form-outline mb-4">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={editedAttribute.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-4 mb-3">
                <label htmlFor="inventory" className="form-label">
                  Inventory
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inventory"
                  name="inventory"
                  value={editedAttribute.inventory}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4 mb-3">
                <label htmlFor="taxrate" className="form-label">
                  Taxrate
                </label>

                <select
                  id="selectAddAttribute-attribute"
                  className="form-select"
                  value={editedAttribute.taxrate}
                  onChange={(e) =>
                    handleInputChange({
                      target: { name: "taxrate", value: e.target.value },
                    })
                  }
                >
                  <option value={""}>Select an Percentage</option>
                  <option value={"2"}>2%</option>
                  <option value={"5"}>5%</option>
                  <option value={"8"}>8%</option>
                  <option value={"10"}>10%</option>
                  <option value={"12"}>12%</option>
                  <option value={"15"}>15%</option>
                  <option value={"20"}>20%</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onConfirm}>
          Save Changes
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAttributeProduct;
