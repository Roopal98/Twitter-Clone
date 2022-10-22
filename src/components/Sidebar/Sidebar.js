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
// import { Button } from "@material-ui/core";
const Sidebar = () => {
  return(

    <div className="sidebar padding-0">
        <i className="fab fa-twitter"><TwitterIcon/></i>
        <div className="sidebarOption active">
            <span className="material-icons"><HomeIcon/></span>
             <h2>Home</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><SearchIcon /></span>
             <h2>Explore</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><NotificationsNoneIcon /></span>
             <h2>Notifications</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><MailOutlineIcon /></span>
             <h2>Messages</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><BookmarkBorderIcon /></span>
             <h2>Bookmarks</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><ListAltIcon /></span>
             <h2>Lists</h2>
        </div>

        <div className="sidebarOption">
            <span className="material-icons"><PermIdentityIcon /></span>
             <h2>Profile</h2>
        </div>
        <div className="sidebarOption">
            <span className="material-icons"><MoreHorizIcon /></span>
             <h2>More</h2>
        </div>
        <div><button className="tweet">Tweet</button></div>
    </div>
    // <div className="sidebar">
    //     <div className="link">
    //         <i><HomeIcon /></i>
    //         <h2>Home</h2>
    //     </div>
    //     <div className="link">
    //         <span><SearchIcon /></span>
    //         <h2> Explore</h2>
    //     </div>
    //     <div className="link">
    //     <span><MailOutlineIcon /></span>
    //         <h2>Messages</h2>
    //     </div>
    //     <div className="link">
    //     <span><NotificationsNoneIcon /></span>
    //         <h2>Notifications</h2>
    //     </div>
    //     <div className="link">
    //     <span><BookmarkBorderIcon /></span>
    //         <h2>Bookmarks</h2>
    //     </div>
    //     <div className="link">
    //     <span><ListAltIcon /></span>
    //         <h2>Lists</h2>
    //     </div>
    //     <div className="link">
    //         <span><PermIdentityIcon /></span>
    //         <h2>Profile</h2>
    //     </div>
    //     {/* <SidebarLink text="Home" active={true} Icon={HomeIcon} />
    //     <SidebarLink text="Explore" Icon={SearchIcon} />
    //     <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
    //     <SidebarLink text="Messages" Icon={MailOutlineIcon} />
    //     <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
    //     <SidebarLink text="Lists" Icon={ListAltIcon} />
    //     <SidebarLink text="Profile" Icon={PermIdentityIcon} />
    //     <SidebarLink text="More" Icon={MoreHorizIcon}/> */}
    //     {/* <Button id="tweet">
    //         Tweet
    //     </Button> */}
    // </div>
  );
}

export default Sidebar;