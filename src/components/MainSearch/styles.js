import styled from "styled-components";

export const SearchBoxContainer = styled.form`
  display: flex;
  background-color: #fff;
  padding:10px;
  width: 100%;
  border-radius: 4px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
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
`;

export const Button = styled.button`
  padding: 8px 24px;
  background-color: #5964E0;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;

  transition:  all 0.2s ease-in;

  &:hover {
  background-color: #939BF4;

    
  }
`;
