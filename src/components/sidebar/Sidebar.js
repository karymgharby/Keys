import "./Sidebar.css";
import UserNav from "./userNav/UserNav";
import { MdAssistantNavigation } from "react-icons/md";
import {
  BsFillBookmarkFill,
  BsFillChatFill,
  BsFillBellFill,
} from "react-icons/bs";
import { useState } from "react";
import logo from "../../assets/logo-watermark.png";

function Sidebar() {
  const [selectedNav, setSelectedNav] = useState(1);

  return (
    <div className="sidebar">
      <UserNav />
      <div className="sidebar__navlinks">
        <div
          className={`sidebar__navlinks__option ${
            selectedNav === 1 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(1)}
        >
          <MdAssistantNavigation className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Discover</p>
        </div>

        <div
          className={`sidebar__navlinks__option ${
            selectedNav === 2 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(2)}
        >
          <BsFillBookmarkFill className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Saved</p>
        </div>

        <div
          className={`sidebar__navlinks__option ${
            selectedNav === 3 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(3)}
        >
          <BsFillChatFill className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Chat</p>
        </div>

        <div
          className={`sidebar__navlinks__option ${
            selectedNav === 4 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(4)}
        >
          <BsFillBellFill className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Notifications</p>
        </div>
      </div>

      <div className="sidebar__credits">
        <img src={logo} alt="keys-logo" className="sidebar__credits--logo" />
        <p className="sidebar__credits--text">© 2022 Keys, Inc.</p>
      </div>
    </div>
  );
}

export default Sidebar;
