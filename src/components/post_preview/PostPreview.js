import "./PostPreview.css";
import { useState } from "react";
import { BiMap } from "react-icons/bi";
import ImageSlider from "./image_slider/ImageSlider";

export default function PostPreview() {
  const [rating, setRating] = useState(5);
  return (
    <div className="preview">
      <div className="postPreview">
        <ImageSlider />

        <div className="postPreview__details">
          <h1 className="postPreview__details--title">Spacious House</h1>
          <p className="postPreview__details--localization">
            <BiMap /> 25th st, Manouba, Tunis
          </p>

          <div className="postPreview__details--rating">
            {Array(rating)
              .fill()
              .map((star, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>

          <div className="postPreview__details__price">
            <h1 className="postPreview__details__price--value">550 DT</h1>
            <p className="postPreview__details__price--periode">/month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
