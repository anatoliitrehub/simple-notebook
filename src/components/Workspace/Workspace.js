import { NotesContext } from "../../Context/Context";
import { useContext, useState } from "react";
import ListItem from "../ListItem/ListItem";
import st from "./Workspace.module.scss";

const Workspace = () => {
  const { notes, currentActive, filter } = useContext(NotesContext);
  // const [itemStyle, setItemStyle] = useState(st.item);
  // console.log(notes);
  const [activeNote, setActiveNote] = useState("");
  const filtered =
    notes.filter((note) => note.title.toLowerCase().includes(filter)).length > 0
      ? notes.filter((note) => note.title.toLowerCase().includes(filter))
      : [{ title: "There are no matches" }];

  const activeNoteItem = filtered.find(
    (item) => item.date === Number(activeNote)
  ) || {
    title: "There are no selected notes",
  };

  const activeToogle = (date) => {
    // console.log(date);
    // setItemStyle(st.item + " " + st.itemActive);

    // filtered.forEach((item) => {
    //   if (item.date === date) item.active = true;
    //   else item.active = false;
    //   console.log(item.active);
    // });
    // setFiltered(filtered);

    // console.log(filtered);

    // itemStyle = st.item + st.itemActive;
    setActiveNote(date);
    currentActive(date);
  };

  return (
    <>
      <div className={st.wrapper}>
        <ul className={st.listNotes}>
          {filtered &&
            filtered.map((note) => {
              const { date, title, text } = note;
              const dateNote = date
                ? new Date(date).toLocaleDateString()
                : null;

              return (
                <>
                  <li
                    key={200 * Math.random()}
                    className={!(date === activeNote) ? st.item : st.itemActive}
                    onClick={() => activeToogle(date)}
                  >
                    <span className={st.title}>{title}</span>
                    <span>{dateNote}</span>
                    <span>
                      {text &&
                        (text.length <= 15 ? text : text.slice(0, 9) + "...")}
                    </span>
                  </li>
                </>
              );
            })}
          {!notes && <li className={st.item}>There are no notes yet</li>}
        </ul>

        <div className={st.listItems}>
          <ListItem
            key={(1000 * Math.random()).toString() + "aBc"}
            note={activeNoteItem}
          />
        </div>
      </div>
    </>
  );
};

export default Workspace;
