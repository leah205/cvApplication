import "../styles/Education.css";

function EducationSection({ education }) {
  <div className="input">
    <label htmlFor="school">School: </label>
    <input type="text" id="school" value={education.school} />
  </div>;
}

function Education() {
  const [educations, setEducations] = useState({});
  function createEducation() {
    setEducations([
      ...educations,
      { school: "", degree: "", major: "", grad_date: "" },
    ]);
  }
  /*return (
    <>
      {educations.map((education) => {
        return <Education education={education} />;
      })}
      <button className="add-education" onclick={createEducation}>
        Add Education
      </button>
    </>
  );*/
}
export default Education;
