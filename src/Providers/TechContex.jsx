import { useState } from "react";
import { createContext, useContext } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [id, setId] = useState([]);
  const [title, setTitle] = useState("");

  const { user, loadUser, setEditIsOpen } = useContext(UserContext);

  const techs = user?.techs;

  const deleteTech = async (id) => {
    const response = await Api.delete(`/users/techs/${id}`);
    toast.error("Tech Deletada");
    loadUser();
  };

  const addTech = async (Data) => {
    try {
      const response = await Api.post("/users/techs", Data);
      toast.success("Tech criada com sucesso");
      loadUser();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async ({ id, Data }) => {
    try {
      const response = await Api.put(`/users/techs/${id}`, Data);
      toast.success("Tech criada com sucesso");
      loadUser();
      setEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        id,
        setId,
        techs,
        deleteTech,
        addTech,
        updateTech,
        title,
        setTitle,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
