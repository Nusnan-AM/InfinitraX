import React from "react";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/attributes.css";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Attributes() {
  return (
    <Sidebar>
      <nav className="navbar mt-3 m-3 py-1 rounded">
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <span className="navbar-brand mb-0 h1 text-white">Attributes Section</span>
        </div>
      </nav>
      <div className="container mt-3">
        <nav className="navbar bg-white mb-3 mx-1 py-1 rounded">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold">Attribute List</a>
          </div>
        </nav>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-1">No</th>
              <th scope="col" className="col-1">Attribute</th>
              <th scope="col" className="col-1">Value</th>
              <th scope="col" className="col-1">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Color</td>
              <td>Grey</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Storage</td>
              <td>512 GB</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Display</td>
              <td>15 inch</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Color</td>
              <td>Black</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Storage</td>
              <td>2 TB</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Color</td>
              <td>White</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Display</td>
              <td>13.5 inch</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Color</td>
              <td>Gold</td>
              <td>
                <div className="d-flex">
                  <button className="btn h4">
                    <FaEye />
                  </button>
                  <button className="btn">
                    <FaEdit className="text-success h4" />
                  </button>
                  <button className="btn">
                    <MdDelete className="text-danger h4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
}

export default Attributes;
