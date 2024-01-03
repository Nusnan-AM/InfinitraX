import React from "react";
import { useState } from "react";
import "../../App.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inventory } from "@mui/icons-material";


function AddSales(props) {
  const { show, onHide ,inventoryDetails} = props;
  const [serialno, setSerialno] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");
  const [product, setProduct] = useState("");
  const [stock, setStock] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);


  const id=inventoryDetails && inventoryDetails.id;

  const updatedStock = parseInt(stock) - parseInt(quantity);

  const resetForm = () => {
    setProduct("");
    setQuantity("");
    setValue("");
    setProduct("");
  };

  async function AddSalesmodel(event) {
    event.preventDefault();
    if (serialno.length === 0) {
      toast.warning("Fill the Serial No Field");
    } else if (product.length === 0) {
      toast.warning("Fill the Product Field");
    }else if (value.length === 0) {
      toast.warning("Fill the value Field");
    }  else if (quantity.length === 0) {
      toast.warning("Fill the Quantity Field");
    } else {
      try {
        await axios.post("http://127.0.0.1:8000/sales", {
          serialno:serialno,
          product: product,
          value: value,
          Inventory: updatedStock,
        });
        toast.success("Sales added Succesfully");
        resetForm();
        setUpdateTrigger(!updateTrigger);
      } catch (err) {
        toast.error("Sales added Failed");
      }
    }
  }

  return (
    <>
      <div className="d-flex mb-4 Category-AddedSection">
          <div className="col-6">
            <h5>Add Sales</h5>
          </div>
        </div>
        <div>
            <div className="modal-body">
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                Serial No
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setSerialno(e.target.value)}
                  value={serialno}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                  Product Name
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setProduct(e.target.value)}
                  value={product}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                  value
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddSales-value">
                 Quantity 
                </label>
                <input
                  type="text"
                  id="inputAddSales-value"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  required
                />
              </div>
            </div>
          </div>

   
          <Button variant="success" onClick={AddSalesmodel}>
            Add Sales
          </Button>
          <Button variant="secondary" onClick={resetForm}>
            Reset
          </Button>
        
    </>
  );
}

export default AddSales;
