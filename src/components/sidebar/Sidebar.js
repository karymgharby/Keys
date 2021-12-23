import "./Sidebar.css"
import UserNav from "./userNav/UserNav"
import { RiCompassDiscoverLine } from "react-icons/ri";
import { BsBookmarkDash, BsChatLeft, BsBell } from "react-icons/bs";

function Sidebar() {
    return (
       <div className="sidebar">
         <UserNav/>
         <div className="sidebar__navlinks">

           <div className="sidebar__navlinks__option">
             <p className="sidebar__navlinks__option--text">Discover</p>
             <RiCompassDiscoverLine className="sidebar__navlinks__option--icon"/>
           </div>

           <div className="sidebar__navlinks__option">
             <p className="sidebar__navlinks__option--text">Saved</p>
             <BsBookmarkDash className="sidebar__navlinks__option--icon"/>
           </div>

           <div className="sidebar__navlinks__option">
             <p className="sidebar__navlinks__option--text">Chat</p>
             <BsChatLeft className="sidebar__navlinks__option--icon"/>
           </div>

           <div className="sidebar__navlinks__option">
             <p className="sidebar__navlinks__option--text">Notifications</p>
             <BsBell className="sidebar__navlinks__option--icon"/>
           </div>

         </div>
       </div>
    )
}

export default Sidebar

 