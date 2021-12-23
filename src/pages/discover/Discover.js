import "./Discover.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Map from "../../components/map/Map";
import Post from "../../components/post/Post";
export default function Discover() {
  return (
    <div className="discover">
      <Sidebar />
      <Post postLocalisation="" postTitle="" postDescription="" postPrice="" />
      <Map />
    </div>
  );
}
