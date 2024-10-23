import "../styles/resume.css";

export default function Resume({ generalInputs, educationInputs }) {
  console.log(educationInputs);
  return (
    <div className="resume">
      <div className="header-section">
        <h1>
          {generalInputs &&
            generalInputs[0].first_name + " " + generalInputs[0].last_name}
        </h1>
        <p>{generalInputs && generalInputs[0].email}</p>
        <p>{generalInputs && generalInputs[0].phone_number}</p>
        <p>{generalInputs && generalInputs[0].address}</p>
      </div>
      <div className="education-section">
        {educationInputs &&
          educationInputs.map((educationInput) => {
            return (
              <div className="education">
                <p>{educationInput.school}</p>
                <p>{educationInput.study_area}</p>
                <p>{educationInput.start_date}</p>
                <p>{educationInput.end_date}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
