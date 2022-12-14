import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { TechContext } from "../../Providers/TechContex";
import { UserContext } from "../../Providers/UserContext";
import { FormButton } from "../../styles/Button";
import { ModalStyled } from "./style";

export const ModalForm = () => {
  const { register, handleSubmit } = useForm();
  const { addTech } = useContext(TechContext);
  const { setModalIsOpen } = useContext(UserContext);

  const FormSubmit = (Data) => {
    addTech(Data);
    setModalIsOpen(false);
  };

  return (
    <ModalStyled>
      <div className="container">
        <div className="title-form">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setModalIsOpen(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <form action="" onSubmit={handleSubmit(FormSubmit)}>
          <label htmlFor="atividade">Nome</label>
          <input
            type="text"
            id="title"
            placeholder="Ex: javaScript, TypeScript, etc..."
            {...register("title")}
          />

          <label htmlFor="nivel">Selecionar status</label>
          <select name="" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="button-div">
            <FormButton type="submit"> Cadastrar tecnologia</FormButton>
          </div>
        </form>
      </div>
    </ModalStyled>
  );
};
