import { useState } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import WorkExperience from "./components/Work_Experience";
import InfoContainer from "./components/infoContainer";
import Resume from "./components/Resume";
//change job description to text area
//do required stuff
//add highschool
//add text area
function App() {
  const [openSection, setOpenSection] = useState(-1);
  const [generalInputs, setGeneralInputs] = useState();
  const [educationInputs, setEducationInputs] = useState();
  const [jobInputs, setJobInputs] = useState();
  const [isUpdated, setIsUpdated] = useState(-1);

  function editSection(index) {
    if (openSection == index) {
      setOpenSection(-1);
    } else setOpenSection(index);
  }

  function performUpdate(data, setFunc) {
    setFunc(data);
    setIsUpdated(-1);
    console.log(data);
  }

  function updateInputArray(sectionIndex) {
    // const inputArrs = [generalInputs, educationInputs, jobInputs];
    const inputFunctions = [setGeneralInputs, setEducationInputs, setJobInputs];
    // const inputArr = inputArrs[sectionIndex];
    const inputFunc = inputFunctions[sectionIndex];

    //inputArr[inputIndex] = value;
    // inputFunc(inputArr);
  }

  return (
    <>
      <div className="edit-info">
        <InfoContainer
          title="General Information"
          editSection={editSection}
          index={0}
          isActive={openSection == 0}
          setIsUpdated={setIsUpdated}
        >
          <General
            needsUpdate={isUpdated == 0}
            performUpdate={performUpdate}
            inputValues={generalInputs}
            setFunc={setGeneralInputs}
          />
        </InfoContainer>

        <InfoContainer
          title="Educational Experience"
          editSection={editSection}
          index={1}
          isActive={openSection == 1}
          setIsUpdated={setIsUpdated}
        >
          <Education
            performUpdate={performUpdate}
            needsUpdate={isUpdated == 1}
            setFunc={setEducationInputs}
          />
        </InfoContainer>

        <InfoContainer
          title="Previous Experience"
          editSection={editSection}
          index={2}
          isActive={openSection == 2}
          setIsUpdated={setIsUpdated}
        >
          <WorkExperience
            performUpdate={performUpdate}
            needsUpdate={isUpdated == 2}
            setFunc={setJobInputs}
          />
        </InfoContainer>
      </div>
      <div className="resume-container">
        <Resume
          generalInputs={generalInputs}
          educationInputs={educationInputs}
          jobInputs={jobInputs}
        />
      </div>
    </>
  );
}

export default App;
