import "../styles/infoContainer.css";
import dropDown from "../images/drop-down.svg";

//controlled inputs?
//save input
function InfoContainer({ title, children, editSection, isActive, index }) {
  if (!isActive) {
  }
  return (
    <div className="info-container">
      <div className="header">
        <p>{title}</p>
        <button>
          <img src={dropDown} alt="edit" onClick={() => editSection(index)} />
        </button>
      </div>
      <div className={`form-container ${!isActive && "hidden"}`}>
        {children}
      </div>
      {
        <button className={`update-button ${!isActive && "hidden"}`}>
          Update
        </button>
      }
    </div>
  );
}

export default InfoContainer;
