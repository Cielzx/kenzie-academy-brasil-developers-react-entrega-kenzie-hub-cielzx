import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { TechContext } from "../../Providers/TechContex";
import { UserContext } from "../../Providers/UserContext";
import { FormButton } from "../../styles/Button";
import { ModalStyled } from "../ModalForm/style";

export const EditModalForm = () => {
  const { register, handleSubmit } = useForm();
  const { deleteTech, id, updateTech, title } = useContext(TechContext);
  const { setEditIsOpen } = useContext(UserContext);

  const handleDelete = () => {
    deleteTech(id);

    setEditIsOpen(false);
  };

  const FormSubmit = (Data) => {
    updateTech({ id, Data });
  };
  return (
    <ModalStyled>
      <div className="container">
        <div className="title-form">
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => setEditIsOpen(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <form action="" onSubmit={handleSubmit(FormSubmit)}>
          <label htmlFor="atividade">Nome do projeto</label>
          <input type="text" disabled id="material" placeholder={`${title}`} />

          <label htmlFor="status">Status</label>
          <select name="" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <FormButton type="submit">Salvar alteração</FormButton>
            <button
              className="delete-button"
              onClick={() => handleDelete()}
              type="button"
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ModalStyled>
  );
};
