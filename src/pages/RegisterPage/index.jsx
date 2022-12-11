import { FormReg } from "../../components/FormRegister";
import { PrincipalReg } from "./style";
import Logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";
import { TitleDiv } from "./style";
import { ButtonStyled } from "../../styles/Button";

export const PageRegister = () => {
  return (
    <PrincipalReg>
      <TitleDiv>
        <img src={Logo} alt="" />

        <ButtonStyled>
          <Link to="/">Voltar</Link>
        </ButtonStyled>
      </TitleDiv>
      <FormReg />
    </PrincipalReg>
  );
};
