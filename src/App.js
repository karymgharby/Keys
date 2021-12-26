import "./App.css";
import Discover from "./pages/discover/Discover";
import { Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__main">
        <Discover />
      </div>
    </div>
  );
}

export default App;
