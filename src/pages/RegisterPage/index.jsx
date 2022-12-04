import { FormReg } from "../../components/FormRegister";
import { PrincipalReg } from "./style";
import Logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TitleDiv } from "./style";
import { ButtonStyled } from "../../styles/Button";

export const PageRegister = ({ userRegister }) => {
  return (
    <PrincipalReg>
      <TitleDiv>
        <img src={Logo} alt="" />

        <ButtonStyled>
          <Link to="/">Voltar</Link>
        </ButtonStyled>
      </TitleDiv>
      <FormReg userRegister={userRegister} />
    </PrincipalReg>
  );
};