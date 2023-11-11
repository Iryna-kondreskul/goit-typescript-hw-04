import React, { useState, ChangeEvent } from 'react';

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (even: ChangeEvent<HTMLInputElement>) => {
   // event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
