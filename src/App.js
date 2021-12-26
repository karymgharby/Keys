import "./App.css";
import Discover from "./pages/discover/Discover";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import PostDetails from "./pages/post.details/PostDetails";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__main">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/post/details" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
