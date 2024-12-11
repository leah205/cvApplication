import { useState } from "react";
export default function Textarea({ name, description, index, setData, data }) {
  const [content, setContent] = useState("");
  function handleChange(event) {
    setContent(event.value);
    if (!data[index]) {
      data[index] = {};
    }
    data[index][name] = event.target.value;
    setData(data);
  }
  return (
    <div className="job-description">
      <label htmlFor={name}>{description}</label>
      <textarea
        id={name}
        onChange={(event) => handleChange(event)}
        value={content}
      ></textarea>
    </div>
  );
}
