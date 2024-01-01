import React, { useState, useEffect } from "react";
import Sidebar from "../layouts/Sidebar";
import { Navbar } from "react-bootstrap";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import ViewInventoryModal from "../components/modals/ViewInventoryModal";
import EditInventoryModal from "../components/modals/EditInventoryModal";
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Inventory() {
  const [showView, setShowView] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [inventory, setInventory] = useState([]);
  const [inventoryToDelete, setInventoryToDelete] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredInventoryList, setFilteredInventoryList] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const inventoryId = 1;  // Replace with the actual ID
  axios.get(`http://your-api-url/inventoryApi/${inventoryId}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  
  async function fetchData() {
    const result = await axios.get("http://127.0.0.1:8000/inventory");
    setInventory(result.data);
    setInventoryList(result.data);
  }

  async function deleteInventoryModal(id) {
    setShowDeleteConfirmation(false);
    await axios.delete("http://127.0.0.1:8000/inventory/" + id);
    toast.success("Attribute deleted successfully");
    fetchData();
  }

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  useEffect(() => {
    fetchData();
  }, [updateTrigger]);

  useEffect(() => {
    const filteredData = inventoryList.filter(
      (inventory) =>
        (selectedStatus === "" || inventory.inventory === selectedStatus)
    );
    setFilteredInventoryList(filteredData);
  }, [selectedStatus, inventoryList]);

  return (
    <>
      <div className="Inventory">
        <Sidebar>
          <Navbar className="navbar mt-3 m-3 py-1 rounded">
            <div className="container-fluid d-flex align-items-center justify-content-center">
              <span className="navbar-brand mb-0 h1 text-white">
                Inventory Section
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
                        id="selectFilterByInventory"
                        className="form-select"
                        value={selectedStatus}
                        onChange={handleStatusChange}
                      >
                        <option value={""}>Filter by Inventory</option>
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
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <Navbar className="navbar bg-white mb-3 mx-1 py-1 rounded">
              <div className="container-fluid">
                <p className="navbar-brand fw-bold">Inventory List</p>
              </div>
            </Navbar>
            <div className="Inventory-TableSection">
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
                      Attribute
                    </th>
                    <th scope="col" className="col-1">
                      Price
                    </th>
                    <th scope="col" className="col-1">
                      Selling Price
                    </th>
                    <th scope="col" className="col-1">
                      Inventory
                    </th>
                    <th scope="col" className="col-1">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInventoryList.length > 0 ? (
                    filteredInventoryList.map((data, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{data.inventory}</td>
                        <td>{data.value}</td>
                        <td>
                          <IconButton
                            aria-label="view"
                            className="viewbutt"
                            onClick={() => setShowView(true)}
                          >
                            <VisibilityIcon className="text-" />
                          </IconButton>
                          <IconButton
                            aria-label="edit"
                            className="viewbutt"
                            onClick={() => setShowEdit(true)}
                          >
                            <EditIcon className="text-success" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => {
                              setShowDeleteConfirmation(true);
                              setInventoryToDelete(data.id);
                            }}
                          >
                            <DeleteIcon className="text-danger" />
                          </IconButton>
                        </td>
                      </tr>
                    ))
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

          <ViewInventoryModal
            show={showView}
            onHide={() => setShowView(false)}
            attributeDetails={selectedInventory}
          />
          <EditInventoryModal
            show={showEdit}
            onHide={() => {
              setShowEdit(false);
              setUpdateTrigger(!updateTrigger);
            }}
            attributeDetails={selectedInventory}
          />
          <DeleteConfirmationModal
          show={showDelete}
          onHide={() => setShowDelete(false)}
          onConfirm={() => deleteInventoryModal(inventoryToDelete)}
        />
      </Sidebar>
    </div>
  </>
);
}

export default Inventory;
