import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  :root{
    --color-primary:#FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-negative:#59323F;

    --grey-0:#F8F9FA;
    --grey-1:#868E96;
    --grey-2:#343B41;
    --grey-3:#212529;
    --grey-4:#121214;


    --sucess-:#3FE864;
    --error-:#E83F5B;

    --font-inter:"inter";

  }
  body{
    background-color: var(--grey-4);
  }
`;
