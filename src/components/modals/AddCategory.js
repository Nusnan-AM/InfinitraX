import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCategory(props) {
  const { show, onHide } = props;
  const [id, setId] = useState("");
  const [categories, setcategories] = useState("");
  const [status, setStatus] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const resetForm = () => {
    setId("");
    setcategories("");
    setStatus("");
  };

  async function addCategory(event) {
    event.preventDefault();
    if (categories.length === 0) {
      toast.warning("Fill the Categories Field");
    } else if (status.length === 0) {
      toast.warning("Fill the Status Field");
    } else {
      try {
        await axios.post("http://127.0.0.1:8000/category", {
          categories: categories,
          status: status,
        });
        toast.success("Categories added Succesfully");
        resetForm();
        setUpdateTrigger(!updateTrigger);
      } catch (err) {
        toast.error("Categories added Failed");
      }
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className="Modal-Title">Category ADD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Category
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="laptops..."
              onChange={(e) => setcategories(e.target.value)}
              value={categories}
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
        <Button variant="success" onClick={addCategory}>
          ADD Category
        </Button>
        <Button variant="secondary" onClick={resetForm}>
          Reset
        </Button>
        <ToastContainer />
      </Modal.Footer>
    </Modal>
  );
}

export default AddCategory;
