import React, { useState, useEffect } from "react";
import Sidebar from "../layouts/Sidebar";
import { IoIosAddCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import AddAttribute from "../components/modals/AddAttribute";
import ViewAttribute from "../components/modals/ViewAttribute";
import EditAttribute from "../components/modals/EditAttribute";
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";
import "../styles/attributes.css";
import "../App.css";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Attributes() {
  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [attribute, setAttribute] = useState([]);
  const [attributeToDelete, setAttributeToDelete] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredAttributeList, setFilteredAttributeList] = useState([]);
  const [attributeList, setAttributeList] = useState([]);

  const addAttributeModal = () => {
    setShowAdd(!showAdd);
    fetchData();
  };

  const viewAttributeModal = (attributes) => {
    setSelectedAttribute(attributes);
    setShowView(!showView);
  };

  const editAttributeModal = (attributes) => {
    setSelectedAttribute(attributes);
    setShowEdit(!showEdit);
    fetchData();
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  async function fetchData() {
    const result = await axios.get("http://127.0.0.1:8000/attribute");
    setAttribute(result.data);
    setAttributeList(result.data);
  }

  async function deleteAttributeModal(id) {
    setShowDelete(false);
    await axios.delete("http://127.0.0.1:8000/attribute/" + id);
    toast.success("Attribute deleted successfully");
    fetchData();
  }

  const handleDelete = async (id) => {
    setShowDelete(true);
    setAttributeToDelete(id);
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  useEffect(() => {
    fetchData();
  }, [updateTrigger]);

  useEffect(() => {
    const filteredData = attributeList.filter(
      (attribute) =>
        attribute.attribute.toLowerCase() &&
        (selectedStatus === "" || attribute.attribute === selectedStatus)
    );
    setFilteredAttributeList(filteredData);
  }, [selectedStatus, attributeList]);

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
                        value={selectedStatus}
                        onChange={handleStatusChange}
                      >
                        <option value={""}>Filter by Attribute</option>
                        <option value={"Color"}>Color</option>
                        <option value={"Storage"}>Storage</option>
                        <option value={"Display"}>Display</option>
                      </select>
                      {selectedStatus && (
                        <div
                          className="search-icon"
                          style={{
                            zIndex: "100",
                            backgroundColor: "white",
                            right: "18px",
                          }}
                          onClick={() => setSelectedStatus("")}
                        >
                          <ClearIcon />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col mx-3 p-2 rounded bg-white">
                  <div className="row">
                    <div className="col">
                      <span className="fw-bold">Add Attribute</span>
                    </div>
                    <div className="col">
                      <Button variant="success" onClick={addAttributeModal}>
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
            <div className="Attribute-TableSection">
              <table className="table table-striped table-hover">
                <thead className="top-0 position-sticky z-1">
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
                  {filteredAttributeList.length > 0 ? (
                    filteredAttributeList.map((data, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{data.attribute}</td>
                          <td>{data.value}</td>
                          <td>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => viewAttributeModal(data)}
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => editAttributeModal(data)}
                            >
                              <EditIcon className="text-success" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => handleDelete(data.id)}
                            >
                              <DeleteIcon className="text-danger" />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="7">No results found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <ToastContainer />
          </div>
          <AddAttribute
            show={showAdd}
            onHide={() => addAttributeModal(false)}
          />
          <ViewAttribute
            show={showView}
            onHide={() => viewAttributeModal(false)}
            attributeDetails={selectedAttribute}
          />
          <EditAttribute
            show={showEdit}
            onHide={() => {
              editAttributeModal(false);
              setUpdateTrigger(!updateTrigger);
            }}
            attributeDetails={selectedAttribute}
          />
          <DeleteConfirmationModal
            show={showDelete}
            onHide={() => setShowDelete(false)}
            onConfirm={() => deleteAttributeModal(attributeToDelete)}
          />
        </Sidebar>
      </div>
    </>
  );
}

export default Attributes;
