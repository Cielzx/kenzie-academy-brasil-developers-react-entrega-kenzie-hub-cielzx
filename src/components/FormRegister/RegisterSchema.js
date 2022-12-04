import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatorio")
    .min(3, "Nome precisa de pelo menos 3 caracteres")
    .max(18, "Maximo de caracteres atingido!"),
  email: yup
    .string()
    .required("Email obrigatorio")
    .email("Por favor digite um email valido"),
  password: yup.string().required("Senha obrigatoria"),
  // cPass: yup.string()
  // .when("password", (password, field) =>
  //   password
  //     ? field
  //         .required("Confirme sua senha")
  //         .oneOf([yup.ref("password")], "Senhas não são iguais")
  //     : field
  // ),
});
