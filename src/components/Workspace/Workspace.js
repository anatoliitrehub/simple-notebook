import ListItem from "../ListItem/ListItem";
import st from "./Workspace.module.scss";

const Workspace = () => {
  const notes = [
    {
      date: "date",
      title: "Title",
      text: "text",
    },
    {
      date: "date1",
      title: "Title1",
      text: "text1",
    },
  ];

  return (
    <>
      {/* <p className={st.title}>Workspace</p> */}
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
        </ul>

        <ul className={st.listItems}>
          {notes &&
            notes.map((note) => {
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
