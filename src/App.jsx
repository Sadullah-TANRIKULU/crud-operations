import "./App.css";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App font-mono flex flex-col justify-center items-center gap-4 m-4 ">
      <h4 className="bg-lime-300 p-4  ">CRUD OPERATIONS </h4>
      <Create />
      <Read />
      <Update />
      <Delete />
    </div>
  );
}

export default App;
