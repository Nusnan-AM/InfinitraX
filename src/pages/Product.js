import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom"; 
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from "react-bootstrap";



const Product =() =>{
  const[showDataTable,setShowDataTable] = useState(true);

  const columns = [
    {
      name: 'No',
      selector: row => row.no,
      sortable: true
    },
    {
      name: 'SerialNo',
      selector: row => row.serialNo,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true
    },
    {
      name: 'Brand',
      selector: row => row.brand,
      sortable: true
    },
    {
      name: 'Action',
      cell: row => (
        <>
          <Link >
            <VisibilityIcon  className="me-2" title="View" />
          </Link>
          <Link>
            <EditIcon className="me-2" title="Edit" />
          </Link>
          <DeleteIcon className="text-danger" title="Delete" onClick={() => (row.no)} style={{ cursor: 'pointer' }} />
        </>
      )
    }
  ];

  const data = [
    {
      no: 1,
      serialNo: 22,
      name: 'Thilini',
      category: 'laptops',
      brand: 'Asus',
      action: ''
    },
    {
      no: 2,
      serialNo: 56,
      name: 'Nethma',
      category: 'keyboard',
      brand: 'hp',
      action: ''
    },
    {
      no: 3,
      serialNo: 34,
      name: 'Powsi',
      category: 'mouse',
      brand: 'asus',
      action: ''
    },
    {
      no: 4,
      serialNo: 11,
      name: 'Nusnan',
      category: 'monitor',
      brand: 'dell',
      action: ''
    }
    
  ];

  const [records, setRecords] = useState(data);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');


  function handleFilter(event) {
    const { name, value } = event.target;

    if (name === 'serialNo') {
      const newData = data.filter(row => {
        return String(row.serialNo).toLowerCase().includes(value.toLowerCase());
      });
      setRecords(newData);
    } else if (name === 'category') {
      setCategoryFilter(value);
      applyFilters(value, brandFilter);
    } else if (name === 'brand') {
      setBrandFilter(value);
      applyFilters(categoryFilter, value);
    }
  }

  function applyFilters(category, brand) {
    const newData = data.filter(row => {
      const categoryMatch = category === '' || row.category.toLowerCase() === category.toLowerCase();
      const brandMatch = brand === '' || row.brand.toLowerCase() === brand.toLowerCase();
      return categoryMatch && brandMatch;
    });
    setRecords(newData);
  }
  return (
    <Sidebar>
        {showDataTable ? 
        
         <div className="container d-flex justify-content-center content-bg-light">
          <div className='container'>
          <nav className="navbar mt-3 py-1 mb-3 rounded">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <span className="navbar-brand mb-0 h1 text-white">
              Products Section
            </span>
          </div>
        </nav>
            <div id="filter" className="d-flex flex-column bg-white pt-1 ps-1">
            <h6>Filter By</h6>
            <div className="d-flex justify-content-around align-content-center p-2 ">
            <Form.Control className="w-25" type="text" placeholder="Filter by SerialNo" name="serialNo" onChange={handleFilter} />
            <Form.Select size="sm" aria-label="Default select example" className="w-25"  name="category" onChange={handleFilter}>
            <option value="" >Filter by Category</option> 
                  <option value="laptops">Laptops</option>
                  <option value="keyboard">Keyboard</option>
            </Form.Select>

            <Form.Select size="sm" aria-label="select example" className="w-25"  name="brand" onChange={handleFilter}>
            <option value="">Filter by Brand</option>
                  <option value="Asus">Asus</option>
                  <option value="hp">HP</option>
            </Form.Select>
            </div>
              </div>
         <div className='my-2 justify-content-center bg-white pt-1 ps-1'>
         <h6>Product List</h6>
           <div className='text-end p-3 ' onClick={() => {setShowDataTable(false)}}>
               <button className="btn btn-sm text-sm btn-success ms-2">Add Product<AddCircleIcon /></button>
           </div>
         </div>
         <div className='mt-3'>
         <DataTable columns={columns} data={records} fixedHeader pagination />
         </div>
         </div>
       </div>
       :
       
         <div className="container mt-3 content-bg-info">
          <div className=" my-3 bg-dark p-2 rounded text-white d-flex justify-content-center">
          <span className="navbar-brand mb-0 h1 text-white">
              Add Product Section
            </span>
          </div>  
           <h5>Add Product</h5>
           <div>
            <Form>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product SerialNo</Form.Label>
              <Form.Control type="number" placeholder="Product SerialNo" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Product image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            </Col>
            </Row>

            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Product Name" />
            </Form.Group>
              </Col>
              
            <Col>
            
            <Form.Label>Product Category</Form.Label>
            <Form.Select aria-label="Default select example"> 
              <option>Select Product Category</option>
              <option value="1">Laptops</option>
              <option value="2">Mouse</option>
              <option value="3">Keyboard</option>
            </Form.Select>
            </Col>
            
            <Col>
            <Form.Label>Product Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select the Brand</option>
              <option value="1">Asus</option>
              <option value="2">Hp</option>
              <option value="3">Dell</option>
            </Form.Select>
            </Col>
            
          </Row>
               
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
           
           </div>
         </div> 
         
       }      
    </Sidebar>
  );
}

export default Product;
