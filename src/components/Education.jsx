import "../styles/Education.css";
import { useState } from "react";
import Input from "./input";
import Select from "./Select";

const inputs = [
  {
    name: "school",
    label: "School:",
    type: "text",
    key: crypto.randomUUID(),
  },
  {
    name: "study_area",
    label: "Area of Study:",
    type: "text",
    key: crypto.randomUUID(),
  },
  {
    name: "start_date",
    label: "Start Date:",
    type: "date",
    key: crypto.randomUUID(),
  },
  {
    name: "end_date",
    label: "End Date:",
    type: "date",
    key: crypto.randomUUID(),
  },
];

function Education() {
  const [educations, setEducations] = useState([]);
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
  return (
    <>
      {educations.map((education) => {
        return (
          <div className="input-section" key={education.key}>
            {inputs.map((input) => {
              return (
                <Input
                  type={input.type}
                  label={input.label}
                  name={input.name}
                  key={input.key}
                ></Input>
              );
            })}
          </div>
        );
      })}

      <button className="add-education" onClick={createEducation}>
        Add Education
      </button>
    </>
  );
}
export default Education;
