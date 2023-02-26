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
    font-family: var(--font-assesment);
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
    font-family: var(--font);
    color: var(--blue-acqua);
    font-weight: 600;
    font-size: 1rem;
  }

  .confirmBtn1 {
    cursor: pointer;
    font-family: var(--font);
    background-color: var(--blue-acqua);
    transition: 1s;
    color: var(--white);
    font-weight: 600;
    font-size: 1rem;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: -4px 12px 25px -10px var(--dark-blue);
    border-radius: 100px;
    border: none;
    width: 140px;
    height: 40px;
  }

  .confirmBtn2 {
    cursor: pointer;
    font-family: var(--font);
    background-color: var(--gray-assessment);
    transition: 1s;
    color: var(--white);
    font-weight: 600;
    font-size: 1rem;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: -4px 12px 25px -10px var(--dark-blue);
    border-radius: 100px;
    border: none;
    width: 140px;
    height: 40px;
  }
`;
