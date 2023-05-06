import { NotesContext } from "../../Context/Context";
import { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import st from "./Workspace.module.scss";

const Workspace = () => {
  const { notes, filter } = useContext(NotesContext);
  // console.log(notes);
  const filtered = notes.filter((note) =>
    note.title.toLowerCase().includes(filter)
  );

  return (
    <>
      <div className={st.wrapper}>
        <ul className={st.listNotes}>
          {notes &&
            notes.map((note) => {
              return (
                <>
                  <li key={200 * Math.random()} className={st.item}>
                    {note.title}
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
                  <ListItem key={1000 * Math.random()} note={note} />
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Workspace;
