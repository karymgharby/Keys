import "./UserNav.css";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { FiChevronDown } from "react-icons/fi";
import UserNavDetails from "./UserNavDetails";

export default function UserNav({ src }) {
  const [userOptions, setUserOptions] = useState(false);
  const toggleUserOptions = () => {
    setUserOptions(!userOptions);
  };

  return (
    <div className="userNav">
      <div className="userNav__container" onClick={toggleUserOptions}>
        <Avatar
          className="userNav__container--avatar"
          alt="Profile picture"
          src={src}
        />
        <p className="userNav__container--username">John Doe</p>
        <FiChevronDown className="userNav__container--icon" />
      </div>
      {userOptions ? <UserNavDetails /> : null}
    </div>
  );
}
