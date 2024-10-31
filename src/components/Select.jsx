function Select({ options, label, name, setData, data, index }) {
  function handleChange(e) {
    data[index][name] = e.target.options[e.target.selectedIndex].value;
    console.log(data);
    setData(data);
  }
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={(e) => handleChange(e)}>
        <option value="">Pick an Education:</option>
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
