import React, { useState } from "react";
import "./Post.css";
import test_img from "../../assets/test_img.jpg";
import { Rating } from "@mui/material";
import { BiBed, BiBath, BiShapeSquare } from "react-icons/bi";
import { RiCollageLine } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";

const Post = ({ postLocalisation, postTitle, postDescription, postPrice }) => {
  const [value, setValue] = useState("");
  return (
    <div className="carte__main">
      <div className="carte__img">
        <img src={test_img} className="carte__img" alt="test" />
      </div>
      <div className="carte_detaille">
        <div className="info_img">
          <p className="localisation">{postLocalisation}</p>
          <p className="house_name">{postTitle}</p>
          <p className="house_descriptin">{postDescription}</p>
        </div>
        <div className="rating_price">
          <Rating
            className="rating"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p className="house_price">
            <span>{postPrice}DT/</span>month
          </p>
        </div>
        <div className="house_icons">
          <div className="icons">
            <BiBed className="icon_img" style={{ color: "#707C97" }} />
            <label className="icon_detaile">2</label>
          </div>
          <div className="icons">
            <RiCollageLine className="icon_img" style={{ color: "#707C97" }} />
            <label className="icon_detaile">2</label>
          </div>
          <div className="icons">
            <BiBath className="icon_img" style={{ color: "#707C97" }} />
            <label className="icon_detaile">2</label>
          </div>
          <div className="icons">
            <BiShapeSquare className="icon_img" style={{ color: "#707C97" }} />
            <label className="icon_detaile">2</label>
          </div>
          <div className="icons">
            <AiOutlineWifi className="icon_img" style={{ color: "#707C97" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
