import styled from "styled-components";

export const HeaderTag = styled.header`
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;

  height: 70px;

  img {
    max-width: 160px;
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    text-align: center;
    color: var(--blue-1);
    font-weight: 600;
    font-family: var(--font);
    font-size: 18px;
  }

  .menu > li {
    margin: 0 1rem;
    overflow: hidden;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }
  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: var(--black);
    position: absolute;
    height: 4px;
    margin-bottom: 10px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: var(--gray);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  button {
    font-family: var(--font);
    color: var(--white);
    background-color: var(--blue-1);
    box-shadow: -3px 4px 20px 0px rgb(0 0 0 / 25%);
    border: none;
    font-size: 16px;
    border-radius: 20px;
    width: 100px;
    height: 40px;
    text-align: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 50px;
    justify-content: space-between;
    height: 250px;
    img {
      max-width: 200px;
    }

    .menu-button-container {
      display: flex;
      margin-right: 1vw;
    }
    .menu {
      position: absolute;
      top: 30;
      margin-top: 140px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      border: 1px solid var(--gray);
      height: 2.5em;
      padding: 1em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu > li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: var(--black);
      background-color: var(--white);
    }
    .menu > li:not(:last-child) {
      border-bottom: 1px solid #1a0b2e;
    }

    button {
      margin-bottom: 30px;
    }
  }
`;
