import NavBar from "./../components/navbar/navbar"
import Body from "./../components/body/body"
import './App.css';
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <NavBar search={search} setSearch={setSearch}/>
      <Body search={search}/>
    </>
  );
}

export default App;
