// src/components/ui/button.js
import React from 'react';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-8 py-2 rounded-full font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
