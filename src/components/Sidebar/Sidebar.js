import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddIcon from '@mui/icons-material/Add';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
// import { Button } from "@material-ui/core";
const Sidebar = () => {
  return(

    <div className="sidebar padding-0">
        <i className="fab fa-twitter"><TwitterIcon/></i>
        <div className="sidebarOption active">
            <span className="material-icons"><HomeIcon/></span>
             <h2 className="menu-itm">Home</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><SearchIcon /></span>
             <h2 className="menu-itm">Explore</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><NotificationsNoneIcon /></span>
             <h2 className="menu-itm">Notifications</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><MailOutlineIcon /></span>
             <h2 className="menu-itm">Messages</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><BookmarkBorderIcon /></span>
             <h2 className="menu-itm">Bookmarks</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><ListAltIcon /></span>
             <h2 className="menu-itm">Lists</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><PermIdentityIcon /></span>
             <h2 className="menu-itm">Profile</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><LogoutIcon/></span>
             <h2 className="menu-itm">Logout</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><MoreHorizIcon /></span>
             <h2 className="menu-itm">More</h2>
        </div>
        <div><button className="tweet menu-itm">Tweet</button></div>
        {/* <div><span className='test'>testing</span></div> */}
    </div>
  );
}

export default Sidebar;