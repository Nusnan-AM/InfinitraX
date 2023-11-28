import React from "react";
import Sidebar from "../layouts/Sidebar";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

function Attributes() {
  return (
    <>
      <Sidebar>
        <nav className="navbar mt-3 m-3 py-1 rounded">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <span className="navbar-brand mb-0 h1 text-white">Attributes Section</span>
          </div>
        </nav>
        <div>
          <div className="container px-3">
            <div className="row">
              <div className="col mx-3 p-2 rounded bg-white">
                <div className="row">
                  <div className="col">
                    <span className="fw-bold">Filter by</span>
                  </div>
                  <div className="col">
                    <select id="selectFilterByAttribute" class="form-select">
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
                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addAttribute">
                      Add Attribute <IoIosAddCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
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
                    <button className="btn h4" data-bs-toggle="modal" data-bs-target="#viewAttribute">
                      <FaEye />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#editAttribute">
                      <FaEdit className="text-success h4" />
                    </button>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteAttribute">
                      <MdDelete className="text-danger h4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Sidebar>

      <div class="modal fade" id="addAttribute" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="viewAttributeLabel">View attributes</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-white">
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="inputAddAttribute-attribute">Attribute</label>
                <select id="selectAddAttribute-attribute" class="form-select">
                  <option selected>--Select an Attribute--</option>
                  <option>Color</option>
                  <option>Storage</option>
                  <option>Display</option>
                </select>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="inputAddAttribute-value">Value</label>
                <input type="text" id="inputViewAttribute-value" class="form-control" readOnly />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="viewAttribute" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="viewAttributeLabel">View attributes</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-white">
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="inputViewAttribute-attribute">Attribute</label>
                <input type="text" id="inputViewAttribute-attribute" class="form-control" readOnly />
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="inputViewAttribute-value">Value</label>
                <input type="text" id="inputViewAttribute-value" class="form-control" readOnly />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-bs-dismiss="modal">Done</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="editAttribute" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="editAttributeLabel">Edit attributes</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div class="modal-body text-white">
                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label" for="attribute">Attribute</label>
                  <select id="selectEditAttribute-attribute" class="form-select">
                    <option selected>--Select an Attribute--</option>
                    <option>Color</option>
                    <option>Storage</option>
                    <option>Display</option>
                  </select>
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label" for="value">Value</label>
                  <input type="text" id="inputEditAttribute-value" class="form-control" required />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success">Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="modal fade" id="deleteAttribute" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="deleteAttributeLabel">Delete attributes</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div class="modal-body text-white">
                <p>
                  Are you sure you want to delete this item?
                </p>
                <p>
                  This action is not reversable.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-danger">Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attributes;
