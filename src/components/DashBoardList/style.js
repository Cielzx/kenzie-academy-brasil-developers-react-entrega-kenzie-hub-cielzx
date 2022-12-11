import styled from "styled-components";

export const DivStyled = styled.div`
  width: 70%;
  margin: 10px;
  background-color: var(--grey-3);
  height: 400px;
  border-radius: 4px;
  ul {
    margin: 10px 0px;
    padding: 0px 13px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ul li {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-4);
    height: 45px;
    align-items: center;
    border-radius: 4px;
    padding: 0px 10px;
    cursor: pointer;
  }

  .list-superior {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-2);
    height: 45px;
    align-items: center;
    border-radius: 4px;
    padding: 0px 10px;
    cursor: pointer;
  }

  li div {
    display: flex;
    gap: 25px;
  }

  li button {
    background-color: transparent;
    width: 30px;
    border: none;
    color: var(--grey-0);
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
