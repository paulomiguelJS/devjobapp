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
  &:nth-child(2) {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: -25px; /* Adjust as needed to align the line */
      width: 1px; /* Line width */
      height: 100%; /* Line height */
      background-color: #ccc; /* Line color */
    }
  }

  input {
    padding: 16px;
    outline: none;
    border: none;

    &::placeholder {
      color: #8c9096;
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -25px; /* Adjust as needed to align the line */
    width: 1px; /* Line width */
    height: 100%; /* Line height */
    background-color: #ccc; /* Line color */
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    cursor: pointer;
    appearance: none;
    border: 1px solid #939bf4;
    border-radius: 4px;

    &:checked {
      appearance: auto;

      accent-color: #939bf4;
    }
  }

  label {
    color: #19202d;
    font-weight: bold;
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  padding: 8px 24px;
  background-color: #939bf4;
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
