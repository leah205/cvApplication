import "../styles/infoContainer.css";
import dropDown from "../images/drop-down.svg";
//perhaps changing onclick function by moving it to app?
//also add to editSection when it is already active
function InfoContainer({ title, children, editSection, isActive }) {
  if (!isActive) children = null;
  return (
    <div className="info-container">
      <div className="header">
        <p>{title}</p>
        <button>
          <img src={dropDown} alt="edit" onClick={() => editSection(1)} />
        </button>
      </div>
      <div className="form-container">{children}</div>
      {isActive && <button className="update-button">Update</button>}
    </div>
  );
}

export default InfoContainer;
