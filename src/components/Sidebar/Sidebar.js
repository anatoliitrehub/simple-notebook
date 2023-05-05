import st from "./Sidebar.module.css";
import icons from "../../images/sprite.svg";

const Sidebar = () => {
  return (
    <>
      {/* <div className={st.title}>Sidebar</div> */}
      <ul className={st.list}>
        <li>
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
