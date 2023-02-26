import styled from "styled-components";

export const DataTutor = styled.div`
  background-color: transparent;
  background-image: linear-gradient(160deg, #f98f69 0%, #f98f69 73%);
  max-height: 60vh;

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  h1,
  h2,
  h3 {
    font-weight: 550;
    font-family: var(--font);
    font-size: 40px;
    color: var(--white);
    text-align: center;
    margin: 10px;
  }

  p {
    text-align: center;
    font-weight: 200;
    font-family: var(--font);
    font-size: 14px;
    color: var(--white);
    margin: 10px;
  }

  @media (min-width: 768px) {
    height: 30vh;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
