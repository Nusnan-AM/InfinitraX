import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Navbar} from "react-bootstrap";

function Attributes() {
  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseView = () => setShowView(false);
  const handleShowView = () => setShowView(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const attributeTable = [
    {
      attribute: "Color",
      value: "Grey",
    },
    {
      attribute: "Storage",
      value: "512 GB",
    },
    {
      attribute: "Display",
      value: "15 inch",
    },
    {
      attribute: "Color",
      value: "Black",
    },
    {
      attribute: "Storage",
      value: "2 TB",
    },
    {
      attribute: "Color",
      value: "White",
    },
    {
      attribute: "Display",
      value: "13.5 inch",
    },
    {
      attribute: "Color",
      value: "Gold",
    },
  ]; 

  return (
      <>
        <div className="Attributes">
          <Sidebar>
            <Navbar className="navbar mt-3 m-3 py-1 rounded">
              <div className="container-fluid d-flex align-items-center justify-content-center">
              <span className="navbar-brand mb-0 h1 text-white">
                Attributes Section
              </span>
              </div>
            </Navbar>
            <div>
              <div className="container px-3">
                <div className="row">
                  <div className="col mx-3 p-2 rounded bg-white">
                    <div className="row">
                      <div className="col">
                        <span className="fw-bold">Filter by</span>
                      </div>
                      <div className="col">
                        <select
                            id="selectFilterByAttribute"
                            className="form-select"
                        >
                          <option>Filter by Attribute</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col mx-3 p-2 rounded bg-white">
                    <div className="row">
                      <div className="col">
                        <span className="fw-bold">Add Attribute</span>
                      </div>
                      <div className="col">
                        <Button
                            variant="success"
                            onClick={handleShowAdd}
                        >
                          Add Attribute <IoIosAddCircle />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <Navbar className="navbar bg-white mb-3 mx-1 py-1 rounded">
                <div className="container-fluid">
                  <p className="navbar-brand fw-bold">Attribute List</p>
                </div>
              </Navbar>
              <table className="table table-striped table-hover">
                <thead>
                <tr>
                  <th scope="col" className="col-1">
                    No
                  </th>
                  <th scope="col" className="col-1">
                    Attribute
                  </th>
                  <th scope="col" className="col-1">
                    Value
                  </th>
                  <th scope="col" className="col-1">
                    Action
                  </th>
                </tr>
                </thead>
                <tbody>
                {
                  attributeTable.map((value, i)=>{
                    return(
                  <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{value?.attribute}</td>
                  <td>{value?.value}</td>
                  <td>
                    <div className="d-flex">
                      <button className="btn h4" onClick={handleShowView}>
                        <FaEye />
                      </button>
                      <button className="btn">
                        <FaEdit
                            className="text-success h4"
                            onClick={handleShowEdit}
                        />
                      </button>
                      <button className="btn">
                        <MdDelete
                            className="text-danger h4"
                            onClick={handleShowDelete}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </div>
          </Sidebar>

          <Modal show={showAdd} onHide={handleCloseAdd}>
            <Modal.Header closeButton>
              <Modal.Title>Add attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="modal-body text-white">
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
                    >
                      <option selected>--Select an Attribute--</option>
                      <option>Color</option>
                      <option>Storage</option>
                      <option>Display</option>
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <label
                        className="form-label"
                        htmlFor="inputAddAttribute-value"
                    >
                      Value
                    </label>
                    <input
                        type="text"
                        id="inputAddAttribute-value"
                        className="form-control"
                        required
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAdd}>
                Close
              </Button>
              <Button variant="success" onClick={handleCloseAdd}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showView} onHide={handleCloseView}>
            <Modal.Header closeButton>
              <Modal.Title>View attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-body text-white">
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
                  >
                    <option selected>--Select an Attribute--</option>
                    <option>Color</option>
                    <option>Storage</option>
                    <option>Display</option>
                  </select>
                </div>
                <div className="form-outline mb-4">
                  <label
                      className="form-label"
                      htmlFor="inputAddAttribute-value"
                  >
                    Value
                  </label>
                  <input
                      type="text"
                      id="inputViewAttribute-value"
                      className="form-control"
                      readOnly
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseView}>
                Close
              </Button>
              <Button variant="success" onClick={handleCloseView}>
                Done
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
              <Modal.Title>Edit attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="modal-body text-white">
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="attribute">
                      Attribute
                    </label>
                    <select
                        id="selectEditAttribute-attribute"
                        className="form-select"
                    >
                      <option selected>--Select an Attribute--</option>
                      <option>Color</option>
                      <option>Storage</option>
                      <option>Display</option>
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
                        required
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Close
              </Button>
              <Button variant="success" onClick={handleCloseEdit}>
                Edit
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title>Add attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="modal-body text-white">
                  <p>Are you sure you want to delete this item?</p>
                  <p>This action is not reversable.</p>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDelete}>
                Close
              </Button>
              <Button variant="danger" onClick={handleCloseDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
  );
}

export default Attributes;
