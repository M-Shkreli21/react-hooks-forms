import React from 'react';

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

//FORM ELEMENT TYPES:
//For <input>, <textarea> and <select>, we use value
//FOr a <input type='checkbox'> we use checked.
