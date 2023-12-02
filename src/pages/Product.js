import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';


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
            <FontAwesomeIcon icon={faEye} className="me-2" title="View" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faEdit} className="me-2" title="Edit" />
          </Link>
          <FontAwesomeIcon icon={faTrash} className="text-danger" title="Delete" onClick={() => (row.no)} style={{ cursor: 'pointer' }} />
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
         <div className="container mt-3 d-flex justify-content-center content-bg-info">
          <div className='container mt-3'>
          <div className="container mt-3 d-flex justify-content-center">
            <h3>Products Section</h3>
          </div>  
            <div id="filter" className="d-flex justify-content-around text-bg-info p-3">
              <input type="text" placeholder="Filter by SerialNo" name="serialNo" onChange={handleFilter} />
                <select name="category" onChange={handleFilter}>
                    <option value="">Filter by Category</option> 
                    <option value="laptops">Laptops</option>
                    <option value="keyboard">Keyboard</option>
                  </select>
                  <select name="brand" onChange={handleFilter}>
                    <option value="">Filter by Brand</option>
                    <option value="Asus">Asus</option>
                    <option value="hp">HP</option>
                  </select>
              </div>
         <div className='container mt-5 justify-content-center'>
           <div className='text-end' onClick={() => {setShowDataTable(false)}}>
               <button className="btn btn-success ms-2">Add Product</button>
           </div>
         </div>
         <div className='container mt-3'>
         <DataTable columns={columns} data={records} fixedHeader pagination />
         </div>
         </div>
       </div>
       :
         <div className="container mt-3 content-bg-info">
           <h3>Add Product Section</h3>
           <div>
           <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product SerialNo</Form.Label>
              <Form.Control type="number" placeholder="Product SerialNo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Product Name" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Product image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Select Product Category</option>
              <option value="1">Laptops</option>
              <option value="2">Mouse</option>
              <option value="3">Keyboard</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>Select the Brand</option>
              <option value="1">Asus</option>
              <option value="2">Hp</option>
              <option value="3">Dell</option>
            </Form.Select>
        </Form>
           </div>
         </div> 
         
       }      
    </Sidebar>
  );
}

export default Product;
