import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import EventList from "./components/EventList";

function App() {
  const [searchTerm, setSearchTerm] = useState("Dua Lipa");
  return (
    <div className="App">
      <Header searchTerm={searchTerm} />
      <Search />
      <EventList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
