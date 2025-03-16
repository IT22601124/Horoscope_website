// src/components/ui/input.js
import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`p-3 border border-gray-300 rounded-lg text-gray-700 ${className}`}
    />
  );
};

export default Input;
