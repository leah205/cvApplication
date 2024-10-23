import "../styles/resume.css";

export default function Resume({ generalInputs, educationInputs }) {
  console.log(generalInputs);
  return (
    <div className="resume">
      <p>{generalInputs && generalInputs[0].first_name}</p>
      <p>{educationInputs && educationInputs[0].school}</p>
    </div>
  );
}
