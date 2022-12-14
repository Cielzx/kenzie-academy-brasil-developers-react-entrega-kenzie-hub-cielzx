import { useContext } from "react";
import { TechContext } from "../../Providers/TechContex";
import { UserContext } from "../../Providers/UserContext";

export const CardLi = () => {
  const { setId, techs, setTitle } = useContext(TechContext);
  const { setEditIsOpen } = useContext(UserContext);

  const handleEdit = (id, title) => {
    setId(id);
    setTitle(title);
    setEditIsOpen(true);
  };

  return (
    <>
      {techs?.map((item) => (
        <>
          {item.status === "Avançado" ? (
            <li
              className="list-superior"
              onClick={() => handleEdit(item.id, item.title)}
              key={item.id}
            >
              <p>{item.title}</p>
              <div>
                <span>{item.status}</span>
              </div>
            </li>
          ) : (
            <li onClick={() => handleEdit(item.id, item.title)} key={item.id}>
              <p>{item.title}</p>
              <div>
                <span>{item.status}</span>
              </div>
            </li>
          )}
        </>
      ))}
    </>
  );
};
