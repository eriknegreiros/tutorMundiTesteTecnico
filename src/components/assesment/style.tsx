import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .imgBook {
    width: 101.51px;
    height: 115px;
  }

  h1 {
    max-width: 220px;
    margin-top: 20px;
    font-family: "Londrina Solid", cursive;
    font-weight: 400;
    font-size: 2.125rem;
    text-align: center;
  }

  .divStar {
    margin-top: 20px;
  }

  .stars {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .divButtons {
    position: absolute;
    bottom: 0;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .skipBtn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-family: "Work Sans", sans-serif;
    color: #2cc6d0;
    font-weight: 600;
    font-size: 1rem;
  }

  .confirmBtn1 {
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    background-color: #2CC6D0;
    transition: 1s;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: -4px 12px 25px -10px #00000080;
    border-radius: 100px;
    border: none;
    width: 140px;
    height: 40px;
  }
  
  
  .confirmBtn2 {
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    background-color: #c8c8c8;
    transition: 1s;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: -4px 12px 25px -10px #00000080;
    border-radius: 100px;
    border: none;
    width: 140px;
    height: 40px;
  }
`;
