import { useState } from "react";

function Input({
  type,
  name,
  label,
  updateInputs,
  sectionIndex,
  index,
  initialValue = "",
}) {
  //dont do state for props im confused

  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
    //updateInputs(sectionIndex, index, e.target.value);
  }
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}

export default Input;
