import React from 'react';

const Form = ({ value, handleChange, handleSubmit }) => {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Form-input"
        placeholder="Insert Todo"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
