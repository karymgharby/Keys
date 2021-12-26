import "./Discover.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Map from "../../components/map/Map";
import Post from "../../components/post/Post";
export default function Discover() {
  return (
    <div className="discover">
      <Sidebar />
      <div className="discover__posts">
        <h1 className="page__title">Discover</h1>
        <p className="page__navigation">Discover {">"} Houses</p>

        <Post
          postLocalisation="25th st , Manouba , Tunis "
          postTitle="Spacious and Luminous "
          postDescription="Great for entertaining: spacious, updated 2 bedroom, 1 bathroom apartment in Lakeview, available May 1st. Close to nightlife with private backyard. "
          postPrice="550"
          houseImage="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
      <Map />
    </div>
  );
}
