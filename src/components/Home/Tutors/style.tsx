import styled from "styled-components";

export const TutorsSection = styled.section`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 130vh;
  background-image: url("https://cdn-baghd.nitrocdn.com/XPVNXFbQrRLdOqtGRpNejMIrlIAesoms/assets/static/optimized/wp-content/uploads/2021/03/23130209/5e97bcc567a1c18a5c08e99fd3222e1f.bg-site-grande-min.png");
  background-repeat: no-repeat;
  background-size: cover;

  .tutorsText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  h1 {
    text-align: center;
    color: var(--black);
    font-weight: 550;
    font-family: var(--font);
    font-size: 25px;
    margin: 10px;
  }

  span {
    color: var(--blue-1);
  }

  p {
    text-align: center;
    color: var(--black);
    font-weight: 400;
    font-family: var(--font);
    font-size: 20px;
    margin: 10px;
  }

  .tutorsImg {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    gap: 20px;
  }

  img {
    width: 120px;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;

    .tutorsText {
      width: 60vw;
      margin-right: 8vw;
    }

    h1 {
      text-align: left;
      margin-left: 4vw;
    }

    p {
      text-align: left;
      margin-left: 4vw;
    }

    .tutorsImg {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    img {
      width: 15vw;
    }
  }
`;
