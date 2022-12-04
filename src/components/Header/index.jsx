import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import { ButtonStyled } from "../../styles/Button";
import { HeaderStyled } from "./style";
export const Header = () => {
  const navigate = useNavigate();
  function Logout() {
    window.localStorage.clear();
    navigate("/");
  }
  return (
    <HeaderStyled>
      <div>
        <img src={Logo} alt="logo" />
        <ButtonStyled onClick={Logout}>Sair</ButtonStyled>
      </div>
    </HeaderStyled>
  );
};
