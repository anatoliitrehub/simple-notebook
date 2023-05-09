// import logo from "./logo.svg";
import "./App.scss";
import SearchBox from "./components/SearchBox/SearchBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import { Modal } from "./components/Modal/Modal";
import { NotesContext } from "./Context/Context";
import { db } from "./DB/db";
import {
  getFetchDbName,
  getFetchDbData,
  getFetchDbRecords,
  postFetchDb,
  getFetchDb,
  createFetchDb,
} from "./servicesapi/quintadb";

import React, { useEffect, useState } from "react";

const initNotes = [
  {
    date: 1673391523766,
    title: "Title",
    text: "first text",
  },
];

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentDb, setCurrentDb] = useState("IndDB");
  // const [formInput, setFormInput] = useState({
  //   title: "",
  //   text: "",
  // });

  // getFetchDbName();

  // getFetchDb();

  // createFetchDb("notes");

  // getFetchDbData(); //get data fields

  useEffect(() => {
    currentDb === "IndDB" &&
      (async () => {
        return await db.notes.toArray();
      })().then((data) => {
        setNotes(data.length > 0 ? data : initNotes);
      });

    currentDb === "QuiDB" && setNotes(initNotes);

    currentDb === "QuiDB" &&
      console.log(
        getFetchDbRecords().then((data) =>
          data.forEach((item) => console.log(item))
        )
      );

    // postFetchDb();
  }, [currentDb]);

  useEffect(() => {
    currentDb === "IndDB" &&
      (async () => {
        //write current notes to indexDB
        db.transaction("rw", db.notes, async () => {
          db.notes.clear();
          await db.notes.bulkPut(notes);
        });
      })().catch((error) => {
        console.log(`Failed to write: ${error}`);
      });
  }, [notes]);

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
    if (window.confirm("delete?")) {
      setNotes(notes.filter((item) => item.date !== selected));
      setSelected("");
    }
  };
  const editNote = () => {
    // console.log("edit", selected);
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

  const changeDb = () => {
    setCurrentDb(currentDb === "IndDB" ? "QuiDB" : "IndDB");
  };

  const handlerForm = (ev) => {
    ev.preventDefault();
    // setFormInput({ title, content });
    notes.forEach((item) => {
      if (item.date === selected) {
        item.title = title;
        item.text = content;
      }
    });
    //update notes state
    setNotes(notes.map((item) => item));

    setTitle("");
    setContent("");
    setModalOpen(false);
    ev.target.reset();
  };

  const handlerInput = (ev) => {
    ev.preventDefault();
    const { name, value } = ev.target;
    name === "title" ? setTitle(value) : setContent(value);
    // setFormInput({ [name]: value });
  };

  const handlerCancelForm = () => {
    // setFormInput("");
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
          currentDb,
          currentActive,
          newNote,
          editNote,
          deleteNote,
          filterNote,
          changeDb,
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
              <p>Edit note</p>
              <label htmlFor="edittitle">Title:</label>
              <input
                id="edittitle"
                className="modalInput"
                type="text"
                name="title"
                placeholder="Title"
                onChange={handlerInput}
                value={title}
                required
              ></input>
              <label htmlFor="edittext">Note text:</label>

              <textarea
                id="edittext"
                className="modalTextArea"
                name="content"
                rows="5"
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
