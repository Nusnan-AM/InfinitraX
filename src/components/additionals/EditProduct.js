import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateConfirmationModal from "../modals/confirmationmodal/UpdateConfirmationModal";
import DeleteConfirmationModal from "../modals/confirmationmodal/DeleteConfirmDouble";
import UpdateAttributeProduct from "./UpdateAttributeProduct";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditAttributeTabledata from "./EditAttributeTableData";

function EditProduct(props) {
  const { show, onHide, productDetails } = props;
  const [datas, setDatas] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [id, setId] = useState("");
  const [serialno, setSerialno] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [productData, setProductData] = useState({
    products: [],
    inventory: [],
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateConfirmModal, setShowUpdateConfirmModal] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [showAttributeEditModal, setShowAttributeEditModal] = useState(false);
  const [selectedAttributeIndex, setSelectedAttributeIndex] = useState(null);
  const [editedAttribute, setEditedAttribute] = useState({
    attribute: "",
    value: "",
    price: "",
    inventory: "",
    taxrate: "",
  });

  const handleEdit = (index) => {
    setSelectedAttributeIndex(index);
    setEditedAttribute(datas[index]);
    setShowAttributeEditModal(true);
  };

  const handleAttributeEditConfirmed = () => {
    const updatedDatas = [...datas];
    updatedDatas[selectedAttributeIndex] = editedAttribute;
    setDatas(updatedDatas);
    setShowAttributeEditModal(false);
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  useEffect(() => {
    (async () => await fetchData2())();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/category");
      const activeCategories = response.data.filter(
        (category) => category.status === "Active"
      );
      setcategoryList(activeCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function fetchData2() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/brand");
      const activeBrand = response.data.filter(
        (brand) => brand.status === "Active"
      );
      setbrandList(activeBrand);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    (async () => await fetchData3())();
  }, []);

  async function fetchData3() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/product");
      setProductData(result.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  const addAttributeModal = () => {
    setShowAdd(!showAdd);
    fetchData();
  };

  const addAttribute = (attribute) => {
    setDatas([...datas, attribute]);
  };

  useEffect(() => {
    if (productDetails) {
      setSerialno(productDetails.serialno);
      setName(productDetails.name);
      setCategory(productDetails.categories);
      setBrand(productDetails.brand);
      setDescription(productDetails.description);
      setId(productDetails.id);
      setDatas(
        productData.inventory.filter(
          (data) => data.product === productDetails.serialno
        )
      );
    }
  }, [productDetails]);

  const handleDelete = (e) => {
    setShowConfirmModal(true);
  };

  async function handleConfirmed(e) {
    e.preventDefault();
    try {
      await axios
        .delete(`http://127.0.0.1:8000/product/${id}`)
        .then((response) => {
          toast.success("Product deleted successfully");
          onHide();
        });
    } catch (error) {
      alert("Product Delete Failed");
      console.error(error);
    }
    setShowConfirmModal(false);
  }

  const handleUpdate = (e) => {
    setShowUpdateConfirmModal(true);
  };

  async function handleUpdateConfirmed(e) {
    e.preventDefault();
    setShowUpdateConfirmModal(false);
    if (!serialno || !name || !category || !brand || !description) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const updatedProduct = {
        serialno: serialno,
        name: name,
        categories: category,
        brand: brand,
        description: description,
        inventory: datas,
      };
      await axios
        .put(`http://127.0.0.1:8000/product/${id}`, updatedProduct)
        .then((response) => {
          toast.success("Product Updated successfully");
          onHide();
          fetchData3();
        });
    } catch (error) {
      toast.error("Product Update Failed");
      console.error(error);
    }
  }

  const handleDelete2 = (index) => {
    const updatedDatas = [...datas];
    updatedDatas.splice(index, 1);
    setDatas(updatedDatas);
  };
  return (
    <>
      <Modal show={show} onHide={onHide} centered backdrop="static" size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="Modal-Title">Product Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div>
              <div className="container mb-2 AddProduct-Form-section">
                <div className="row mb-2">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form-outline mb-2">
                      <label
                        className="form-label"
                        htmlFor="inputAddAttribute-value"
                      >
                        Product SerialNo
                      </label>
                      <input
                        type="text"
                        id="inputAddAttribute-value"
                        className="form-control"
                        onChange={(e) => setSerialno(e.target.value)}
                        value={serialno}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form-outline mb-2">
                      <label
                        className="form-label"
                        htmlFor="inputAddAttribute-value"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="inputAddAttribute-value"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form-outline mb-2">
                      <label
                        className="form-label"
                        htmlFor="inputAddAttribute-value"
                      >
                        Product Category
                      </label>
                      <select
                        id="selectAddAttribute-attribute"
                        className="form-select"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      >
                        <option value={""}>--Select the Category--</option>
                        {categoryList.map((category) => (
                          <option key={category.id} value={category.categories}>
                            {category.categories}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form-outline mb-2">
                      <label
                        className="form-label"
                        htmlFor="inputAddAttribute-value"
                      >
                        Product Brand
                      </label>
                      <select
                        id="selectAddAttribute-attribute"
                        className="form-select"
                        onChange={(e) => setBrand(e.target.value)}
                        value={brand}
                      >
                        <option>--Select the Brand--</option>
                        {brandList.map((brand) => (
                          <option key={brand.id} value={brand.brand}>
                            {brand.brand}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-12">
                    <div className="form-outline mb-2">
                      <label
                        className="form-label"
                        htmlFor="inputAddAttribute-value"
                      >
                        Product Description
                      </label>
                      <textarea
                        type="text"
                        id="inputAddAttribute-value"
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-2 Product-AddedSection">
                <div className="col-6">
                  <h5>AttributeList</h5>
                </div>
                <div className="col-6 d-flex AddAttribute-Button-Section p-4">
                  <button
                    className="d-flex gap-1 btn btn-success"
                    onClick={addAttributeModal}
                  >
                    Add Attribute
                    <AddCircleIcon />
                  </button>
                </div>
              </div>

              <div className="Category-TableSection">
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
                        Price
                      </th>
                      <th scope="col" className="col-1">
                        Inventory
                      </th>
                      <th scope="col" className="col-1">
                        Taxrate
                      </th>
                      <th scope="col" className="col-1">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datas.map((data, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.attribute}</td>
                        <td>{data.value}</td>
                        <td>{data.price}</td>
                        <td>{data.inventory}</td>
                        <td>{data.taxrate}</td>
                        <td className="col-2">
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => handleEdit(index)}
                          >
                            <EditIcon className="text-success" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            className="viewbutt"
                            onClick={() => handleDelete2(index)}
                          >
                            <DeleteIcon className="text-danger" />
                          </IconButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <UpdateAttributeProduct
              show={showAdd}
              onHide={() => {
                addAttributeModal(false);
                setUpdateTrigger(!updateTrigger);
              }}
              addAttribute={addAttribute}
              serialno={serialno}
            />
            <ToastContainer />
          </>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <UpdateConfirmationModal
            show={showUpdateConfirmModal}
            onHide={() => setShowUpdateConfirmModal(false)}
            onConfirm={handleUpdateConfirmed}
          />
          <DeleteConfirmationModal
            show={showConfirmModal}
            onHide={() => setShowConfirmModal(false)}
            onConfirm={handleConfirmed}
          />
          <EditAttributeTabledata
            show={showAttributeEditModal}
            onHide={() => setShowAttributeEditModal(false)}
            editedAttribute={editedAttribute}
            setEditedAttribute={setEditedAttribute}
            onConfirm={handleAttributeEditConfirmed}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
