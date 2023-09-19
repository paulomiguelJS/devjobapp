import { Button } from "../../components/Button";
import { Container, JobContainer, JobHeaderDetails } from "./styles";

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
    </>
  );
}
