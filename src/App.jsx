import { useState } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import InfoContainer from "./components/infoContainer";

function App() {
  const [openSection, setOpenSection] = useState(-1);
  const [generalInputs, setGeneralInputs] = useState(Array(5));
  function editSection(index) {
    if (openSection == index) {
      setOpenSection(-1);
    } else setOpenSection(index);
  }

  function updateInputArray(sectionIndex, inputIndex, value) {
    const inputArrs = [generalInputs];
    const inputFunctions = [setGeneralInputs];
    const inputArr = inputArrs[sectionIndex];
    const inputFunc = inputFunctions[sectionIndex];
    inputArr[inputIndex] = value;
    inputFunc(inputArr);
  }
  return (
    <>
      <div className="edit-info">
        <InfoContainer
          title="General Information"
          editSection={editSection}
          index={0}
          isActive={openSection == 0}
        >
          <General
            updateInputArr={updateInputArray}
            inputValues={generalInputs}
          />
        </InfoContainer>

        <InfoContainer
          title="Educational Experience"
          editSection={editSection}
          index={1}
          isActive={openSection == 1}
        >
          <Education />
        </InfoContainer>

        <InfoContainer
          title="Previous Experience"
          editSection={editSection}
          index={2}
          isActive={openSection == 2}
        ></InfoContainer>
      </div>
    </>
  );
}

export default App;
