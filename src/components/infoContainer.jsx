import "../styles/infoContainer.css";
import dropDown from "../images/drop-down.svg";

//controlled inputs?
//save input
function InfoContainer({ title, children, editSection, isActive, index }) {
  return (
    <div className="info-container">
      <div className="header">
        <p>{title}</p>
        <button>
          <img src={dropDown} alt="edit" onClick={() => editSection(index)} />
        </button>
      </div>
      <div className="form-container">{isActive && children}</div>
      {isActive && <button className="update-button">Update</button>}
    </div>
  );
}

export default InfoContainer;
