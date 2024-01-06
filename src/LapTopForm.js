// src/LaptopForm.js
import React, { useState, useEffect } from "react";
import "./LapTopForm.css";
const LaptopForm = ({ onAddLaptop, onUpdateLaptop, editedLaptop }) => {
  const [laptopData, setLaptopData] = useState({
    name: "",
    price: "",
    brand: "",
    storage: "",
    RAM: "",
    processor: "",
  });

  useEffect(() => {
    // Set form data when editedLaptop changes (for update)
    if (editedLaptop) {
      setLaptopData(editedLaptop);
    } else {
      // If editedLaptop is null, reset the form data
      setLaptopData({
        name: "",
        price: "",
        brand: "",
        storage: "",
        RAM: "",
        processor: "",
      });
    }
  }, [editedLaptop]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLaptopData({ ...laptopData, [name]: value });
  };

  const handleAddOrUpdateLaptop = () => {
    // Check if all fields are filled before adding or updating the laptop
    for (const key in laptopData) {
      if (laptopData[key] === "") {
        alert("Please fill in all fields.");
        return;
      }
    }

    if (editedLaptop) {
      // Call the parent component's callback to update the laptop
      onUpdateLaptop(laptopData);
    } else {
      // Call the parent component's callback to add the laptop
      onAddLaptop(laptopData);
    }

    setLaptopData({
      name: "",
      price: "",
      brand: "",
      storage: "",
      RAM: "",
      processor: "",
    });
  };

  return (
    <div className='laptop-form-container'>
      <h2>{editedLaptop ? "Update Laptop" : "Add Laptop"}</h2>
      <form>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={laptopData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type='text'
            name='price'
            value={laptopData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Brand:
          <input
            type='text'
            name='brand'
            value={laptopData.brand}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Storage:
          <input
            type='text'
            name='storage'
            value={laptopData.storage}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          RAM:
          <input
            type='text'
            name='RAM'
            value={laptopData.RAM}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Processor:
          <input
            type='text'
            name='processor'
            value={laptopData.processor}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type='button' onClick={handleAddOrUpdateLaptop}>
          {editedLaptop ? "Update Laptop" : "Add Laptop"}
        </button>
      </form>
    </div>
  );
};

export default LaptopForm;
