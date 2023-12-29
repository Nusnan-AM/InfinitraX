import React from "react";
import { useState } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddSalesmodel(props) {
  const { show, onHide } = props;
  const [id, setId] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");
  const [price, setPrice] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);


  const resetForm = () => {
    setId("");
    setProduct("");
    setQuantity("");
    setValue("");
    setPrice("");
  };

  async function AddSalesmodel(event) {
    event.preventDefault();
    if (product.length === 0) {
      toast.warning("Fill the Product Field");
    } else if (quantity.length === 0) {
      toast.warning("Fill the Quantity Field");
    }else if (value.length === 0) {
      toast.warning("Fill the value Field");
    }  else if (price.length === 0) {
      toast.warning("Fill the Price Field");
    } else {
      try {
        await axios.post("", {
          product: product,
          quantity:quantity,
          value: value,
          price: price,
        });
        toast.success("Sales added Succesfully");
        resetForm();
        setUpdateTrigger(!updateTrigger);
      } catch (err) {
        toast.error("Sales added Failed");
      }
    }
  }

  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="Modal-Title">Add Sales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-body">
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                Product
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setProduct(e.target.value)}
                  value={product}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                  Quantity
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                  Value
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                  Price
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={AddSalesmodel}>
            Add Sales
          </Button>
          <Button variant="secondary" onClick={resetForm}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
