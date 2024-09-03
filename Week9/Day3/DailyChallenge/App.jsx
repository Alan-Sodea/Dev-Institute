// App.js
import React, { useState } from 'react';
import FormComponent from './FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(formData).toString();
    window.location.href = `http://localhost:3000/?${query}`;
  };

  return (
    <div className="App">
      <FormComponent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
