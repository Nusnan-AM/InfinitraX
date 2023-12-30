import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBrand(props) {
  const { show, onHide } = props;
  const [id, setId] = useState("");
  const [brand, setbrand] = useState("");
  const [status, setStatus] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const resetForm = () => {
    setId("");
    setbrand("");
    setStatus("");
  };

  async function addBrand(event) {
    event.preventDefault();
    if (brand.length === 0) {
      toast.warning("Fill the Brand Field");
    } else if (status.length === 0) {
      toast.warning("Fill the Status Field");
    } else {
      try {
        await axios.post("http://127.0.0.1:8000/brand", {
          brand: brand,
          status: status,
        });
        toast.success("Brand added Succesfully");
        resetForm();
        setUpdateTrigger(!updateTrigger);
      } catch (err) {
        toast.error("Brand added Failed");
      }
    }
  }

  
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className="Modal-Title">Brand ADD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Brand
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Hp..."
              onChange={(e) => setbrand(e.target.value)}
              value={brand}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Status
            </label>
            <div className="d-flex gap-5">
              <div className="form-check">
                <input
                  className="form-check-input ratio-button-active"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(e) => setStatus(e.target.value)}
                  value="Active"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input ratio-button-inactive"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onChange={(e) => setStatus(e.target.value)}
                  value="InActive"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  InActive
                </label>
              </div>
            </div>
           
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={addBrand}>ADD Brand</Button>
        <Button variant="secondary" onClick={resetForm}>Reset</Button>
        {/* <ToastContainer/> */}
      </Modal.Footer>
    </Modal>
  );
}

export default AddBrand;
