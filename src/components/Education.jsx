import "../styles/Education.css";
import { useState } from "react";
import Input from "./input";
import Select from "./Select";
import DynamicInputContainer from "./dynamicInputSection";
const inputs = [
  {
    name: "school",
    label: "School:",
    type: "text",
    required: true,
    key: crypto.randomUUID(),
  },
  {
    name: "study_area",
    label: "Area of Study:",
    type: "text",
    required: true,
    key: crypto.randomUUID(),
  },
  {
    name: "start_date",
    label: "Start Date:",
    type: "date",
    required: true,
    key: crypto.randomUUID(),
  },
  {
    name: "end_date",
    label: "End Date:",
    type: "date",
    required: false,
    key: crypto.randomUUID(),
  },
];

const selectOptions = [
  {
    text: "BS",
    key: crypto.randomUUID(),
    value: "Bachelor's Degree",
  },
  { text: "AS", key: crypto.randomUUID(), value: "Associate's Degree" },
  { text: "MS", key: crypto.randomUUID(), value: "Master's Degree" },
  { text: "PHD", key: crypto.randomUUID(), value: "Post-doctorate Degree" },
];

function Education({ performUpdate, needsUpdate, setFunc }) {
  const [educations, setEducations] = useState([]);
  const [data, setData] = useState([]);
  if (needsUpdate) {
    performUpdate(data, setFunc);
  }
  function deleteEducation(index) {
    setEducations(
      educations.filter((education) => educations.indexOf(education) != index)
    );
  }

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
  //make input set part of data not whole date please maybe change it to include index in parameters
  return (
    <>
      <DynamicInputContainer
        createFunction={createEducation}
        deleteFunction={deleteEducation}
        buttonText="Add Education"
      >
        {educations.map((education) => {
          return (
            <div className="input-section" key={education.key}>
              {inputs.map((input) => {
                return (
                  <Input
                    setData={setData}
                    type={input.type}
                    label={input.label}
                    name={input.name}
                    key={input.key}
                    required={input.required}
                    data={data}
                    index={educations.indexOf(education)}
                  ></Input>
                );
              })}
              <Select
                options={selectOptions}
                label="Type of Study:"
                name="study_type"
                data={data}
                setData={setData}
                index={educations.indexOf(education)}
              ></Select>
            </div>
          );
        })}
      </DynamicInputContainer>
    </>
  );
}
export default Education;
