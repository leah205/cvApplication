import "../styles/general.css";
import Input from "./input.jsx";
import { useState } from "react";
//if we want parent to remember

const inputs = [
  {
    name: "first-name",
    label: "First Name:",
    type: "text",
    key: crypto.randomUUID(),
  },
  {
    name: "last-name",
    label: "Last Name:",
    type: "text",
    key: crypto.randomUUID(),
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    key: crypto.randomUUID(),
  },
];

function General({ updateInputArr, inputValues }) {
  return (
    <div className="input-section">
      {inputs.map((input) => {
        return (
          <Input
            name={input.name}
            type={input.type}
            label={input.label}
            key={input.key}
            updateInputs={updateInputArr}
            sectionIndex="0"
            index={inputs.indexOf(input)}
            initialValue={inputValues[inputs.indexOf(input)]}
          />
        );
      })}
    </div>
  );
}

export default General;
