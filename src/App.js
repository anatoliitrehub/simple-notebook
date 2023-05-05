// import logo from "./logo.svg";
import "./App.scss";
import SearchBox from "./components/SearchBox/SearchBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";

function App() {
  return (
    <div className="container">
      <header>
        <div className="header_sideBar">
          <Sidebar />
          <SearchBox />
        </div>
      </header>
      <main>
        <Workspace />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
