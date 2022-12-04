import { DashPrincipal } from "../DashBoard/style";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
export const Dash = ({ infos }) => {
  //   const { id } = useParams();

  //   const filter = infos.filter((el) => el.id === id);

  return (
    <DashPrincipal>
      <Header />
      <div className="container-text">
        <div>
          <p>Olá, {infos.name}</p>
          <p>
            {infos.course_module}({infos.bio})
          </p>
        </div>
      </div>

      <div className="text-warning">
        <div>
          <h2>Que pena estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </div>
    </DashPrincipal>
  );
};
