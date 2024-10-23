import { useState } from "react";

function Input({ type, name, label, setData, data, initialValue = "", index }) {
  //dont do state for props im confused

  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
    if (!data[index]) {
      data[index] = {};
    }
    data[index][name] = e.target.value;
    setData(data);
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
