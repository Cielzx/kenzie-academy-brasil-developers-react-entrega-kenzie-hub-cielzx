import { FormDiv } from "./style";
import { FormButton, DivButton } from "../../styles/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

export const Formulario = () => {
  const { userLogin } = useContext(UserContext);
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
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha aqui"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <FormButton type="Submit">Entrar</FormButton>
      </form>
      <span>
        <Link to={"/register"}>Ainda não possui uma conta?</Link>
      </span>
      <DivButton>
        <Link to={"/register"}>Cadastre-se</Link>
      </DivButton>
    </FormDiv>
  );
};
