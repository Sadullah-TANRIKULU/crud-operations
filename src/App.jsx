import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App font-mono flex flex-col justify-center items-center gap-4 m-4 ">
      <h4 className="bg-lime-300 p-4  ">CRUD OPERATIONS </h4>
      <Create />
      <Read />
      <Update />
    </div>
  );
}

export default App;
