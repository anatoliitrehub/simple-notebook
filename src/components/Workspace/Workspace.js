import { NotesContext } from "../../Context/Context";
import { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import st from "./Workspace.module.scss";

const Workspace = () => {
  const { notes, filter } = useContext(NotesContext);
  // console.log(notes);
  const filtered =
    notes.filter((note) => note.title.toLowerCase().includes(filter)).length > 0
      ? notes.filter((note) => note.title.toLowerCase().includes(filter))
      : [{ title: "There are no matches" }];

  return (
    <>
      <div className={st.wrapper}>
        <ul className={st.listNotes}>
          {notes &&
            notes.map((note) => {
              const { date, title, text } = note;
              const dateNote = date
                ? new Date(date).toLocaleDateString()
                : null;
              return (
                <>
                  <li key={200 * Math.random()} className={st.item}>
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

        <ul className={st.listItems}>
          {filtered &&
            filtered.map((note) => {
              return (
                <>
                  <ListItem
                    key={(1000 * Math.random()).toString()}
                    note={note}
                  />
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Workspace;
