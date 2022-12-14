import { DashPrincipal } from "../DashBoard/style";
import { Header } from "../../components/Header";
import { BsPlusLg } from "react-icons/bs";
import { DashList } from "../../components/DashBoardList";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Navigate } from "react-router-dom";

export const Dash = () => {
  const { user, loading, setModalIsOpen } = useContext(UserContext);
  if (loading) {
    return null;
  }

  return user ? (
    <DashPrincipal>
      <Header />
      <div className="container-text">
        <div>
          <p>Olá, {user?.name}</p>
          <p>
            {user?.course_module}({user?.bio})
          </p>
        </div>
      </div>

      <div className="text-warning">
        <div className="div-warn">
          <p>Tecnologias</p>
          <button onClick={() => setModalIsOpen(true)} className="warn-button">
            <BsPlusLg />
          </button>
        </div>
        <DashList />
      </div>
    </DashPrincipal>
  ) : (
    <Navigate to="/" />
  );
};
