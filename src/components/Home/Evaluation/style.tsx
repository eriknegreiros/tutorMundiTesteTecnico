import styled from "styled-components";

export const EvaluationTutor = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  img {
    width: 100px;
  }

  h1 {
    text-align: center;
    font-weight: 500;
    font-family: var(--font);
    font-size: 14px;
    color: var(--var(--black));
  }

  h2 {
    text-align: center;
    font-weight: 500;
    font-family: var(--font);
    font-size: 20px;
    color: var(--black);
  }

  p {
    text-align: center;
    font-weight: 400;
    font-family: var(--font);
    font-size: 18px;
    color: var(--black);
  }

  span {
    color: var(--blue-span);
    font-family: var(--font);
    font-weight: 500;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
    max-width: 90vw;
  }

  .inner {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .divImg {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .divImg img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: solid 8px var(--blue-1);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;

    .carousel {
      max-width: 42vw;
    }

    .inner {
      flex-direction: row;
    }

    h1 {
      font-size: 30px;
      width: 30vw;
    }

    .divImg img {
      width: 200px;
      height: 200px;
    }
  }
`;
