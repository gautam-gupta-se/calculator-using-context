import React, { useState } from 'react';
import { data } from "../practice/data";

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [tableData, setTableData] = useState(data);
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

// Function to handle sorting
const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    
    // Use a temporary array to avoid mutating the original data
    const sortedData = [...data];
  
    // Sorting logic based on the field and direction
    sortedData.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
  
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
      } else {
        return bValue.localeCompare(aValue, undefined, { sensitivity: 'base' });
      }
    });
  
    // Update the data array with the sorted data
    //setData(sortedData);
    setTableData(sortedData);
  };
  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th onClick={() => handleSort('first_name')}>First Name</th>
            <th onClick={() => handleSort('last_name')}>Last Name</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('gender')}>Gender</th>
            <th onClick={() => handleSort('phone_number')}>Phone Number</th>
            <th onClick={() => handleSort('address')}>Address</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.phone_number}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableComponent;
