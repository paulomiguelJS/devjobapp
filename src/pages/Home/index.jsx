
import Header from "../../components/Header";
import JobCard from "../../components/JobCard";
import jobsData from '../../services/data.json'

export default function Home() {
  return (
    <>
      <Header />
      {jobsData.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  );
}
