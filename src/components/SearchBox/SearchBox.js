import st from "./SearchBox.module.css";
import icons from "../../images/sprite.svg";

const SearchBox = () => {
  return (
    <>
      {/* <div className={st.title}>SearchBox</div> */}
      <div className={st.wrapper}>
        <svg className={st.icon}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
        <input type="text" className={st.input} placeholder="Search" />
      </div>
    </>
  );
};

export default SearchBox;
