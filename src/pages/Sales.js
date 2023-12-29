import React, { useState, useEffect } from "react";
import Sidebar from "../layouts/Sidebar";
import { IoIosAddCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";


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

import AddSalesmodel from "../components/modals/AddSalesmodel";
import ViewSalesModel from "../components/modals/ViewSalesModel";
import EditSalesModel from "../components/modals/EditSalesModel";
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";

function Sales() {
  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedSales, setSelectedSales] = useState(null);
  const [Sales, setSales] = useState([]);
  const [SalesToDelete, setSalesToDelete] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredAttributeList, setFilteredAttributeList] = useState([]);
  const [attributeList, setAttributeList] = useState([]);

  const addSalesModal = () => {
    setShowAdd(!showAdd);
  };

  const viewSalesModal = (attributes) => {
    setSelectedSales(attributes);
    setShowView(!showView);
  };

  const editSalesModal = (attributes) => {
    setSelectedSales(attributes);
    setShowEdit(!showEdit);
    fetchData();
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  async function fetchData() {
    const result = await axios.get("http://127.0.0.1:8000/attribute");
    setSales(result.data);
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
    setSalesToDelete(id);
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
                Sales Section
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
                        <option value={""}>Filter by Sales</option>
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
                      <span className="fw-bold">Add Sales</span>
                    </div>
                    <div className="col">
                      <Button variant="success" onClick={addSalesModal}>
                        Add Sales <IoIosAddCircle />
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
                <p className="navbar-brand fw-bold">Sales List</p>
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
                    Product
                  </th>
                  <th scope="col" className="col-1">
                    Quantity
                  </th>
                  <th scope="col" className="col-1">
                    Value
                  </th>
                  <th scope="col" className="col-1">
                    Price
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
                          <td>{data.product}</td>
                          <td>{data.quantity}</td>
                          <td>{data.value}</td>
                          <td>{data.price}</td>
                          <td>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => viewSalesModal(data)}
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                              onClick={() => editSalesModal(data)}
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
          <AddSalesmodel
            show={showAdd}
            onHide={() => addSalesModal(false)}
          />
          <ViewSalesModel
            show={showView}
            onHide={() => viewSalesModal(false)}
            SalesDetails={selectedSales}
          />
          <EditSalesModel
            show={showEdit}
            onHide={() => {
              editSalesModal(false);
              setUpdateTrigger(!updateTrigger);
            }}
            SalesDetails={selectedSales}
          />
          <DeleteConfirmationModal
            show={showDelete}
            onHide={() => setShowDelete(false)}
            onConfirm={() => deleteAttributeModal(SalesToDelete)}
          />
        </Sidebar>
      </div>
    </>
  );
}

export default Sales;
