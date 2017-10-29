import React from 'react';

const Form = () => {
  return (
    <form className="Form" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        className="Form-input"
        placeholder="Insert Todo"
        onChange={e => console.log('yara')}
      />
    </form>
  );
};

export default Form;
