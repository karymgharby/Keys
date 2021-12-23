import { BiUser, BiCog, BiLogOut } from "react-icons/bi";

export default function UserNavDetails() {
  return (
    <div className="userNavDetails">
      <div className="userNavDetails__option">
        <BiUser className="userNavDetails__option--icon" />
        <p className="userNavDetails__option--text">Profile</p>
      </div>
      <div className="userNavDetails__option">
        <BiCog className="userNavDetails__option--icon" />
        <p className="userNavDetails__option--text">Settings</p>
      </div>
      <div className="userNavDetails__option">
        <BiLogOut className="userNavDetails__option--icon" />
        <p className="userNavDetails__option--text">Logout</p>
      </div>
    </div>
  );
}
