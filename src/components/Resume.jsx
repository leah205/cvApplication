import "../styles/resume.css";

export default function Resume({ generalInputs, educationInputs, jobInputs }) {
  function formatDate(date) {
    if (!date) return "present";
    return (
      date.substring(5, 7) +
      "/" +
      date.substring(8) +
      "/" +
      date.substring(0, 4)
    );
  }

  function getDate(start, end) {
    let formattedStart = formatDate(start);
    let formattedEnd = formatDate(end);
    if (formattedStart == "present" && formattedEnd == "present") {
      return;
    } else {
      if (formattedStart == "present" && !(formattedEnd == "present")) {
        return formattedEnd;
      } else {
        return formattedStart + " - " + formattedEnd;
      }
    }
  }

  function getHeader() {
    if (generalInputs && generalInputs.length) {
      console.log(generalInputs);
      return (
        <>
          <h1>
            {generalInputs &&
              generalInputs[0].first_name + " " + generalInputs[0].last_name}
          </h1>
          <p>{generalInputs && generalInputs[0].email}</p>
          <p>{generalInputs && generalInputs[0].phone_number}</p>
          <p>{generalInputs && generalInputs[0].address}</p>
        </>
      );
    }
    return "";
  }
  return (
    <div className="resume">
      <div className="header-section">{getHeader()}</div>

      {educationInputs && (
        <div className="education-section">
          <h2>Education</h2>
          <hr />
          {educationInputs &&
            educationInputs.map((educationInput) => {
              return (
                <div className="education">
                  <div className="education-top">
                    <p className="school">{educationInput.school + ", "}</p>

                    <p>{educationInput.study_type}</p>
                    <p>
                      {formatDate(educationInput.start_date) +
                        " - " +
                        formatDate(educationInput.end_date)}
                    </p>
                  </div>
                  <p>{educationInput.study_area}</p>
                </div>
              );
            })}
        </div>
      )}
      {jobInputs && (
        <div className="job-section">
          <h2>Work Experience</h2>
          <hr />
          {jobInputs &&
            jobInputs.map((jobInput) => {
              return (
                <div className="job">
                  <div className="job-top">
                    <p className="company">{jobInput.company}</p>
                    <p>
                      {formatDate(jobInput.start_date) +
                        " - " +
                        formatDate(jobInput.end_date)}
                    </p>
                  </div>
                  <p className="position">{jobInput.position}</p>
                  <p className="description">{jobInput.description}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
