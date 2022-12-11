import { useState } from "react";
import { createContext, useContext } from "react";
import { Api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [id, setId] = useState([]);

  const { user, loadUser } = useContext(UserContext);

  const techs = user?.techs;

  const deleteTech = async (id) => {
    const response = await Api.delete(`/users/techs/${id}`);
    loadUser();
  };

  const addTech = async (Data) => {
    try {
      const response = await Api.post("/users/techs", Data);
      loadUser();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async ({ id, Data }) => {
    try {
      const response = await Api.put(`/users/techs/${id}`, Data);
      loadUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ id, setId, techs, deleteTech, addTech, updateTech }}
    >
      {children}
    </TechContext.Provider>
  );
};
