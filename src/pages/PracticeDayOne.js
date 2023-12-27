import React, { useState } from "react";
import { data } from "../practice/data";

const PracticeDayOne = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //console.log(data);
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <form className="form-inline">
          <input
            className="form-control mr-sm-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event)=>setSearchTerm(event.target.value)}
          />
        </form>
      </nav>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return searchTerm === ""
                ? item
                : item.first_name.toLowerCase().includes(searchTerm);
            })
            .map((item) => (
              <tr key={item.id} className="table-primary">
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
    </div>
  );
};

export default PracticeDayOne;
