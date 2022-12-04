import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--grey-2);

  button {
    width: 80px;
    height: 30px;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    color: var(--grey-0);
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 180px;
  }

  @media screen and (max-width: 1024px) {
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0px;
    }
  }
`;
