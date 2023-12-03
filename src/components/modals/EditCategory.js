import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditCategory(props) {
  const { show, onHide, categoryDetails } = props;
  const [categories, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    if (categoryDetails) {
      setCategory(categoryDetails.categories);
      setStatus(categoryDetails.status);
      setId(categoryDetails.id);
    }
  }, [categoryDetails]);

  async function update(e) {
    e.preventDefault();
    try {
      const updatedCategory = {
        id: id,
        categories: categories,
        status: status,
      };
      await axios
        .put(`http://127.0.0.1:8000/category/${id}`, updatedCategory)
        .then((response) => {
          toast.success("Category Updated successfully");
          onHide();
          setUpdateTrigger(!updateTrigger);
        });
    } catch (err) {
      alert("Category Update Failed");
    }
  }

  

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className="Modal-Title">Category Edit</Modal.Title>
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
              value={categories}
              onChange={(e) => setCategory(e.target.value)}
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
                  checked={status === "Active"}
                  onChange={() => setStatus("Active")}
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
                  checked={status === "InActive"}
                  onChange={() => setStatus("InActive")}
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
        <Button variant="success" onClick={update}>
          Update
        </Button>
        <Button variant="danger">Delete</Button>
        <ToastContainer />
      </Modal.Footer>
    </Modal>
  );
}

export default EditCategory;
