import styled from "styled-components";

export const CardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .allCardsUse {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 120vh;
    margin: 50px;
  }
  .divCardsUse {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 90px;
  }

  p {
    text-align: center;
    font-family: var(--font);
    font-weight: 410;
  }

  span {
    color: var(--blue-1);
    font-family: var(--font);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 0px;
    gap: 50px;

    .allCardsUse {
      flex-direction: row;
      height: 30vh;
      margin-bottom: 15px;
    }

    p {
      width: 20vw;
    }
  }
`;
