import "./App.css";
import Discover from "./pages/discover/Discover";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import DiscoverDetails from "./pages/discover/DiscoverDetails";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__main">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/post/details" element={<DiscoverDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
