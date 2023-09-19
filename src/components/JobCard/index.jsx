import { Button } from "../../components/Button";
import { Container, JobContainer, JobHeaderDetails } from "./styles";
import scoot from "../../assets/images/logos/scoot.svg";

export default function JobCard({ job }) {
  return (
    <>
      <Container>
        <JobContainer>
          <img src={job.logo} alt={`${job.company} Logo`} />

          <JobHeaderDetails>
            <time>{job.postedAt}</time>
            <span>{job.contract}</span>
          </JobHeaderDetails>

          <h2>{job.position}</h2>
          <span>{job.company}</span>
          <p>{job.location}</p>
        </JobContainer>
      </Container>
      <Button />
    </>
  );
}
