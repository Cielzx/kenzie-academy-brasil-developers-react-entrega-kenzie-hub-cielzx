import styled from "styled-components";

export const TitleDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--grey-0);
  }

  button {
    width: 80px;
    height: 30px;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
  }
`;

export const PrincipalReg = styled.main`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px 0px;
  }
`;
