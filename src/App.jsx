import { useState } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "./App.css";
import General from "./components/General";
import InfoContainer from "./components/infoContainer";

function App() {
  const [openSection, setOpenSection] = useState(0);
  function editSection(index) {
    console.log("hello");
    setOpenSection(index);
  }
  return (
    <>
      <div className="edit-info">
        <InfoContainer
          title="General Information"
          editSection={editSection}
          index={1}
          isActive={openSection == 1}
        >
          <General />
        </InfoContainer>

        <InfoContainer
          title="Educational Experience"
          editSection={editSection}
          index={2}
          isActive={openSection == 2}
        ></InfoContainer>

        <InfoContainer
          title="Previous Experience"
          editSection={editSection}
          index={3}
          isActive={openSection == 3}
        ></InfoContainer>
      </div>
    </>
  );
}

export default App;
