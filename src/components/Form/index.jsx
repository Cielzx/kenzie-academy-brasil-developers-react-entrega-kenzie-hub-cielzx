import { FormDiv } from "./style";
import { FormButton, DivButton } from "../../styles/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Api } from "../../services/api";
import { LoginSchema } from "./LoginSchema";

export const Formulario = ({ userLogin }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const FormSubmit = (Data) => {
    userLogin(Data);
  };

  return (
    <FormDiv onSubmit={handleSubmit(FormSubmit)}>
      <h4>Login</h4>
      <form action="">
        <label htmlFor="">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu email aqui"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha aqui"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <FormButton type="Submit">Entrar</FormButton>
      </form>
      <span>
        <Link to={"/register"}>Ainda não possui uma conta?</Link>
      </span>
      <DivButton onClick={() => navigate("/register")}>Cadastre-se</DivButton>
    </FormDiv>
  );
};
