export default function CompanyHeader({ job }) {
  return (
    <>
      <div>
        <img src={job.logo} alt={`${job.company} Logo`} />
        <div>
          <div>
            <h3>{job.company}</h3>
            <span>{job.position}</span>
          </div>
          <button>Company Site</button>
        </div>
      </div>
    </>
  );
}
