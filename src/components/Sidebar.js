
import {GrHomeRounded,GrNotification } from 'react-icons/gr'
import {AiOutlineMessage,AiOutlineAppstore} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
import {MdOutlineNotifications} from 'react-icons/md'
import {FaRegUserCircle} from 'react-icons/fa'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import './sidebar.css'
import keys from '../assets/k.png'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


function Sidebar() {
    return (
        <div className='sidebar'>
            <img src={keys} className="sidebar__logo" alt='keys'/>
            <div className='sidebar__nav'>

              <div className="sidebar__nav--navItem">
                <AiOutlineAppstore className="sidebar__nav--icon"/>
                <p className="sidebar__nav--text">Home</p>
              </div>
              
              <div className="sidebar__nav--navItem">
                <AiOutlineMessage className="sidebar__nav--icon"/>
                <p className="sidebar__nav--text">Chat</p>
              </div>

              <div className="sidebar__nav--navItem">
                <MdOutlineNotifications className="sidebar__nav--icon" />
                <p className="sidebar__nav--text">Notifications</p>
              </div>

              <div className="sidebar__nav--navItem">
                <FaRegUserCircle className="sidebar__nav--icon"/>
                <p className="sidebar__nav--text">Rooms</p>
              </div>

                <div className="sidebar__nav--navItem ">
                  <StyledBadge 
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                      className="userPicture"
                  >
                      <Avatar className="profilePicture" alt="profilePic" src=""  />
                      
                  </StyledBadge>
                 <p className="sidebar__nav--text">Profile</p>
                </div>
            </div>

            <div className="logoutItem">
              <BiLogOutCircle className="sidebar__nav--icon "/>
              <p className="sidebar__nav--text">Log out</p>
            </div>

        </div>
    )
}

export default Sidebar

