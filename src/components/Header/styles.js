import styled from "styled-components";
import headerBackground from "../../assets/images/desktop/bg-pattern-header.svg";

export const HeaderContainer = styled.header`
  background-image: url(${headerBackground});
  background-size: cover;
  border-bottom-left-radius: 100px;
  max-height: 150px;
`;

export const Container = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;
  padding: 52px 36px;

  div {
    display: flex;
    align-items: center;
 
    div:nth-child(2) > img{
      margin: 0 10px;
    }
  

  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

 
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 5px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
