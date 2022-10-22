import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Button } from "@material-ui/core";
const Sidebar = () => {
  return(
    <div className="sidebar">
        <div className="link">
            <HomeIcon />
            <h2>Home</h2>
        </div>
        <div className="link">
            <SearchIcon />
            <h2>Explore</h2>
        </div>
        <div className="link">
            <MailOutlineIcon />
            <h2>Messages</h2>
        </div>
        <div className="link">
            <NotificationsNoneIcon />
            <h2>Notifications</h2>
        </div>
        <div className="link">
            <BookmarkBorderIcon />
            <h2>Bookmarks</h2>
        </div>
        <div className="link">
            <ListAltIcon />
            <h2>Lists</h2>
        </div>
        <div className="link">
            <PermIdentityIcon />
            <h2>Profile</h2>
        </div>
        {/* <SidebarLink text="Home" active={true} Icon={HomeIcon} />
        <SidebarLink text="Explore" Icon={SearchIcon} />
        <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
        <SidebarLink text="Messages" Icon={MailOutlineIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarLink text="Lists" Icon={ListAltIcon} />
        <SidebarLink text="Profile" Icon={PermIdentityIcon} />
        <SidebarLink text="More" Icon={MoreHorizIcon}/> */}
        {/* <Button id="tweet">
            Tweet
        </Button> */}
    </div>
  );
}

export default Sidebar;