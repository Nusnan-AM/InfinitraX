import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditSalesModel(props) {
  const { show, onHide, salesDetails } = props;
  const [id, setId] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");
  const [price, setPrice] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    if (salesDetails) {
      setProduct(salesDetails.product);
      setQuantity(salesDetails.quantity);
      setValue(salesDetails.value);
      setPrice(salesDetails.price);
      setId(salesDetails.id);
    }
  }, [salesDetails]);

  async function update(e) {
    e.preventDefault();
    try {
      const updatedSales = {
        id: id,
        product: product,
        quantity:quantity,
        value: value,
        price: price,
      };
      await axios
        .put(`http://127.0.0.1:8000/attribute/${id}`, updatedSales)
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
          <Modal.Title>Edit Sales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-body">
 
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="product">
                  Product
                </label>
                <input
                  type="text"
                  id="inputEditSales-value"
                  className="form-control"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="text"
                  id="inputEditSales-value"
                  className="form-control"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="value">
                  Value
                </label>
                <input
                  type="text"
                  id="inputEditSales-value"
                  className="form-control"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="price">
                  Price
                </label>
                <input
                  type="text"
                  id="inputEditSales-value"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
