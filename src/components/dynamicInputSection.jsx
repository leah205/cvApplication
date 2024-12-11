//add option for still working
import DeleteSrc from "../images/subtract.svg";

function DynamicInputContainer({
  buttonText,
  children,
  deleteFunction,
  createFunction,
  grid,
}) {
  return (
    <>
      {children.map((child) => {
        return (
          <div className={`dynamic-input ${grid}`}>
            {child}
            <button
              className="delete_btn"
              onClick={() => deleteFunction(children.indexOf(child))}
            >
              <img alt="delete" src={DeleteSrc}></img>
            </button>
          </div>
        );
      })}
      <button className="add-section" onClick={createFunction}>
        {buttonText}
      </button>
    </>
  );
}
export default DynamicInputContainer;
