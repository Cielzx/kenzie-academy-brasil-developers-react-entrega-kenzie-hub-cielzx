import styled from "styled-components";

export const Principal = styled.main`
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
  }
`;
