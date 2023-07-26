import styled from "styled-components";

export const SearchBoxContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  width: 80%;
  position: absolute;
  top: 115px;
  right: 140px;
  padding-left: 36px;
  padding-right: 36px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  border: 1px solid red;
  width: 100%;
  
  img {
    margin-right: 8px;
  }

  input {
    flex: 1;
    padding: 8px;
    border: none;
    outline: none;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  padding: 8px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
`;
