import { useForm } from "react-hook-form";
import { FormButton } from "../../styles/Button";
import { FormDiv } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisterSchema";
import { UserContext } from "../../Providers/UserContext";
import { useContext } from "react";

export const FormReg = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const submitForm = (Data) => {
    userRegister(Data);
  };
  return (
    <FormDiv onSubmit={handleSubmit(submitForm)}>
      <div>
        <h2>Crie Sua conta</h2>
        <span>Rapído e grátis vamos nessa </span>
      </div>
      <form action="">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="pass">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor="cPass">Confirmar Senha</label>
        <input type="password" id="cPass" placeholder="Confirme sua senha" />
        {errors.cPass && <span>{errors.cPass.message}</span>}
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <label htmlFor="modules">Selecionar módulo</label>
        <select name="modulo" id="modules" {...register("course_module")}>
          <option value="Primeiro Modulo">Primeiro modulo</option>
          <option value="Segundo Modulo">Segundo modulo</option>
          <option value="Terceiro Modulo">Terceiro modulo</option>
        </select>

        <FormButton type="submit">Cadastrar</FormButton>
      </form>
    </FormDiv>
  );
};
