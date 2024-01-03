import React, { useState, useEffect } from "react";
import Sidebar from "../layouts/Sidebar";
import { Navbar } from "react-bootstrap";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import ViewSalesModal from "../components/modals/ViewSalesModal";
import DeleteConfirmationModal from "../components/modals/confirmationmodal/DeleteConfirmationModal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "../styles/inventory.css";
import SearchIcon from "@mui/icons-material/Search";
import SalesModal from "../components/modals/SalesModal";

function Sales() {
  const [showView, setShowView] = useState(false);
  const [showView2, setShowView2] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  const [inventory, setInventory] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [searchTerm3, setSearchTerm3] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredSalesList, setFilteredSalesList] = useState([]);
  const [SalesList, setSalesList] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [inventoryDelete, setinventoryDelete] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  async function fetchData() {
    const result = await axios.get("http://127.0.0.1:8000/inventorydata");
    setInventory(result.data);
    setSalesList(result.data);
  }

  const handleDelete = async (id) => {
    setConfirmModalVisible(true);
    setinventoryDelete(id);
  };

  async function deleteInventoryModal(id) {
    setConfirmModalVisible(false);
    await axios.delete("http://127.0.0.1:8000/inventorydata/" + id);
    toast.success("Attribute deleted successfully");
    fetchData();
  }

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  useEffect(() => {
    fetchData();
  }, [updateTrigger]);

  const isPriceInRange = (price, range) => {
    const [min, max] = range.split("-").map(Number);
    return price >= min && price <= max;
  };

  useEffect(() => {
    const filteredData = SalesList.filter(
      (inventory) =>
        inventory.product.toLowerCase().includes(searchTerm3.toLowerCase()) &&
        (selectedStatus === "" || inventory.attribute === selectedStatus) &&
        (selectedPriceRange === "" ||
          isPriceInRange(inventory.price, selectedPriceRange))
    );
    setFilteredSalesList(filteredData);
  }, [searchTerm3, selectedStatus, selectedPriceRange, SalesList]);

  const inventoryViewModal = (inventory) => {
    setSelectedInventory(inventory);
    setShowView(true);
  };

  const inventoryStockModal = (inventory) => {
    setSelectedInventory(inventory);
    setShowView2(true);
  };

  const handleChange3 = (event) => {
    setSearchTerm3(event.target.value);
  };

  return (
    <>
      <Sidebar>
        <div className="container">
          <Navbar className="navbar mt-3 m-3 py-1 rounded">
            <div className="container-fluid d-flex align-items-center justify-content-center">
              <span className="navbar-brand mb-0 h1 text-white">
                Sales Section
              </span>
            </div>
          </Navbar>

          <div className="mb-3 Category-FilterSection d-flex">
            <h5 className="col-1">FilterList</h5>
            <div className="col-3">
              <div className="search-input-container mt-4">
                <form>
                  <input
                    className="SearchBox"
                    type="text"
                    placeholder="Filter by SerialNo"
                    value={searchTerm3}
                    onChange={handleChange3}
                  />
                  <div className="search-icon">
                    <SearchIcon />
                  </div>
                  {searchTerm3 && (
                    <div
                      className="search-icon si2"
                      style={{
                        zIndex: "100",
                        backgroundColor: "white",
                        right: "17px",
                      }}
                      onClick={() => setSearchTerm3("")}
                    >
                      <ClearIcon />
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="col-4">
              {" "}
              <div className="search-input-container mt-4 m-5">
                <select
                  className="SearchBox"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                >
                  <option value={""}>Select an Attribute</option>
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
                      right: "20px",
                    }}
                    onClick={() => setSelectedStatus("")}
                  >
                    <ClearIcon />
                  </div>
                )}
              </div>
            </div>
            <div className="col-3">
              {" "}
              <div className="search-input-container mt-4">
                <form>
                  <select
                    className="SearchBox"
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                  >
                    <option value="">Select Price Range</option>
                    <option value="1-100">$1 - $100</option>
                    <option value="100-1000">$100 - $1000</option>
                    <option value="1000-10000">$1000 - $10000</option>
                    <option value="10000-1000000">$10000 - $1000000</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="Product-Main-Section">
            <div className="container mt-3">
              <Navbar className="navbar bg-white mb-3 mx-1 py-1 rounded ">
                <div className="container-fluid Sales-section">
                  <h5 className="navbar-brand">Sales List</h5>
                </div>
              </Navbar>
              <div className="Inventory-TableSection">
                <table className="table table-striped table-hover">
                  <thead className="top-0 position-sticky z-1">
                    <tr>
                      <th scope="col" className="col-1">
                        No
                      </th>
                      <th scope="col" className="col-2">
                        Product SerialNo
                      </th>
                      <th scope="col" className="col-1">
                        Attribute
                      </th>
                      <th scope="col" className="col-1">
                        Value
                      </th>
                      <th scope="col" className="col-1">
                        Inventory
                      </th>
                      <th scope="col" className="col-1">
                        Price
                      </th>
                      <th scope="col" className="col-1">
                        Taxrate
                      </th>
                      <th scope="col" className="col-2">
                        Selling Price
                      </th>
                      <th scope="col" className="col-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSalesList.length > 0 ? (
                      filteredSalesList.map((data, i) => (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{data.product}</td>
                          <td>{data.attribute}</td>
                          <td>{data.value}</td>
                          <td>{data.inventory}</td>
                          <td>${data.price}</td>
                          <td>{data.taxrate}</td>
                          <td>
                            $
                            {(data.price * (1 + data.taxrate / 100)).toFixed(2)}
                          </td>
                          <td>
                            <IconButton
                              aria-label="view"
                              className="viewbutt"
                              onClick={() => inventoryViewModal(data)}
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="edit"
                              className="viewbutt"
                              onClick={() => inventoryStockModal(data)}
                            >
                              <LocalGroceryStoreIcon className="text-success" />
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
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9">No results found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <ToastContainer />
            </div>

            <ViewSalesModal
              show={showView}
              onHide={() => setShowView(false)}
              salesDetails={selectedInventory}
            />
            <SalesModal
              show={showView2}
              onHide={() => {
                setShowView2(false);
                setUpdateTrigger(!updateTrigger);
              }}
              salesDetails={selectedInventory}
            />
            <DeleteConfirmationModal
              show={confirmModalVisible}
              onHide={() => setConfirmModalVisible(false)}
              onConfirm={() => deleteInventoryModal(inventoryDelete)}
            />
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Sales;
