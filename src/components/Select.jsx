function Select({ options, label, name }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        {options.map((option) => {
          return <option key={option.key}>{option.value}</option>;
        })}
      </select>
    </>
  );
}

export default Select;
