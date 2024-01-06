// src/App.js
import React, { useState } from "react";
import LaptopForm from "./LapTopForm";
import LaptopSearch from "./LaptopSearch";
import "./App.css";

const App = () => {
  const [laptops, setLaptops] = useState([]);
  const [editedLaptop, setEditedLaptop] = useState(null);
  const [filteredLaptops, setFilteredLaptops] = useState([]);

  const handleAddLaptop = newLaptop => {
    setLaptops([...laptops, { ...newLaptop, id: laptops.length + 1 }]);
  };

  const handleUpdateLaptop = updatedLaptop => {
    const updatedLaptops = laptops.map(laptop =>
      laptop.id === updatedLaptop.id ? updatedLaptop : laptop
    );
    setLaptops(updatedLaptops);
    setEditedLaptop(null);
    setFilteredLaptops([]);
  };

  const handleDeleteLaptop = id => {
    const updatedLaptops = laptops.filter(laptop => laptop.id !== id);
    setLaptops(updatedLaptops);
    setEditedLaptop(null);
    setFilteredLaptops([]);
  };

  const handleSearch = searchQuery => {
    const filtered = laptops.filter(laptop => {
      return (
        laptop.name.toLowerCase().includes(searchQuery.name.toLowerCase()) &&
        laptop.price.toString().includes(searchQuery.price) &&
        laptop.brand.toLowerCase().includes(searchQuery.brand.toLowerCase())
      );
    });

    setFilteredLaptops(filtered);
  };

  return (
    <div className='app-container'>
      <h1>Welcome To Laptop Store</h1>
      <h1>Laptop Store</h1>
      <LaptopForm
        onAddLaptop={handleAddLaptop}
        onUpdateLaptop={handleUpdateLaptop}
        editedLaptop={editedLaptop}
      />
      <h1>Laptop List</h1>
      <LaptopSearch onSearch={handleSearch} />
      <table className='laptops-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Storage</th>
            <th>RAM</th>
            <th>Processor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLaptops.length > 0
            ? filteredLaptops.map(laptop => (
                <tr key={laptop.id}>
                  <td>{laptop.id}</td>
                  <td>{laptop.name}</td>
                  <td>${laptop.price}</td>
                  <td>{laptop.brand}</td>
                  <td>{laptop.storage}</td>
                  <td>{laptop.RAM}</td>
                  <td>{laptop.processor}</td>
                  <td>
                    <button onClick={() => setEditedLaptop(laptop)}>
                      Update
                    </button>
                    <button onClick={() => handleDeleteLaptop(laptop.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : laptops.map(laptop => (
                <tr key={laptop.id}>
                  <td>{laptop.id}</td>
                  <td>{laptop.name}</td>
                  <td>${laptop.price}</td>
                  <td>{laptop.brand}</td>
                  <td>{laptop.storage}</td>
                  <td>{laptop.RAM}</td>
                  <td>{laptop.processor}</td>
                  <td>
                    <button onClick={() => setEditedLaptop(laptop)}>
                      Update
                    </button>
                    <button onClick={() => handleDeleteLaptop(laptop.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
