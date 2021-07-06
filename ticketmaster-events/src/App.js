import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import EventList from "./components/EventList";

function App() {
  const [searchTerm, setSearchTerm] = useState("Comedy");
  return (
    <div className="App">
      <Header searchTerm={searchTerm} />
      <Search setSearchTerm={setSearchTerm} />
      <EventList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
