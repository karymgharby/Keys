import "./UserNav.css"
import {useState} from "react"
import Avatar from '@mui/material/Avatar';
import { FiChevronDown } from "react-icons/fi";
import UserNavDetails from "./UserNavDetails"

export default function UserNav({src}) {

    const [userOptions, setUserOptions] = useState(false)
    const toggleUserOptions = () => {
        setUserOptions(!userOptions)
    }

    return(
        <div className="userNav">
            <div className="userNav__container">
                <Avatar alt="Profile picture" src={src} />
                <FiChevronDown onClick={toggleUserOptions}/>
            </div>
            {userOptions ? <UserNavDetails/> : null}
        </div>
    )
}