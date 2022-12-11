import { Routes, Route, useNavigate } from "react-router-dom";
import { PageLogin } from "../pages/LoginPage";
import { PageRegister } from "../pages/RegisterPage";
import { Dash } from "../pages/DashBoard";

export const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/register" element={<PageRegister />} />
      <Route path="/dashboard" element={<Dash />} />
    </Routes>
  );
};
