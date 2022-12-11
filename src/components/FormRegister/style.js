import styled from "styled-components";

export const FormDiv = styled.div`
  width: 300px;
  padding: 13px 20px;
  gap: 0px;
  /* height: 100vh; */
  background-color: var(--grey-2);
  display: flex;
  flex-direction: column;
  color: white;

  span {
    color: var(--grey-1);
    font-size: 17px;
  }

  h4 {
    color: white;
    font-family: "inter";
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 9px;
    text-align: left;
    color: white;
  }

  form input {
    width: 260px;
    height: 35px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid;
    color: var(--grey-1);
  }

  form select {
    width: 260px;
    height: 35px;
    border-radius: 6px;
    background-color: transparent;
    border: 1px solid white;
    color: var(--grey-1);
  }

  @media screen and (max-width: 900px) {
    width: 300px;
    padding: 13px 20px;
    gap: 0px;
    background-color: var(--grey-2);
    display: flex;
    flex-direction: column;

    span {
      color: var(--grey-1);
      font-size: 12px;
    }

    h4 {
      color: white;
      font-family: "inter";
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 9px;
      text-align: left;
      color: white;
    }

    form input {
      width: 260px;
      height: 27px;
      border-radius: 4px;
      background-color: transparent;
      border: 1px solid;
      color: var(--grey-1);
    }

    form select {
      width: 260px;
      height: 27px;
      border-radius: 6px;
      background-color: transparent;
      border: 1px solid white;
      color: var(--grey-1);
    }
  }
`;
