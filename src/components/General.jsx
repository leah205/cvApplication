import "../styles/general.css";
import Input from "./input.jsx";
import { useState } from "react";
//if we want parent to remember

const inputs = [
  {
    name: "first_name",
    label: "First Name:",
    type: "text",
    key: crypto.randomUUID(),
  },
  {
    name: "last_name",
    label: "Last Name:",
    type: "text",
    key: crypto.randomUUID(),
  },
  {
    name: "email",
    label: "Email Address:",
    type: "email",
    key: crypto.randomUUID(),
  },
  {
    name: "phone_number",
    label: "Phone Number:",
    type: "tel",
    key: crypto.randomUUID(),
  },
  {
    name: "address",
    label: "Home Address:",
    type: "text",
    key: crypto.randomUUID(),
  },
];

function General({ performUpdate, needsUpdate, setFunc }) {
  const [data, setData] = useState([]);

  if (needsUpdate) {
    performUpdate(data, setFunc);
  }
  return (
    <div className="input-section">
      {inputs.map((input) => {
        return (
          <Input
            name={input.name}
            type={input.type}
            label={input.label}
            key={input.key}
            setData={setData}
            data={data}
            index={0}
          />
        );
      })}
    </div>
  );
}

export default General;
