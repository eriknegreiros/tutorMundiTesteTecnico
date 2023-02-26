import styled from "styled-components";

export const SolutionTutor = styled.section`
  min-height: 100vh;
  background-image: url("https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/23130209/5e97bcc567a1c18a5c08e99fd3222e1f.bg-site-grande-min.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 50px;

  h1 {
    text-align: center;
    color: var(--black);
    font-weight: 550;
    font-family: var(--font);
    font-size: 30px;
  }

  span {
    color: var(--blue-1);
  }

  .allDivsSolution {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  .divTextSolution {
    background-color: #f98f69;
    width: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    height: 250px;
    border-radius: 0px 0px 20px 20px;
  }

  .divAlignSolution {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 250px;
    border-radius: 20px 20px 0px 0px;
  }

  h2 {
    margin: 7px;
    text-align: left;
    color: var(--black);
    font-weight: 550;
    font-family: var(--font);
    font-size: 22px;
  }

  p {
    margin: 7px;
    text-align: left;
    color: var(--black);
    font-weight: 400;
    font-family: var(--font);
    font-size: 15px;
  }

  button {
    width: 180px;
    margin: 7px;
    border: none;
    height: 30px;
    background-color: var(--black);
    color: var(--white);
    border-radius: 20px;
    font-family: var(--font);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    height: 100vh;
    .allDivsSolution {
      flex-direction: row;
    }

    .divTextSolution {
      width: 30vw;
    }
    img {
      width: 30vw;
    }

    button {
      width: 180px;
    }
  }
`;
