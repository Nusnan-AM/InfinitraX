import React from "react";
import Sidebar from "../layouts/Sidebar";
import DataTable from "react-data-table-component";
import { useState } from "react";

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
      selector: row => row.action,
      sortable: true
    }
  ];
  
  const data=[
    {
      no: 1,
      serialNo: 22,
      name: 'Thilini',
      category: 'laptops',
      brand: 'Asus',
      action: ',.../'
    },
    {
      no: 2,
      serialNo: 56,
      name: 'Nethma',
      category: 'keyboard',
      brand: 'hp',
      action: '......'
    },  
  ]
  const [records,setRecords] = useState(data);

  function handleFilter(event){
    const newData = data.filter(row=>{
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  return (
    <Sidebar>
      <div className='container mt-5'>
        <div className="text-start"><input type="text" placeholder="Filter by SerialNo" onChange={handleFilter}></input></div>
        <DataTable
          columns = {columns}
          data = {records}
          fixedHeader
          pagination >
        </DataTable>
      </div>
    </Sidebar>
  );
}

export default Product;
