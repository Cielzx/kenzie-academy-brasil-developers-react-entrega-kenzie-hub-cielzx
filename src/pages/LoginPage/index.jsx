import { Formulario } from "../../components/Form";
import { Principal } from "./style";
import Logo from "../../assets/img/Logo.svg";

export const PageLogin = ({ userLogin, logged, setLogged }) => {
  return (
    <>
      <Principal>
        <h1>
          <img src={Logo} alt="" />
        </h1>
        <Formulario userLogin={userLogin} />
      </Principal>
    </>
  );
};
