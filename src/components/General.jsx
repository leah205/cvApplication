import "../styles/general.css";

function General() {
  return (
    <>
      <div className="input">
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" />
      </div>
      <div className="input">
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" />
      </div>

      <div className="input">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />
      </div>

      <div className="input">
        <label htmlFor="phone-number">Phone Number: </label>
        <input type="tel" id="phone-number" />
      </div>

      <div className="input">
        <label htmlFor="address">Adress: </label>
        <input type="text" id="address" />
      </div>
    </>
  );
}

export default General;
