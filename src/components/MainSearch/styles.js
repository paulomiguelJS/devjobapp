import styled from "styled-components";

export const SearchBoxContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-top: 2rem;
`;

export const InputContainer = styled.div`
display: flex;
  input {
    padding: 16px;
    outline: none;
    border: none;
  }
`;

export const SearchContainer = styled.div`
  input {
    padding: 16px;
  }
`;

export const Button = styled.button`
  padding: 8px 24px;
  background-color: #5964e0;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;

  transition: all 0.2s ease-in;

  &:hover {
    background-color: #939bf4;
  }
`;
