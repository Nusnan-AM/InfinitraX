import React,{useState} from 'react'
import Sidebar from "../layouts/Sidebar";
import {Navbar} from "react-bootstrap";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "react-bootstrap/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


function Sales() {
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
  const SalesTable = [
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
    {
      product:"Head Phone",
      quantity: "3",
      value: "Grey",
      price:"1500.00",
    },
  ]; 
  return (
    <>
      <Sidebar>
      <div>
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
                        >
                          <option>Filter by Sales</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col mx-3 p-2 rounded bg-white">
                    <div className="row">
                      <div className="col">
                        <span className="fw-bold">Add Sales</span>
                      </div>
                      <div className="col">
                        <Button
                            variant="success"
                            onClick={handleShowAdd}
                        >
                          Add Sales <AddCircleIcon/>
                        </Button>
                      </div>
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
              <table className="table table-striped table-hover">
                <thead>
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
                {
                  SalesTable.map((value, i)=>{
                    return(
                  <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{value?.product}</td>
                  <td>{value?.quantity}</td>
                  <td>{value?.value}</td>
                  <td>{value?.price}</td>
                  <td>
                  <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <VisibilityIcon className="text-" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <EditIcon className="text-success" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className="viewbutt"
                            >
                              <DeleteIcon className="text-danger" />
                            </IconButton>
                  </td>
                </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </div>

      </Sidebar>
    </>
  )
}

export default Sales