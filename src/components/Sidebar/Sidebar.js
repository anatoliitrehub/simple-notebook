import st from "./Sidebar.module.scss";
import icons from "../../images/sprite.svg";
import { NotesContext } from "../../Context/Context";
import { useContext } from "react";

const Sidebar = () => {
  const { newNote } = useContext(NotesContext);
  return (
    <>
      {/* <div className={st.title}>Sidebar</div> */}
      <ul className={st.list}>
        <li onClick={() => newNote()}>
          <svg className={st.icon}>
            <use href={`${icons}#icon-plus`}></use>
          </svg>
        </li>
        <li>
          <svg className={st.icon}>
            <use href={`${icons}#icon-bin`}></use>
          </svg>
        </li>
        <li>
          <svg className={st.icon}>
            <use href={`${icons}#icon-pencil`}></use>
          </svg>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
