import React from "react";
import "./PostInfo.css";
import { Button } from "@mui/material";
import { BiBed, BiBath, BiShapeSquare } from "react-icons/bi";
import { RiCollageLine } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";

function PostInfo() {
  return (
      <div className="postInfo">
        <div className="post_title">
          <p>Details</p>
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

        <div className="post_description">
          <p>
            Great for entertaining: spacious, updated 2 bedroom, 1 bathroom
            apartment in Lakeview, available May 1st. Close to nightlife with
            private backyard.
          </p>
        </div>

        <div className="post_visit">
          <div className="post_visit-date">
            <p> choose a date to visit the House : </p>
          </div>
          {/* Date range picker  */}
          <div className="post_visit-datepicker">
            <p> 🚩Date range picker🚩 </p>
          </div>

          <Button className="post_visit-button">Validate</Button>
        </div>
      </div>
  );
}

export default PostInfo;
