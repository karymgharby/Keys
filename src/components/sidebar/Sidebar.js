import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import { RiNotification3Line } from "react-icons/ri";
import { BiCog, BiLogOutCircle, BiNavigation } from "react-icons/bi";
import { BsBookmarkHeart, BsChat, BsCalendarRange } from "react-icons/bs";
import { useState } from "react";
import logo from "../../assets/logo.png";
import logoWatermark from "../../assets/logo-watermark.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selectedNav, setSelectedNav] = useState(2);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="keys-logo" className="sidebar__logo--image" />
      </div>
      <div className="sidebar__navlinks">
        {/* Profile */}
        <Link
          id="router__link"
          to="/profile"
          className={`sidebar__navlinks__option userNav__container ${
            selectedNav === 1 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(1)}
        >
          <Avatar
            className="userNav__container--avatar"
            alt="Profile picture"
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
          />
          <p className="sidebar__navlinks__option--text userNav__container--username">
            John Doe
          </p>
        </Link>

        {/* Discover */}
        <Link
          id="router__link"
          to="/"
          className={`sidebar__navlinks__option ${
            selectedNav === 2 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(2)}
        >
          <BiNavigation className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Discover</p>
        </Link>

        {/* Saved */}
        <Link
          id="router__link"
          to="/saved"
          className={`sidebar__navlinks__option ${
            selectedNav === 3 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(3)}
        >
          <BsBookmarkHeart className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Saved</p>
        </Link>

        {/* Visits */}
        <Link
          id="router__link"
          to="/visits"
          className={`sidebar__navlinks__option ${
            selectedNav === 4 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(4)}
        >
          <BsCalendarRange className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Visits</p>
        </Link>

        {/* Chat */}
        <Link
          id="router__link"
          to="/chat"
          className={`sidebar__navlinks__option ${
            selectedNav === 5 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(5)}
        >
          <BsChat className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Chat</p>
        </Link>

        {/* Notification */}
        <Link
          id="router__link"
          to="/notifications"
          className={`sidebar__navlinks__option ${
            selectedNav === 6 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(6)}
        >
          <RiNotification3Line className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Notifications</p>
        </Link>

        {/* Settings */}
        <Link
          id="router__link"
          to="/settings"
          className={`sidebar__navlinks__option ${
            selectedNav === 7 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(7)}
        >
          <BiCog className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Settings</p>
        </Link>

        {/* Logout */}
        <Link
          id="router__link"
          to="/signIn"
          className={`sidebar__navlinks__option ${
            selectedNav === 8 ? "selectedNav" : ""
          }`}
          onClick={() => setSelectedNav(8)}
        >
          <BiLogOutCircle className="sidebar__navlinks__option--icon" />
          <p className="sidebar__navlinks__option--text">Logout</p>
        </Link>
      </div>

      {/* Credits */}
      <div className="sidebar__credits">
        <img
          src={logoWatermark}
          alt="keys-logo"
          className="sidebar__credits--logo"
        />
        <p className="sidebar__credits--text">© 2022 Keys, Inc.</p>
      </div>
    </div>
  );
}

export default Sidebar;
