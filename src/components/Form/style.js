import styled from "styled-components";

export const FormDiv = styled.div`
  width: 325px;
  padding: 13px 20px;
  gap: 30px;
  /* height: 420px; */
  background-color: var(--grey-3);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: var(--grey-1);
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: var(--grey-0);
  }

  h4 {
    color: white;
    font-family: "inter";
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
    color: white;
  }

  form input {
    width: 100%;
    height: 35px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
  }
  @media screen and (max-width: 900px) {
    width: 300px;
    padding: 13px 20px;
    gap: 30px;

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
      gap: 21px;
      text-align: left;
      color: white;
    }

    form input {
      width: 100%;
      height: 30px;
      border-radius: 4px;
      background-color: transparent;
      border: 1px solid white;
      color: white;
    }
  }
`;
