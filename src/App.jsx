import { useState } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "./App.css";
import General from "./components/General";
import InfoContainer from "./components/infoContainer";

function App() {
  return (
    <>
      <div className="edit-info">
        <InfoContainer title="General Information">
          <General />
        </InfoContainer>

        <InfoContainer title="Educational Experience"></InfoContainer>

        <InfoContainer title="Previous Experience"></InfoContainer>
      </div>
    </>
  );
}

export default App;
