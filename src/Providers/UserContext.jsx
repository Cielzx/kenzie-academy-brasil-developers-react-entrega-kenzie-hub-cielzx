import { useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/api";
export const UserContext = createContext({});

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalIsopen, setModalIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("auth");
    if (!token) {
      setLoading(false);
      return;
    }
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const { data } = await Api.get(`/profile`);

      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const userLogin = async (dataForm) => {
    try {
      const response = await Api.post("/sessions", dataForm);
      console.log(response);
      setUser(response.data.user);

      window.localStorage.setItem("auth", response.data.token);

      Api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      toast.success("Logado com sucesso");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const userRegister = async (dataForm) => {
    try {
      const response = await Api.post("/users", dataForm);
      toast.success("Usuario criado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        user,
        setUser,
        modalIsopen,
        setModalIsOpen,
        editIsOpen,
        setEditIsOpen,
        loadUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
