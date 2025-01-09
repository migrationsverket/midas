import React, { useState } from 'react';

interface TextFieldProps {
  label: string;
  onValueChange: (value: string, isValid: boolean) => void; // Callback to send value and validity
}

const TextFields: React.FC<TextFieldProps> = ({ label, onValueChange }) => {
  const [value, setValue] = useState<string>(''); // To store the text field value

  // Handle text change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const isValid = inputValue.trim() !== ''; // Check if the value is not empty
    onValueChange(inputValue, isValid); // Send value and validity to the parent
  };

  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter text here"
        />
      </label>
    </div>
  );
};

export default TextFields;
