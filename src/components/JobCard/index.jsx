import { Container, JobContainer, JobHeaderDetails } from "./styles";
import scoot from "../../assets/images/logos/scoot.svg";

export default function JobCard() {
  return (
    <>
      <Container>
        <JobContainer>
          <img src={scoot} alt="Company Logo" />

          <JobHeaderDetails>
            <time>5h ago</time>
            <span>Full Time</span>
          </JobHeaderDetails>

          <h2>Senior Softaware Engenineer</h2>
          <span>Scoot</span>
          <p>United Kindon</p>
        </JobContainer>

        <JobContainer>
          <img src={scoot} alt="Company Logo" />
          <JobHeaderDetails>
            <time>5h ago</time>
            <span>Full Time</span>
          </JobHeaderDetails>
          <h2>Senior Softaware Engenineer</h2>
          <span>Scoot</span>
          <p>United Kindon</p>
        </JobContainer>

        <JobContainer>
          <img src={scoot} alt="Company Logo" />
          <JobHeaderDetails>
            <time>5h ago</time>
            <span>Full Time</span>
          </JobHeaderDetails>
          <h2>Senior Softaware Engenineer</h2>
          <span>Scoot</span>
          <p>United Kindon</p>
        </JobContainer>
      </Container>
    </>
  );
}
