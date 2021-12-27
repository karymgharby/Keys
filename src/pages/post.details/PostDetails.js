import PostPreview from "../../components/post_preview/PostPreview";
import PostInfo from "../../components/post_info/PostInfo";
import Map from "../../components/map/Map";
import "./PostDetails.css";
export default function PostDetails() {
  return (
    <div className="Postdeatils">
      <div className="Postdeatils__post">
        <h1 className="page__title">Discover</h1>
        <p className="page__navigation">
          Discover {">"} Houses {">"} Details
        </p>
        <PostPreview />
        <div className="Postdetails__more">
          <PostInfo />
          <PostReviews/>
        </div>
      </div>
      <div className="Postdetails__mapview">
        <Map />
      </div>
    </div>
  );
}
