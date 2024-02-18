// NewForm.jsx
import React, { useState } from 'react';

const NewForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    id: '',
    shopify: '',
    date: '',
    customer: '',
    email: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      id: '',
      shopify: '',
      date: '',
      customer: '',
      email: '',
      country: '',
      orderType: '',

    });
    toggleForm(); // Close the form after submission
  };

  return (
    <form className="border rounded-md bg-white shadow-md p-4 w-[90%]">
      <h2 className="text-lg font-semibold mb-4">Add New Order</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" name="shopify" value={formData.shopify} onChange={handleChange} placeholder="Shopify" className="border border-gray-300 p-2 rounded-md" />
       
        <input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="Date" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Status" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" name="customer" value={formData.customer} onChange={handleChange} placeholder="Customer" className="border border-gray-300 p-2 rounded-md" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" 
        className="border border-gray-300 p-2 rounded-md" />
        <input type="text" name="shippingSource" value={formData.shippingSource} onChange={handleChange} placeholder="Shipping Source"
        className="border border-gray-300 p-2 rounded-md" />
        <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="OrderType" className="border border-gray-300 p-2 rounded-md" />
         </div>
      <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Submit</button>
    </form>
  );
};

export default NewForm;
