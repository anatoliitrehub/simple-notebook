import st from "./ListenItem.module.css";

const ListItem = ({ note }) => {
  const { date, title, text } = note;
  return (
    <>
      <li className={st.list}>
        <span>{date}</span>
        <span className={st.title}>{title}</span>
        <span>{text}</span>
      </li>
    </>
  );
};

export default ListItem;
