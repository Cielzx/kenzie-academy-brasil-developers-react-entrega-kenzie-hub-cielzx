import styled from "styled-components";

export const DashPrincipal = styled.main`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  height: 100vh;

  .text-warning {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: white;
  }

  .div-warn {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }

  .warn-button {
    background-color: transparent;
    background-color: var(--grey-3);
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

  .text-warning h2 {
    font-size: 20px;
  }

  .container-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid var(--grey-2);
    color: var(--grey-0);
  }

  .container-text div {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 10px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100vh;
    /* -webkit-box-pack: center; */
    /* -webkit-justify-content: center; */
    -ms-flex-pack: center;
    /* justify-content: center; */
    /* text-align: center;*/

    .text-warning {
      display: flex;
    }

    .container-text div {
      width: 70%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      gap: 10px;
      /* justify-content: space-between; */
      flex-direction: column;
    }
  }
`;
