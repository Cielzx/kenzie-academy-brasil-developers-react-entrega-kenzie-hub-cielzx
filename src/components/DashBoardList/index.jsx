import { useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import { UserContext } from "../../Providers/UserContext";
import { DivStyled } from "./style";
import { EditModalForm } from "../EditForm";
import { TechContext } from "../../Providers/TechContex";
import { CardLi } from "../CardTech";

export const DashList = () => {
  return (
    <DivStyled>
      <ul>
        <CardLi />
      </ul>
    </DivStyled>
  );
};
