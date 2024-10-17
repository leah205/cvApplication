import "../styles/infoContainer.css";
import dropDown from "../images/drop-down.svg";

function InfoContainer({ title, children }) {
  console.log(children);
  return (
    <div className="info-container">
      <div className="header">
        <p>{title}</p>
        <button>
          <img src={dropDown} alt="edit" />
        </button>
      </div>
      <div className="form-container">{children}</div>
    </div>
  );
}

export default InfoContainer;
