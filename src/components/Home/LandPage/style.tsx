import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 89.4vh;
  background-color: var(--blue-1);

  .divtextLand {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  h2 {
    text-align: center;
    color: var(--white);
    font-weight: 550;
    font-family: var(--font);
    font-size: 25px;
    margin-left: 4vw;
  }

  p {
    text-align: center;
    color: var(--white);
    font-weight: 400;
    font-family: var(--font);
    font-size: 15px;
    margin-left: 4vw;
  }

  button {
    background-color: var(--btn-blue);
    border: none;
    width: 220px;
    height: 40px;
    border-radius: 20px;
    color: var(--white);
    font-family: var(--font);
    font-size: 16px;
    box-shadow: -3px 4px 20px 0px rgb(0 0 0 / 25%);
  }

  span {
    color: var(--yellow);
  }

  img {
    width: 240px;
    height: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
    height: 100vh;

    .divtextLand {
      align-items: flex-start;
    }

    h2 {
      width: 30vw;
      text-align: left;
    }

    p {
      width: 30vw;
      text-align: left;
    }

    button {
      margin-left: 4vw;
      width: 300px;
    }

    img {
      width: 35vw;
    }
  }
`;
