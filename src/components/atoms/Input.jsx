import React from 'react';
import '../../styles/atoms/input.css';

function Input({ type = 'text',id, placeholder, name, value, onChange, required = false }) {
  return (
    <input
      type={type}
      id={id} // ← add
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="custom-input"
    />
  );
}

export default Input;
