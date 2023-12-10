import React from "react";
import { Modal, Button } from "react-bootstrap";

const EditAttributeProduct = ({
  show,
  onHide,
  editedAttribute,
  setEditedAttribute,
  onConfirm,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAttribute((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      className="confirmmodal-Back"
    >
      <Modal.Header>
        <Modal.Title>Edit Attribute</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="attribute" className="form-label">
              Attribute
            </label>
            <input
              type="text"
              className="form-control"
              id="attribute"
              name="attribute"
              value={editedAttribute.attribute}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="value" className="form-label">
              Value
            </label>
            <input
              type="text"
              className="form-control"
              id="value"
              name="value"
              value={editedAttribute.value}
              onChange={handleInputChange}
            />
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="taxrate" className="form-label">
                Taxrate
              </label>
              <input
                type="text"
                className="form-control"
                id="taxrate"
                name="taxrate"
                value={editedAttribute.taxrate}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onConfirm}>
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
