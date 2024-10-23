import "../styles/infoContainer.css";
import dropDown from "../images/drop-down.svg";
import { useState } from "react";

//controlled inputs?
//save input
function InfoContainer({
  title,
  children,
  editSection,
  isActive,
  index,
  setIsUpdated,
}) {
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
        <button
          onClick={() => setIsUpdated(index)}
          className={`update-button ${!isActive && "hidden"}`}
        >
          Update
        </button>
      }
    </div>
  );
}

export default InfoContainer;
