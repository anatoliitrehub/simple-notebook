import st from "./ListenItem.module.css";

const ListItem = ({ note }) => {
  const { date, title, text } = note;
  const dateNote = new Date(date).toLocaleString();
  return (
    <>
      <li className={st.list}>
        <span>{dateNote}</span>
        <span className={st.title}>{title}</span>
        <span>{text}</span>
      </li>
    </>
  );
};

export default ListItem;
