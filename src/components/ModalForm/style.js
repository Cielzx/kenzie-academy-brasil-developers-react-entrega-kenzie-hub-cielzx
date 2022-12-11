import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    width: 30%;
    background-color: var(--grey-3);
    flex-direction: column;
    align-items: center;
    color: var(--grey-0);
  }

  .container form {
    margin: 10px 0px;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .title-form {
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-2);
  }

  .title-form button {
    width: 30px;
    background-color: transparent;
    color: var(--grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 39px;
    border: 1px solid var(--grey-2);
    background-color: transparent;
    border-radius: 5px;
    outline-color: var(--grey-0);
    color: var(--grey-0);
  }

  .button-div {
    display: flex;
    width: 100%;
  }

  form select {
    width: 100%;
    height: 39px;
    border: 1px solid var(--grey-2);
    background-color: transparent;
    border-radius: 5px;
    outline-color: var(--grey-0);
    color: var(--grey-1);
  }

  form div {
    width: 100%;
    display: flex;
    gap: 20px;
  }

  .delete-button {
    width: 154px;
    height: 38px;
    color: var(--grey-0);
    border: 1px solid var(--grey-1);
    background-color: var(--grey-1);
    border-radius: 4px;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    .container {
      display: flex;
      width: 300px;
      background-color: var(--grey-3);

      flex-direction: column;

      align-items: center;
      color: var(--grey-0);
    }
  }
`;
