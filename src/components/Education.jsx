import "../styles/Education.css";
import { useState } from "react";

function EducationSection({ education }) {
  <div className="input">
    <label htmlFor="school">School: </label>
    <input type="text" id="school" value={education.school} />
  </div>;
}

function Education() {
  const [educations, setEducations] = useState([
    {
      school: "",
      degree: "",
      major: "",
      grad_date: "",
      key: crypto.randomUUID(),
    },
  ]);
  function createEducation() {
    setEducations([
      ...educations,
      {
        school: "",
        degree: "",
        major: "",
        grad_date: "",
        key: crypto.randomUUID(),
      },
    ]);
  }
  /* return (
    <>
      {educations.map((education) => {
        return <Input type="text" key={education.key} />;
      })}
      <button className="add-education" onclick={createEducation}>
        Add Education
      </button>
    </>
  );*/
}
export default Education;
