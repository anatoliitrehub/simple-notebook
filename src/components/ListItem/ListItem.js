import st from "./ListenItem.module.scss";

const ListItem = ({ note }) => {
  const { date, title, text } = note;
  const dateNote = date ? new Date(date).toLocaleString() : null;
  return (
    <>
      <div className={st.list}>
        <span className={st.date}>{dateNote}</span>
        <span className={st.title}>{title}</span>
        <span>{text}</span>
      </div>
    </>
  );
};

export default ListItem;
