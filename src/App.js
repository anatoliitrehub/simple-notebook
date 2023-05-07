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
  const [selected, setSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formInput, setFormInput] = useState({
    title: "",
    text: "",
  });
  const newNote = () => {
    setNotes([
      ...notes,
      {
        date: Date.now(),
        title: "New note",
        text: "No text",
      },
    ]);
  };
  const deleteNote = () => {
    // console.log("delete", selected);
    if (window.confirm("delete?")) {
      // <Modal>
      //   <p>Delete this note?</p>
      //   <button>Delete</button>
      //   <button>Cancel</button>
      // </Modal>;

      setNotes(notes.filter((item) => item.date !== selected));
      setSelected("");
    }
  };
  const editNote = () => {
    console.log("edit", selected);
    notes.forEach((item) => {
      if (item.date === selected) {
        setTitle(() => item.title);
        setContent(() => item.text);
      }
    });

    setModalOpen(true);
  };

  const filterNote = (filterWord) => {
    setFilter(filterWord);
  };

  const currentActive = (date) => {
    setSelected(date);
  };

  const handlerForm = (ev) => {
    ev.preventDefault();
    setFormInput({ title, content });
    notes.forEach((item) => {
      if (item.date === selected) {
        item.title = title;
        item.text = content;
      }
    });
    setTitle("");
    setContent("");
    setModalOpen(false);
    ev.target.reset();
  };

  const handlerInput = (ev) => {
    ev.preventDefault();
    // console.log(formInput);
    const { name, value } = ev.target;
    name === "title" ? setTitle(value) : setContent(value);
    // setFormInput({ [name]: value });
  };

  const handlerCancelForm = () => {
    setFormInput("");

    setTitle("");
    setContent("");
    setModalOpen(false);
  };

  return (
    <>
      <NotesContext.Provider
        value={{
          notes,
          filter,
          selected,
          currentActive,
          newNote,
          editNote,
          deleteNote,
          filterNote,
        }}
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
            <form onSubmit={handlerForm} className="editForm">
              <label for="edittitle">Title:</label>
              <input
                id="edittitle"
                type="text"
                name="title"
                placeholder="Title"
                onChange={handlerInput}
                value={title}
                required
              ></input>
              <label for="edittext">Note text:</label>

              <textarea
                id="edittext"
                name="content"
                rows="4"
                cols="50"
                placeholder="Note content"
                onChange={handlerInput}
                value={content}
                required
              ></textarea>
              <div>
                <button type="submit">Apply</button>
                <button onClick={() => handlerCancelForm()}>Cancel</button>
              </div>
            </form>
          </Modal>
        )}
      </NotesContext.Provider>
    </>
  );
}

export default App;
