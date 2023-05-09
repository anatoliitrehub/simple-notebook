import st from "./Sidebar.module.scss";
import icons from "../../images/sprite.svg";
import { NotesContext } from "../../Context/Context";
import { useContext } from "react";

const Sidebar = () => {
  const { selected, currentDb, newNote, deleteNote, editNote, changeDb } =
    useContext(NotesContext);
  return (
    <>
      {/* <div className={st.title}>Sidebar</div> */}
      <ul className={st.list}>
        <li>
          <button className={st.button} onClick={() => newNote()}>
            <svg className={st.icon}>
              <use href={`${icons}#icon-plus`}></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            className={selected ? st.button : st.buttonDisabled}
            onClick={() => deleteNote()}
            disabled={Boolean(!selected)}
          >
            <svg className={st.icon}>
              <use href={`${icons}#icon-bin`}></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            className={selected ? st.button : st.buttonDisabled}
            onClick={() => editNote()}
            disabled={Boolean(!selected)}
          >
            <svg className={st.icon}>
              <use href={`${icons}#icon-pencil`}></use>
            </svg>
          </button>
        </li>
        <li>
          <button className={st.button} onClick={() => changeDb()}>
            <svg className={st.icon}>
              <use href={`${icons}#icon-database`}></use>
            </svg>
          </button>
        </li>
        <li className={st.base}>{currentDb}</li>
      </ul>
    </>
  );
};

export default Sidebar;
