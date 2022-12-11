import { useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import { UserContext } from "../../Providers/UserContext";
import { DivStyled } from "./style";
import { EditModalForm } from "../EditForm";
import { TechContext } from "../../Providers/TechContex";

export const DashList = () => {
  const { setId, techs } = useContext(TechContext);
  const { setEditIsOpen } = useContext(UserContext);

  const handleEdit = (id) => {
    setId(id);
    setEditIsOpen(true);
  };

  return (
    <DivStyled>
      <ul>
        {techs?.map((item) => (
          <>
            {item.status === "Avançado" ? (
              <li
                className="list-superior"
                onClick={() => handleEdit(item.id)}
                key={item.id}
              >
                <p>{item.title}</p>
                <div>
                  <span>{item.status}</span>
                  {/* <button type="button">
                  <BsTrashFill />
                </button> */}
                </div>
              </li>
            ) : (
              <li onClick={() => handleEdit(item.id)} key={item.id}>
                <p>{item.title}</p>
                <div>
                  <span>{item.status}</span>
                  {/* <button type="button">
                  <BsTrashFill />
                </button> */}
                </div>
              </li>
            )}
          </>
        ))}
      </ul>
    </DivStyled>
  );
};
