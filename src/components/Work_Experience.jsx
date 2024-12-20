import { useState } from "react";
import DynamicInputContainer from "./dynamicInputSection";
import Textarea from "./textArea";
import Input from "./input";

const inputs = [
  {
    name: "company",
    label: "Company Name:",
    type: "text",
    key: crypto.randomUUID(),
  },
  {
    name: "position",
    label: "Job Position:",
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

export default function WorkExperience({
  performUpdate,
  needsUpdate,
  setFunc,
}) {
  const [jobs, setJobs] = useState([]);
  if (needsUpdate) {
    performUpdate(jobs, setFunc);
  }
  function deleteJob(index) {
    setJobs(jobs.filter((job) => jobs.indexOf(job) != index));
  }
  function createJob() {
    setJobs([
      ...jobs,
      {
        company: "",
        position: "",
        description: "",
        start_date: "",
        end_date: "",
        key: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <>
      <DynamicInputContainer
        createFunction={createJob}
        deleteFunction={deleteJob}
        buttonText="Add Experience"
      >
        {jobs.map((job) => {
          return (
            <>
              <div className="input-section" key={job.key}>
                {inputs.map((input) => {
                  return (
                    <Input
                      type={input.type}
                      label={input.label}
                      name={input.name}
                      key={input.key}
                      data={jobs}
                      index={jobs.indexOf(job)}
                      setData={setJobs}
                    ></Input>
                  );
                })}
              </div>
              <Textarea
                data={jobs}
                index={jobs.indexOf(job)}
                setData={setJobs}
                name="description"
                description="Description:"
              ></Textarea>
            </>
          );
        })}
      </DynamicInputContainer>
    </>
  );
}
