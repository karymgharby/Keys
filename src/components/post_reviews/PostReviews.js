import React, { useState } from "react";
import "./PostReviews.css";
import user from "../../assets/test_img.jpg";

function PostReviews() {
  const [rating, setRating] = useState(5);
  return (
    <div className="post_reviews">
      <div className="post_reviews-title">
        <p className="post_reviews-title-text">Reviews</p>
        <div className="post_reviews-title-line" />
      </div>
      <div className="post_reviews-user">
        <div className="post_reviews-user-left">
          <img src={user} alt="user" className="post_reviews-user-img" />
          <div className=" post_reviews-user-info ">
            <h4>Karym Gharby</h4>
            <p>A client</p>
          </div>
        </div>
        <div className="post_reviews-user-rating">
          {Array(rating)
            .fill()
            .map((star, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <div className="post_reviews-feedback">
        <p>
          great house , i loved the private backyard and the neighbors was so
          nice to me , thanks keys for the good service
        </p>
      </div>
    </div>
  );
}

export default PostReviews;
