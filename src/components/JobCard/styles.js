import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  max-width: 1120px;
  margin: 100px auto;
`;

export const JobContainer = styled.section`
  position: relative;
  background-color: #ffffff;
  padding: 2rem;
  width: 350px;
  
  img {
    position: absolute;
    top: -26px;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 12px 0 17px 0;
  }

  span:nth-child(4) {
    font-size: 1rem;
    color: #6e8098;
  }

  p {
    margin-top: 40px;
    font-size: 0.9rem;
    color: #5964e0;
    font-weight: bold;
  }
`;

export const JobHeaderDetails = styled.div`
  display: flex;
  align-items: center;
  color: #6e8098;

  span {
    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: #6e8098;
      border-radius: 50%;
      margin: 0 8px 2px 8px;
    }
  }
`;
