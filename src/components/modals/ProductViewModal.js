import React, { useState, useEffect } from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function BrandView(props) {
  const { show, onHide, productDetails } = props;
  const [productData, setProductData] = useState({
    products: [],
    inventory: [],
  });

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  async function fetchData() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/product");
      setProductData(result.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Header>
        <Modal.Title className="Modal-Title">Product View</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="d-flex row">
            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  SerialNo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={productDetails && productDetails.serialno}
                  readOnly
                />
              </div>
            </div>
            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={productDetails && productDetails.name}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="d-flex row">
            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Category
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={productDetails && productDetails.categories}
                  readOnly
                />
              </div>
            </div>
            <div className="col-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={productDetails && productDetails.brand}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="d-flex row">
            <div className="col-12">
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Product Description
                </label>
                <textarea
                  type="text"
                  id="inputAddAttribute-value"
                  className="form-control"
                  value={productDetails && productDetails.description}
                  required
                />
              </div>
            </div>
          </div>
          <hr/>
          <div className="d-flex row p-2">
            <h6>Product Attributes</h6>
            <div className="Product-TableSection">
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
                  </tr>
                </thead>
                <tbody>
                  {productDetails &&
                    productDetails.serialno &&
                    productData.inventory
                      .filter(
                        (data) => data.product === productDetails.serialno
                      )
                      .map((data, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{data.attribute}</td>
                          <td>{data.value}</td>
                          <td>${data.price}</td>
                          <td>{data.inventory}</td>
                          <td>{data.taxrate}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary"  onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BrandView;
