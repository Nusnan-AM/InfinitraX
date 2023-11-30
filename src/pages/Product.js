import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


function Product() {
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
          <Link to={`/view-product/${row.no}`}>
            <FontAwesomeIcon icon={faEye} className="me-2" title="View" />
          </Link>
          <Link to={`/edit-product/${row.no}`}>
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
      <div className='container mt-5'>
        <div className="text-start ">
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
        <div className='container mt-5'>
          <div className='text-end'>
            <Link to="/add-product">
              <button className="btn btn-success ms-2">Add Product</button>
            </Link>
          </div>
        </div>
        <DataTable columns={columns} data={records} fixedHeader pagination />
      </div>
    </Sidebar>
  );
}

export default Product;
