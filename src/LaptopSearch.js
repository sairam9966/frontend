// src/LaptopSearch.js
import React, { useState } from "react";
import "./LaptopSearch.css";
const LaptopSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    price: "",
    brand: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='searchdiv'>
      <label className='label'>
        Search By Name:
        <input
          type='text'
          name='name'
          value={searchQuery.name}
          onChange={handleInputChange}
        />
      </label>
      <label className='label'>
        Search By Price:
        <input
          type='text'
          name='price'
          value={searchQuery.price}
          onChange={handleInputChange}
        />
      </label>
      <label className='label'>
        Search By Brand:
        <input
          type='text'
          name='brand'
          value={searchQuery.brand}
          onChange={handleInputChange}
        />
      </label>
      <button type='button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default LaptopSearch;
