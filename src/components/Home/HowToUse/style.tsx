import styled from "styled-components";

export const HowToUseSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  min-height: 100vh;

  .allContentHowToUse {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    margin-top: 2vh;
  }

  h1 {
    font-family: var(--font);
    font-size: 30px;
    text-align: center;
    font-weight: 500;
  }

  span {
    color: var(--blue-1);
  }

  h2 {
    font-family: var(--font);
    font-weight: 500;
    margin-left: 5vw;
  }

  p {
    font-family: var(--font);
    line-height: 30px;
    margin-left: 5vw;
  }

  .bgColorImgHowToUse {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-1);
    width: 85vw;
    padding: 10px;
    border-radius: 20px;
    margin-top: 20px;
  }

  img {
    width: 200px;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(
      1.5
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 90px;

    .allContentHowToUse {
      padding-top: 0px;
    }

    h1 {
      text-align: left;
      margin-left: 5vw;
    }

    h2 {
      width: 40vw;
    }

    p {
      width: 40vw;
    }

    .bgColorImgHowToUse {
      width: 35vw;
      height: 80vh;
    }

    img {
      width: 200px;
    }
  }
`;
