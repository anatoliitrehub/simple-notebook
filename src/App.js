// import logo from "./logo.svg";
import "./App.scss";
import SearchBox from "./components/SearchBox/SearchBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import { Modal } from "./components/Modal/Modal";
import { NotesContext } from "./Context/Context";

import React, { useState } from "react";

// const NotesContext = React.createContext(null);

const initNotes = [
  {
    date: 1673390023766,
    title: "Title",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi labore asperiores facere dolor nihil ipsam aspernatur adipisci natus enim sunt delectus modi corporis libero repellat mollitia, cumque voluptates illo perspiciatis!",
  },
  {
    date: 1673391523766,
    title: "Title1",
    text: "text1",
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [filter, setFilter] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formInput, setFormInput] = useState({
    title: "",
    content: "",
  });
  const newNote = () => {
    setNotes([
      ...notes,
      {
        date: Date.now(),
        title: "New note",
        content: "",
      },
    ]);
  };
  const editNote = () => {};
  const deleteNote = () => {};

  const filterNote = (filterWord) => {
    setFilter(filterWord);
  };

  const handlerForm = (ev) => {
    ev.preventDefault();
    setFormInput({ title, content });
    setTitle("");
    setContent("");
    setModalOpen(false);
    ev.target.reset();
  };

  const handlerInput = (ev) => {
    ev.preventDefault();
    console.log(formInput);
    const { name, value } = ev.target;
    name === "title" ? setTitle(value) : setContent(value);
    // setFormInput({ [name]: value });
  };

  return (
    <>
      <NotesContext.Provider
        value={{ notes, filter, newNote, editNote, deleteNote, filterNote }}
      >
        <header>
          <div className="container">
            <div className="header_sideBar">
              <Sidebar />
              <SearchBox />
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <Workspace />
          </div>
        </main>

        <footer>
          <div className="container">
            <p style={{ textAlign: "right" }}>
              Notebook created by Trehub Anatolii
            </p>
          </div>
        </footer>
        {modalOpen && (
          <Modal>
            <form onSubmit={handlerForm}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handlerInput}
              ></input>
              <input
                type="text"
                name="content"
                placeholder="Note content"
                onChange={handlerInput}
              ></input>
              <button type="submit">Apply</button>
            </form>
          </Modal>
        )}
      </NotesContext.Provider>
    </>
  );
}

export default App;
