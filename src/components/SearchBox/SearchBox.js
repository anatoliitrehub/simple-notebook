import st from "./SearchBox.module.css";
import icons from "../../images/sprite.svg";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { NotesContext } from "../../Context/Context";

const SearchBox = () => {
  const [text, setText] = useState("");
  const { filterNote } = useContext(NotesContext);
  // console.log(notes);

  useEffect(() => {
    filterNote(text);
    console.log(text);
  }, [text, filterNote]);

  // console.log(notes.filter((note) => note.title.toLowerCase().includes(text)));
  return (
    <>
      {/* <div className={st.title}>SearchBox</div> */}
      <div className={st.wrapper}>
        <svg className={st.icon}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
        <input
          type="text"
          className={st.input}
          placeholder="Search"
          onChange={(ev) => setText(ev.target.value.toLowerCase().trim())}
          value={text}
        />
      </div>
    </>
  );
};

export default SearchBox;
