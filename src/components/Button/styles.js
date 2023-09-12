import styled from "styled-components";

export const LoadMoreButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 60px;`

export const LoadMoreButton = styled.button`
  width: 140px;
  height: 48px;
  background-color: #5964e0;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    background-color: #939bf4;
  }
`;
