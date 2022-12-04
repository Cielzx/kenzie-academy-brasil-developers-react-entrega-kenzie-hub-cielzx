import { Routes, Route, useNavigate } from "react-router-dom";
import { PageLogin } from "../pages/LoginPage";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { PageRegister } from "../pages/RegisterPage";
import { Dash } from "../pages/DashBoard";
import { useState } from "react";

export const Rout = ({ logged, user, setUser, setLogged }) => {
  const navigate = useNavigate();
  const userLogin = async (dataForm) => {
    try {
      const response = await Api.post("sessions", dataForm);
      window.localStorage.clear();
      window.localStorage.setItem("auth", response.data.token);
      toast.success("Logado com sucesso");
      const userTests = window.localStorage.setItem(
        "usuario",
        JSON.stringify(response.data.user)
      );
      setUser(userTests);
      navigate("/dashboard");
      console.log(response);
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const infos = JSON.parse(localStorage.getItem("usuario"));

  const userRegister = async (dataForm) => {
    try {
      const response = await Api.post("users", dataForm);
      toast.success("Usuario criado com sucesso");
      navigate("/");
      console.log(response);
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLogin
            userLogin={userLogin}
            logged={logged}
            setLogged={setLogged}
          />
        }
      />
      <Route
        path="/register"
        element={<PageRegister userRegister={userRegister} />}
      />
      <Route path="/dashboard" element={<Dash infos={infos} />} />
    </Routes>
  );
};
