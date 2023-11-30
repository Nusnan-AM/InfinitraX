import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import { IoIosAddCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import AddAttribute from "../components/modals/AddAttribute";
import ViewAttribute from "../components/modals/ViewAttribute";
import EditAttribute from "../components/modals/EditAttribute";
import DeleteAttribute from "../components/modals/DeleteAttribute";
import "../styles/attributes.css";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Attributes() {
  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const addAttributeModal = () => {
    setShowAdd(!showAdd);
  };

  const viewAttributeModal = () => {
    setShowView(!showView);
  };

  const editAttributeModal = () => {
    setShowEdit(!showEdit);
  };

  const deleteAttributeModal = () => {
    setShowDelete(!showDelete);
  };

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
                {attributeTable.map((value, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{value?.attribute}</td>
                      <td>{value?.value}</td>
                      <td>
                        <IconButton
                          aria-label="delete"
                          className="viewbutt"
                          onClick={() => viewAttributeModal()}
                        >
                          <VisibilityIcon className="text-" />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          className="viewbutt"
                          onClick={() => editAttributeModal()}
                        >
                          <EditIcon className="text-success" />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          className="viewbutt"
                          onClick={() => deleteAttributeModal()}
                        >
                          <DeleteIcon className="text-danger" />
                        </IconButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
          <AddAttribute
            show={showAdd}
            onHide={() => addAttributeModal(false)}
          />
          <ViewAttribute
            show={showView}
            onHide={() => viewAttributeModal(false)}
          />
          <EditAttribute
            show={showEdit}
            onHide={() => editAttributeModal(false)}
          />
          <DeleteAttribute
            show={showDelete}
            onHide={() => deleteAttributeModal(false)}
          />
        </Sidebar>
      </div>
    </>
  );
}

export default Attributes;
